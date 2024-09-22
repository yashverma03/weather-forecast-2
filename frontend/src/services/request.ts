import { axiosInstance } from '../configs/axios';
import { ForecastData, WeatherData } from '../interfaces/location';
import { FetchForecastData, FetchLocation, FetchWeatherData } from '../interfaces/request';
import { handleApiError } from '../utils/error';

/**
 * Fetch locations based on city name.
 * @param {string} city - The name of the city to search for.
 * @returns {Promise<FetchLocation[]>} - A promise that resolves to an array of location data.
 */
export const fetchLocations = async (city: string) => {
  try {
    const params = { q: city, limit: 5 };
    const response = await axiosInstance.get<FetchLocation[]>('geo/1.0/direct', { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Fetch weather details for given latitude and longitude.
 * @param {string | null} lat - The latitude of the location.
 * @param {string | null} lon - The longitude of the location.
 * @returns {Promise<{ weatherData: WeatherData; forecastData: ForecastData[] }>} - A promise that resolves to weather and forecast data.
 */
export const fetchWeatherDetails = async (lat: string | null, lon: string | null) => {
  try {
    if (!lat || !lon) {
      throw new Error('Latitude and longitude are required');
    }
    const [weatherData, forecastData] = await Promise.all([
      fetchWeatherData(lat, lon),
      fetchForecastData(lat, lon)
    ]);
    return { weatherData, forecastData };
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Fetch current weather data for given latitude and longitude.
 * @param {string} lat - The latitude of the location.
 * @param {string} lon - The longitude of the location.
 * @returns {Promise<WeatherData>} - A promise that resolves to current weather data.
 */
const fetchWeatherData = async (lat: string, lon: string) => {
  try {
    const params = { lat, lon };
    const { data } = await axiosInstance.get<FetchWeatherData>('data/2.5/weather', { params });
    const result: WeatherData = {
      city: data.name,
      temperature: data.main.temp,
      weatherIconName: data.weather[0].icon,
      weatherDescription: data.weather[0].description
    };
    return result;
  } catch (error) {
    handleApiError(error);
  }
};

/**
 * Fetch forecast data for given latitude and longitude.
 * @param {string} lat - The latitude of the location.
 * @param {string} lon - The longitude of the location.
 * @returns {Promise<ForecastData[]>} - A promise that resolves to an array of forecast data.
 */
const fetchForecastData = async (lat: string, lon: string) => {
  try {
    const params = { lat, lon, cnt: 5 * 8 }; // Fetch 5 days of data at 3-hour intervals
    const { data } = await axiosInstance.get<FetchForecastData>('data/2.5/forecast', { params });
    return data.list
      .filter((_, index) => index % 8 === 0) // Select every 8th entry for daily forecast
      .map<ForecastData>((item) => ({
        date: item.dt_txt,
        minTemperature: item.main.temp_min,
        maxTemperature: item.main.temp_max,
        weatherIconName: item.weather[0].icon
      }));
  } catch (error) {
    handleApiError(error);
  }
};
