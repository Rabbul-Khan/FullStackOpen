// If search box already contains a value, and then add a new contact, the new contact will not be shown in the search result list unless and until the search value is changed.

// We can eliminate persons array and keep only the search results array

import { useEffect, useState } from 'react';
import Search from './components/Search';
import AddNewForm from './components/AddNewForm';
import PersonsList from './components/PersonsList';
import personsServices from './services/personsServices';
import SuccessNotification from './components/SuccessNotification';
import ErrorNotification from './components/ErrorNotification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [searchValue, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(persons);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setNewPerson({ ...newPerson, name: e.target.value });
  };

  const handleNumberChange = (e) => {
    setNewPerson({ ...newPerson, number: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const matches = persons.filter((person) => {
      if (person.name.toLowerCase().includes(e.target.value)) {
        return person;
      }
    });
    setSearchResults(matches);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const personExists = persons.find(
      (person) =>
        person.name.toLocaleLowerCase() === newPerson.name.toLowerCase()
    );

    if (personExists) {
      if (
        window.confirm(
          `${personExists.name} is already add to phonebook, replace old number with new one?`
        )
      ) {
        const updateObject = {
          ...personExists,
          number: newPerson.number,
        };
        return personsServices
          .updateContact(updateObject)
          .then((response) => {
            setTimeout(() => {
              setSuccessMessage('');
            }, 5000);
            setSuccessMessage(`Updated ${response.data.name}`);
            setNewPerson({ name: '', number: '' });

            setPersons(
              persons.map((person) =>
                person.id !== updateObject.id ? person : updateObject
              )
            );
          })
          .catch((error) => {
            setTimeout(() => {
              setErrorMessage('');
            }, 5000);
            setErrorMessage(
              `Information of ${updateObject.name} has already been removed from server`
            );
            setPersons(
              persons.filter((person) => person.id !== personExists.id)
            );
            setSearchResults(
              persons.filter((person) => person.id !== personExists.id)
            );
          });
      }
    }

    personsServices.add(newPerson).then((response) => {
      setPersons(persons.concat(response.data));
      setSearchResults(persons.concat(response.data));

      setNewPerson({ name: '', number: '' });
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      setSuccessMessage(`Added ${response.data.name}`);
    });

    setNewPerson({ name: '', number: '' });
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personsServices.deleteContact(person.id).then((response) => {
        const updated = persons.filter((p) =>
          person.id !== p.id ? person : null
        );

        setPersons(updated);
        setSearchResults(updated);
      });
    }
  };

  useEffect(() => {
    personsServices.getAll().then((response) => {
      setPersons(response.data);
      setSearchResults(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification successMessage={successMessage} />
      <ErrorNotification errorMessage={errorMessage} />
      <Search
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />

      <AddNewForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newPerson={newPerson}
      />

      <PersonsList searchResults={searchResults} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
