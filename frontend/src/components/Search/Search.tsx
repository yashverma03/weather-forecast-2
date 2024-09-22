import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import SearchOptions from '../SearchOptions/SearchOptions';
import { useEffect, useState } from 'react';
import { TemperatureUnit } from '../../interfaces/temperature-unit';
import { useTemperature } from '../../contexts/temperature-context';
import { QueryKeyEnum } from '../../enums/query-key';
import { useQueryClient } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { IsInputSelectedState } from '../../interfaces/is-input-selected';

const Search = ({ isInputSelected, setIsInputSelected }: IsInputSelectedState) => {
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(defaultSearch);
  const [debounceSearch, setDebounceSearch] = useState(defaultSearch);
  const { temperatureUnit, setTemperatureUnit } = useTemperature();
  const queryClient = useQueryClient();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    setIsInputSelected(value !== '');
  };

  const debouncedSetSearch = debounce((value: string) => {
    setDebounceSearch(value);
  }, 1000);

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

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as TemperatureUnit;
    setTemperatureUnit(value);
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.FetchWeatherDetails] });
  };

  return (
    <section className={styles.section}>
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
      <select className={styles.dropdown} value={temperatureUnit} onChange={handleUnitChange}>
        <option value='celsius'>Celsius</option>
        <option value='fahrenheit'>Fahrenheit</option>
      </select>
      <button className={styles.refreshButton} onClick={handleRefresh}>
        Pull to refresh
      </button>
    </section>
  );
};

export default Search;
