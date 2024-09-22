import { useTemperature } from '../../../contexts/temperature-context';
import { ForecastData } from '../../../interfaces/location';
import { getTemperature } from '../../../utils/temperature';
import { getWeatherIcon } from '../../../utils/weather-icon';
import styles from './ForecastCard.module.css';
import dayjs from 'dayjs';

interface Props {
  /** The forecast data for a specific day. */
  forecastData: ForecastData;
}

/**
 * Component that displays weather forecast information for a specific day.
 * It shows the date, minimum and maximum temperatures, and the weather icon.
 */
const ForecastCard = ({ forecastData }: Props) => {
  const { temperatureUnit } = useTemperature();

  return (
    <div className={styles.forecastWrap}>
      {/* Display formatted date */}
      <p className={styles.rowItem}>{dayjs(forecastData.date).format('DD, MMM, YYYY, dddd')}</p>
      {/* Display minimum temperature */}
      <p className={styles.rowItem}>
        {getTemperature(forecastData.minTemperature, temperatureUnit)}
      </p>
      {/* Display maximum temperature */}
      <p className={styles.rowItem}>
        {getTemperature(forecastData.maxTemperature, temperatureUnit)}
      </p>
      {/* Display weather icon */}
      <div className={styles.rowItem}>
        <img
          className={styles.weatherIcon}
          src={getWeatherIcon(forecastData.weatherIconName)}
          alt='weather'
        />
      </div>
    </div>
  );
};

export default ForecastCard;
