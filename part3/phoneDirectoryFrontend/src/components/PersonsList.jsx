import Person from './Person';

const PersonsList = ({ searchResults, handleDelete }) => {
  return (
    <>
      <h2>Numbers</h2>
      <ul>
        {searchResults.map((person) => {
          return (
            <div key={person.name}>
              <Person person={person} handleDelete={handleDelete} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default PersonsList;
