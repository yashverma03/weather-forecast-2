import { ForecastData } from '../../../interfaces/location';
import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './Forecast.module.css';

interface Props {
  /** Array of forecast data to display. */
  forecastData: ForecastData[];
}

/**
 * Component that displays future weather forecasts.
 * It maps over the forecast data and renders a ForecastCard for each entry.
 */
const Forecast = ({ forecastData }: Props) => {
  /**
   * Function to generate forecast cards from the forecast data.
   * It maps over the forecastData array and returns a ForecastCard for each item.
   */
  const getForecastData = () => {
    return forecastData.map((forecast, index) => (
      <ForecastCard key={index} forecastData={forecast} />
    ));
  };

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.title}>Future Weather Forecasts</h2>
        <div className={styles.rowHeading}>
          <h3 className={styles.rowHeadingItem}>Date</h3>
          <h3 className={styles.rowHeadingItem}>Minimum Temperature</h3>
          <h3 className={styles.rowHeadingItem}>Maximum Temperature</h3>
          <h3 className={styles.rowHeadingItem}>Weather Icon</h3>
        </div>
        <div className={styles.details}>{getForecastData()}</div>
      </article>
    </section>
  );
};

export default Forecast;
