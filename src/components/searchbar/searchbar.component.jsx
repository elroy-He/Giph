const SearchBar = ({ changeGiph }) => {
  return (
    <div>
      <input
        className="Search-Box"
        type="search"
        placeholder="Search For A Giph"
        onChange={changeGiph}
      />
    </div>
  );
};

export default SearchBar;
