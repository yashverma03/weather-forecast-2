import { lazy, Suspense } from 'react';
import Search from './Search/Search';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchWeatherDetails } from '../../services/request';
import Spinner from '../../components/Spinner/Spinner';
import { DEFAULT_LOCATION } from '../../constants/default-location';
import { QueryKeyEnum } from '../../enums/query-key';

// Lazy load Weather and Forecast components
const Weather = lazy(() => import('./Weather/Weather'));
const Forecast = lazy(() => import('./Forecast/Forecast'));

/**
 * Home component fetches and displays weather details and forecasts.
 * It allows searching for weather information based on location.
 */
const Home = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('q');
  let lat = searchParams.get('lat');
  let lon = searchParams.get('lon');

  // Default to predefined location if no search parameters are provided
  if (!search && !lat && !lon) {
    lat = DEFAULT_LOCATION.LAT;
    lon = DEFAULT_LOCATION.LON;
  }

  // Fetch weather details using React Query
  const query = useQuery({
    queryKey: [QueryKeyEnum.FetchWeatherDetails, lat, lon],
    queryFn: async () => await fetchWeatherDetails(lat, lon)
  });

  /**
   * Returns the weather details or loading/error states.
   */
  const getWeatherDetails = () => {
    // Show loading spinner while fetching data
    if (query.isLoading || query.isRefetching) {
      return <Spinner />;
    }

    // Show error message if the query fails
    if (query.isError) {
      return (
        <p className='w-full h-screen flex items-center justify-center text-[20px] text-[#FF0000]'>
          Something went wrong!
        </p>
      );
    }

    const { weatherData, forecastData } = query.data ?? {};

    return (
      <>
        <Suspense fallback={<Spinner />}>
          {weatherData && <Weather {...weatherData} />}
          {forecastData && <Forecast forecastData={forecastData} />}
        </Suspense>
      </>
    );
  };

  return (
    <>
      <Search />
      {getWeatherDetails()}
    </>
  );
};

export default Home;
