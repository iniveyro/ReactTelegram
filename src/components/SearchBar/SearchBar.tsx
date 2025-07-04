import { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/search.svg';

interface SearchBarProps {
  onSearch: (query: string) => void;
  debounceTime?: number;
}

export const SearchBar = ({ 
  onSearch, 
  debounceTime = 300 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [query, onSearch, debounceTime]);

  return (
    <div className={styles.searchContainer}>
      <img src={searchIcon} alt="Buscar" className={styles.icon} />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar chats..."
        className={styles.input}
      />
      {query && (
        <button 
          onClick={() => setQuery('')} 
          className={styles.clearButton}
        >
          ×
        </button>
      )}
    </div>
  );
};