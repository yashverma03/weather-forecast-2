import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import SearchOptions from '../SearchOptions/SearchOptions';
import { InputSelectedState } from '../../pages/Home/Home';

const Search = ({ isInputSelected, setIsInputSelected }: InputSelectedState) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') ?? '';

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setIsInputSelected(newValue !== '');
    if (newValue.trim() === '') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams(
        (prev) => {
          prev.set('q', newValue);
          prev.delete('lon');
          prev.delete('lat');
          return prev;
        },
        { replace: true }
      );
    }
  };

  return (
    <section className={styles.section}>
      <input
        className={styles.input}
        value={search}
        placeholder='Enter a city...'
        onChange={handleSearch}
      />
      <SearchOptions
        isInputSelected={isInputSelected}
        setIsInputSelected={setIsInputSelected}
      />
    </section>
  );
};

export default Search;
