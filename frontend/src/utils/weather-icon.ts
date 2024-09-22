import weatherIcon01D from '../assets/home/weather/01d.png';
import weatherIcon02D from '../assets/home/weather/02d.png';
import weatherIcon03D from '../assets/home/weather/03d.png';
import weatherIcon04D from '../assets/home/weather/04d.png';
import weatherIcon09D from '../assets/home/weather/09d.png';
import weatherIcon10D from '../assets/home/weather/10d.png';
import weatherIcon11D from '../assets/home/weather/11d.png';
import weatherIcon13D from '../assets/home/weather/13d.png';
import weatherIcon50D from '../assets/home/weather/50d.png';

/**
 * Returns the corresponding weather icon based on the provided icon name.
 * @param {string} iconName - The icon code representing the weather condition.
 * @returns {string} - The path to the weather icon image.
 */
export const getWeatherIcon = (iconName: string) => {
  switch (iconName) {
    case '01d':
      return weatherIcon01D;
    case '02d':
      return weatherIcon02D;
    case '03d':
      return weatherIcon03D;
    case '04d':
      return weatherIcon04D;
    case '09d':
      return weatherIcon09D;
    case '10d':
      return weatherIcon10D;
    case '11d':
      return weatherIcon11D;
    case '13d':
      return weatherIcon13D;
    case '50d':
      return weatherIcon50D;
    default:
      return weatherIcon01D;
  }
};
