import { useTemperature } from '../../../contexts/temperature-context';
import { WeatherData } from '../../../interfaces/location';
import { getTemperature } from '../../../utils/temperature.util';
import { getWeatherIcon } from '../../../utils/weather-icon';
import styles from './Weather.module.css';

/**
 * Weather component displays the current weather information.
 *
 * @param city - The name of the city.
 * @param temperature - The current temperature.
 * @param weatherIconName - The icon name representing the current weather condition.
 * @param weatherDescription - A textual description of the weather condition.
 */
const Weather = ({ city, temperature, weatherIconName, weatherDescription }: WeatherData) => {
  const { temperatureUnit } = useTemperature();

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.title}>Current Weather</h2>
        <div className={styles.details}>
          <div className={styles.row}>
            <p className={styles.col1}>Weather Icon:</p>
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
            <p className={styles.col1}>Temperature: </p>
            <p className={styles.col2}>{getTemperature(temperature, temperatureUnit)}</p>
          </div>
          <div className={styles.row}>
            <p className={styles.col1}>Weather Condition:</p>
            <p className={styles.col2}>{weatherDescription}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Weather;
