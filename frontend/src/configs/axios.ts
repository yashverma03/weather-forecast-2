import axios from 'axios';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

/**
 * Axios instance for making requests to the OpenWeatherMap API.
 * It includes the base URL and default parameters for all requests.
 */
export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    appid: apiKey, // API key for authentication
    units: 'metric' // Default unit for temperature
  }
});
