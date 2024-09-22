/**
 * Interface representing a fetched location.
 */
export interface FetchLocation {
  /** The name of the location. */
  name: string;
  /** A record of local names in various languages. */
  local_names: Record<string, string>;
  /** The latitude of the location. */
  lat: number;
  /** The longitude of the location. */
  lon: number;
  /** The country where the location is found. */
  country: string;
  /** The state, if applicable. */
  state?: string;
}

/**
 * Interface representing fetched weather data for a specific location.
 */
export interface FetchWeatherData {
  /** The geographical coordinates of the location. */
  coord: {
    lon: number;
    lat: number;
  };
  /** Array of weather conditions. */
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  /** The base data source of the weather information. */
  base: string;
  /** Main weather data including temperature and pressure. */
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  /** Visibility in meters. */
  visibility: number;
  /** Wind information. */
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  /** Cloud coverage percentage. */
  clouds: {
    all: number;
  };
  /** Data time stamp. */
  dt: number;
  /** System data including country and sunrise/sunset times. */
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  /** Timezone offset in seconds. */
  timezone: number;
  /** Unique identifier for the location. */
  id: number;
  /** Name of the location. */
  name: string;
  /** Response code. */
  cod: number;
}

/**
 * Interface representing fetched forecast data for a specific location.
 */
export interface FetchForecastData {
  /** Response code. */
  cod: string;
  /** Message for any errors. */
  message: number;
  /** Count of forecast entries. */
  cnt: number;
  /** Array of forecast data. */
  list: {
    /** Data time stamp. */
    dt: number;
    /** Main weather data for the forecast. */
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level?: number;
      grnd_level?: number;
      humidity: number;
      temp_kf: number;
    };
    /** Array of weather conditions for the forecast. */
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    /** Cloud coverage percentage. */
    clouds: {
      all: number;
    };
    /** Wind information. */
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    /** Visibility in meters. */
    visibility: number;
    /** Probability of precipitation. */
    pop: number;
    /** System data for the forecast period. */
    sys: {
      pod: string;
    };
    /** Date and time of the forecast in text format. */
    dt_txt: string;
  }[];
  /** City data related to the forecast. */
  city: {
    id: number;
    name: string;
    /** Geographical coordinates of the city. */
    coord: {
      lat: number;
      lon: number;
    };
    /** Country where the city is located. */
    country: string;
    /** Population of the city. */
    population: number;
    /** Timezone offset in seconds. */
    timezone: number;
    /** Sunrise time in Unix timestamp. */
    sunrise: number;
    /** Sunset time in Unix timestamp. */
    sunset: number;
  };
}
