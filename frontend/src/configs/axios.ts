import axios from 'axios';

const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

export const axiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org',
  params: {
    appid: apiKey,
    units: 'metric'
  }
});
