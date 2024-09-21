import { ForecastData } from '../../../interfaces/location';
import { getWeatherIcon } from '../../../utils/weather-icon';
import styles from './ForecastCard.module.css';
import dayjs from 'dayjs';

interface Props {
  forecastData: ForecastData[];
}

const ForecastCard = ({ forecastData }: Props) => {
  const getForecastData = () => {
    return forecastData.map((forecast, index) => (
      <div className={styles.forecastWrap} key={index}>
        <p className={styles.rowItem}>{dayjs(forecast.date).format('DD, MMM, YYYY, dddd')}</p>
        <p className={styles.rowItem}>{forecast.minTemperature}°C</p>
        <p className={styles.rowItem}>{forecast.maxTemperature}°C</p>
        <div className={styles.rowItem}>
          <img
            className={styles.weatherIcon}
            src={getWeatherIcon(forecast.weatherIconName)}
            alt='weather'
          />
        </div>
      </div>
    ));
  };

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.title}>Future Weather Forecasts</h2>
        <div className={styles.rowHeading}>
          <h3 className={styles.rowHeadingItem}>Date</h3>
          <h3 className={styles.rowHeadingItem}>Minimum temparature</h3>
          <h3 className={styles.rowHeadingItem}>Maximum temparature</h3>
          <h3 className={styles.rowHeadingItem}>Weather icon:</h3>
        </div>
        <div className={styles.details}>{getForecastData()}</div>
      </article>
    </section>
  );
};

export default ForecastCard;
