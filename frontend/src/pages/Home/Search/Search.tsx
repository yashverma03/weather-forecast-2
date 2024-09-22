import styles from './Search.module.css';
import { TemperatureUnit } from '../../../interfaces/temperature-unit';
import { useTemperature } from '../../../contexts/temperature-context';
import { QueryKeyEnum } from '../../../enums/query-key';
import { useQueryClient } from '@tanstack/react-query';
import SearchInput from '../../../components/SearchInput/SearchInput';

const Search = () => {
  const { temperatureUnit, setTemperatureUnit } = useTemperature();
  const queryClient = useQueryClient();

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as TemperatureUnit;
    setTemperatureUnit(value);
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.FetchWeatherDetails] });
  };

  return (
    <section className={styles.section}>
      <SearchInput />
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
