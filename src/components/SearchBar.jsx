import { useEffect, useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track selected item in dropdown

  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const fetchSuggestions = async (searchText) => {
    try {
      setTimeout(() => {
        const sampleSuggestions = ["Electronics" , "Electronics2" , "Electronics3", "Fashion" ,  "Fashion2" ,  "Fashion3" ];
        setSuggestions(sampleSuggestions.filter(item => item.toLowerCase().includes(searchText.toLowerCase())));
        setLoading(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setLoading(false);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setQuery(suggestions[selectedIndex]);
      setSuggestions([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="glass-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      {loading && <div className="spinner"></div>}

      {query && (
        <button className="clear-button" onClick={() => setQuery("")}>&times;</button>
      )}

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className={`suggestion-item ${index === selectedIndex ? "active" : ""}`}
              onClick={() => {
                setQuery(item);
                setSuggestions([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

{!loading && <button className="search-button">Search</button>}
    </div>
  );
};

export default SearchBar;
