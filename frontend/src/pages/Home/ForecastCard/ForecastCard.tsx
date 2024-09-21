import { ForecastData } from '../../../interfaces/location';
import { getWeatherIcon } from '../../../utils/weather-icon';
import styles from './ForecastCard.module.css';
import dayjs from 'dayjs';

interface Props {
  forecastData: ForecastData;
}

const ForecastCard = ({ forecastData }: Props) => {
  return (
    <div className={styles.forecastWrap}>
      <p className={styles.rowItem}>{dayjs(forecastData.date).format('DD, MMM, YYYY, dddd')}</p>
      <p className={styles.rowItem}>{forecastData.minTemperature}°C</p>
      <p className={styles.rowItem}>{forecastData.maxTemperature}°C</p>
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
