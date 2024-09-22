import { lazy, Suspense } from 'react';
import Search from './Search/Search';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchWeatherDetails } from '../../services/request';
import Spinner from '../../components/Spinner/Spinner';
import { DEFAULT_LOCATION } from '../../constants/default-location';
import { QueryKeyEnum } from '../../enums/query-key';

const Weather = lazy(() => import('./Weather/Weather'));
const Forecast = lazy(() => import('./Forecast/Forecast'));

const Home = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('q');
  let lat = searchParams.get('lat');
  let lon = searchParams.get('lon');

  if (!search && !lat && !lon) {
    lat = DEFAULT_LOCATION.LAT;
    lon = DEFAULT_LOCATION.LON;
  }

  const query = useQuery({
    queryKey: [QueryKeyEnum.FetchWeatherDetails, lat, lon],
    queryFn: async () => await fetchWeatherDetails(lat, lon)
  });

  if (query.isLoading) {
    return <Spinner />;
  }

  if (query.isError) {
    return (
      <p className='w-full h-screen flex items-center justify-center text-[20px] text-[#FF0000]'>
        Something went wrong!
      </p>
    );
  }

  const { weatherData, forecastData } = query.data ?? {};

  return (
    <main>
      <Search />
      <Suspense fallback={<Spinner />}>
        {weatherData && <Weather {...weatherData} />}
        {forecastData && <Forecast forecastData={forecastData} />}
      </Suspense>
    </main>
  );
};

export default Home;
