import { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className={`search-block ${isSearchOpen ? 'open' : ''}`}>
      <button
        className="icon-btn search-btn"
        onClick={() => setIsSearchOpen(true)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      <input
        ref={searchInputRef}
        type="text"
        className="search-input"
        placeholder="ابحث عن ..."
        onBlur={() => setIsSearchOpen(false)}
      />

      <button
        className={`close-search-btn ${isSearchOpen ? 'visible' : ''}`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          setIsSearchOpen(false);
          if (searchInputRef.current) searchInputRef.current.value = '';
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;