import { WeatherData } from '../../../interfaces/location';
import { getWeatherIcon } from '../../../utils/weather-icon';
import styles from './Weather.module.css';

const Weather = ({ city, temperature, weatherIconName, weatherDescription }: WeatherData) => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.title}>Current Weather</h2>
        <div className={styles.details}>
          <div className={styles.row}>
            <p className={styles.col1}>Weather icon:</p>
            <div className={styles.col2}>
              <img
                className={styles.weatherIcon}
                src={getWeatherIcon(weatherIconName)}
                alt='weather'
              />
            </div>
          </div>
          <div className={styles.row}>
            <p className={styles.col1}>City:</p>
            <p className={styles.col2}>{city}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.col1}>Temparature: </p>
            <p className={styles.col2}>{temperature}°C</p>
          </div>
          <div className={styles.row}>
            <p className={styles.col1}>Weather condition:</p>
            <p className={styles.col2}>{weatherDescription}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Weather;
