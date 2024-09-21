import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import SearchOptions from '../SearchOptions/SearchOptions';
import { InputSelectedState } from '../../pages/Home/util';
import { useState } from 'react';

const Search = ({ isInputSelected, setIsInputSelected }: InputSelectedState) => {
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(defaultSearch);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
    setIsInputSelected(newValue !== '');
  };

  return (
    <section className={styles.section}>
      <input
        className={styles.input}
        value={search}
        onChange={handleSearch}
        placeholder='Enter a city...'
      />
      <SearchOptions
        search={search}
        isInputSelected={isInputSelected}
        setIsInputSelected={setIsInputSelected}
      />
    </section>
  );
};

export default Search;
