import styles from './Search.module.css';
import { TemperatureUnit } from '../../../interfaces/temperature-unit';
import { useTemperature } from '../../../contexts/temperature-context';
import { QueryKeyEnum } from '../../../enums/query-key';
import { useQueryClient } from '@tanstack/react-query';
import SearchInput from '../../../components/SearchInput/SearchInput';
import { useState } from 'react';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { temperatureUnit, setTemperatureUnit } = useTemperature();
  const queryClient = useQueryClient();

  /**
   * Handles the change of temperature unit from the dropdown.
   * @param event - The change event from the select input.
   */
  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as TemperatureUnit;
    setTemperatureUnit(value);
  };

  /**
   * Handles the refresh action by invalidating queries.
   * Prevents multiple calls if already loading.
   */
  const handleRefresh = async () => {
    if (isLoading) {
      return; // Exit if a refresh is already in progress
    }
    setIsLoading(true);
    await queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.FetchWeatherDetails] });
    setIsLoading(false);
  };

  return (
    <section className={styles.section}>
      <SearchInput />
      <select className={styles.dropdown} value={temperatureUnit} onChange={handleUnitChange}>
        <option value='celsius'>Celsius</option>
        <option value='fahrenheit'>Fahrenheit</option>
      </select>
      <button className={styles.refreshButton} onClick={handleRefresh} disabled={isLoading}>
        Pull to refresh
      </button>
    </section>
  );
};

export default Search;
