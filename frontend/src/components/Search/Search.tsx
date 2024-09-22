import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import SearchOptions from '../SearchOptions/SearchOptions';
import { InputSelectedState } from '../../pages/Home/util';
import { useState } from 'react';
import { TemperatureUnit } from '../../interfaces/temperature-unit';
import { useTemperature } from '../../contexts/temperature-context';
import { QueryKeyEnum } from '../../enums/query-key';
import { useQueryClient } from '@tanstack/react-query';

const Search = ({ isInputSelected, setIsInputSelected }: InputSelectedState) => {
  const [searchParams] = useSearchParams();
  const defaultSearch = searchParams.get('q') ?? '';
  const [search, setSearch] = useState(defaultSearch);
  const { temperatureUnit, setTemperatureUnit } = useTemperature();
  const queryClient = useQueryClient();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
    setIsInputSelected(newValue !== '');
  };

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
          search={search}
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
