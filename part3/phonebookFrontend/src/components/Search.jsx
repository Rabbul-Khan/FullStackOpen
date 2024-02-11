const Search = ({ searchValue, handleSearchChange }) => {
  return (
    <>
      filter shown with{' '}
      <input
        type="text"
        value={searchValue}
        onChange={(e) => handleSearchChange(e)}
      />
    </>
  );
};

export default Search;
