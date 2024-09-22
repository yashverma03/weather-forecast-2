import styles from './SearchInput.module.css';
import SearchOptions from '../SearchOptions/SearchOptions';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const SearchInput = () => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(defaultSearch);
  const [debounceSearch, setDebounceSearch] = useState(defaultSearch);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    setIsInputSelected(value !== '');
  };

  const debouncedSetSearch = debounce((value: string) => {
    setDebounceSearch(value);
  }, 500);

  useEffect(() => {
    if (search.length === 1) {
      setDebounceSearch(search);
    } else {
      debouncedSetSearch(search);
    }
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
        isInputSelected={isInputSelected}
        setIsInputSelected={setIsInputSelected}
      />
    </div>
  );
};
export default SearchInput;
