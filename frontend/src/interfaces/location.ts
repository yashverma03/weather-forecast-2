export interface WeatherData {
  city: string;
  temperature: number;
  weatherIconName: string;
  weatherDescription: string;
}

export interface ForecastData {
  date: number;
  minTemperature: number;
  maxTemperature: number;
  weatherIconName: string;
}
