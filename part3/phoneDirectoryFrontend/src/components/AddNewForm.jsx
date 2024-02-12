const AddNewForm = ({
  handleSubmit,
  handleNameChange,
  handleNumberChange,
  newPerson,
}) => {
  return (
    <>
      <h2>Add a new</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          name:{' '}
          <input onChange={(e) => handleNameChange(e)} value={newPerson.name} />
        </div>
        <div>
          Number:{' '}
          <input
            onChange={(e) => handleNumberChange(e)}
            value={newPerson.number}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewForm;
