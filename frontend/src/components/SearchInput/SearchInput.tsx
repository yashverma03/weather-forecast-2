import styles from './SearchInput.module.css';
import SearchOptions from '../SearchOptions/SearchOptions';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

/**
 * SearchInput component allows users to input a city name and provides search suggestions based on the input.
 */
const SearchInput = () => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(defaultSearch);
  const [debounceSearch, setDebounceSearch] = useState(defaultSearch);

  /**
   * Handles the change event for the search input.
   */
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    // Update input selection state based on whether the input is empty
    setIsInputSelected(value !== '');
  };

  // Debounce function to limit the frequency of search updates
  const debouncedSetSearch = debounce((value: string) => {
    setDebounceSearch(value);
  }, 500);

  useEffect(() => {
    // If the search input length is 1, set the debounce search immediately
    if (search.length === 1) {
      setDebounceSearch(search);
    } else {
      // Otherwise, use the debounced function for updates
      debouncedSetSearch(search);
    }

    // Cleanup function to cancel the debounce on unmount or change
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [search]);

  return (
    <div className={styles.inputWrap}>
      <input
        className={styles.input}
        value={search}
        onChange={handleSearch}
        placeholder='Enter a city...'
      />
      <SearchOptions
        search={debounceSearch}
        setSearch={setSearch}
        isInputSelected={isInputSelected}
        setIsInputSelected={setIsInputSelected}
      />
    </div>
  );
};

export default SearchInput;
