import { ForecastData } from '../../../interfaces/location';
import ForecastCard from '../ForecastCard/ForecastCard';
import styles from './Forecast.module.css';

interface Props {
  forecastData: ForecastData[];
}

const Forecast = ({ forecastData }: Props) => {
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
          <h3 className={styles.rowHeadingItem}>Minimum temparature</h3>
          <h3 className={styles.rowHeadingItem}>Maximum temparature</h3>
          <h3 className={styles.rowHeadingItem}>Weather icon</h3>
        </div>
        <div className={styles.details}>{getForecastData()}</div>
      </article>
    </section>
  );
};

export default Forecast;
