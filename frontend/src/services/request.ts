import { axiosInstance } from '../config/axios';
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

export const fetchWeatherData = async (lat: string | null, lon: string | null) => {
  try {
    if (!lat || !lon) {
      return null;
    }
    const params = { lat, lon };
    const response = await axiosInstance.get<FetchWeatherData>('data/2.5/weather', { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const fetchForecastData = async (lat: number, lon: number) => {
  try {
    const params = { lat, lon, cnt: 5 };
    const response = await axiosInstance.get<FetchForecastData>('data/2.5/forecast', { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
