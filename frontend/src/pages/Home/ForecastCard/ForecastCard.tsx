import { useTemperature } from '../../../contexts/temperature-context';
import { ForecastData } from '../../../interfaces/location';
import { getTemperature } from '../../../utils/temperature.util';
import { getWeatherIcon } from '../../../utils/weather-icon';
import styles from './ForecastCard.module.css';
import dayjs from 'dayjs';

interface Props {
  forecastData: ForecastData;
}

const ForecastCard = ({ forecastData }: Props) => {
  const { temperatureUnit } = useTemperature();

  return (
    <div className={styles.forecastWrap}>
      <p className={styles.rowItem}>{dayjs(forecastData.date).format('DD, MMM, YYYY, dddd')}</p>
      <p className={styles.rowItem}>
        {getTemperature(forecastData.minTemperature, temperatureUnit)}
      </p>
      <p className={styles.rowItem}>
        {getTemperature(forecastData.maxTemperature, temperatureUnit)}
      </p>
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
