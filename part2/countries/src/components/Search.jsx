const Search = ({ filterText, handleFilterTextChange }) => {
  return (
    <div>
      find countyies{" "}
      <input onChange={handleFilterTextChange} value={filterText} />
    </div>
  );
};

export default Search;
