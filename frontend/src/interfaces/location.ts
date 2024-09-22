/**
 * Interface representing weather data for a specific city.
 */
export interface WeatherData {
  /** The name of the city. */
  city: string;
  /** The current temperature in degrees. */
  temperature: number;
  /** The name of the weather icon to be displayed. */
  weatherIconName: string;
  /** A description of the current weather conditions. */
  weatherDescription: string;
}

/**
 * Interface representing forecast data for a specific date.
 */
export interface ForecastData {
  /** The date of the forecast. */
  date: string;
  /** The minimum temperature expected on that date. */
  minTemperature: number;
  /** The maximum temperature expected on that date. */
  maxTemperature: number;
  /** The name of the weather icon to be displayed for the forecast. */
  weatherIconName: string;
}
