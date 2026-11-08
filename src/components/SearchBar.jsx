
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <span className="search-icon">⌕</span>
    </div>
  );
}

export default SearchBar;
