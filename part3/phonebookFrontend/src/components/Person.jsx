const Person = ({ person, handleDelete }) => {
  return (
    <>
      <li>
        {person.name} {person.number}
      </li>
      <button onClick={() => handleDelete(person)}>delete</button>
    </>
  );
};

export default Person;
