import { axiosInstance } from '../config/axios';
import { ForecastData, WeatherData } from '../interfaces/location';
import { FetchForecastData, FetchLocation, FetchWeatherData } from '../interfaces/request';
import { handleApiError } from '../utils/error';

export const fetchLocations = async (city: string) => {
  try {
    const params = { q: city, limit: 5 };
    const response = await axiosInstance.get<FetchLocation[]>('geo/1.0/direct', { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const fetchWeatherDetails = async (lat: string | null, lon: string | null) => {
  try {
    if (!lat || !lon) {
      return null;
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

export const fetchWeatherData = async (lat: string, lon: string) => {
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

export const fetchForecastData = async (lat: string, lon: string) => {
  try {
    const params = { lat, lon, cnt: 5 };
    const { data } = await axiosInstance.get<FetchForecastData>('data/2.5/forecast', { params });
    return data.list.map<ForecastData>((item) => ({
      date: item.dt,
      minTemperature: item.main.temp_min,
      maxTemperature: item.main.temp_max,
      weatherIconName: item.weather[0].icon
    }));
  } catch (error) {
    handleApiError(error);
  }
};
