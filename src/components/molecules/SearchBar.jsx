import "./SearchBar.css";

function SearchBar({ value, onChange, placeholder }) {
  return (
    <label className="search-bar">
      <span className="search-bar__label">Search films</span>
      <input
        className="search-bar__input"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default SearchBar;