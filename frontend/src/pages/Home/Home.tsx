import { useState } from 'react';
import Weather from './Weather/Weather';
import ForecastCard from './ForecastCard/ForecastCard';
import Search from '../../components/Search/Search';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchWeatherDetails } from '../../services/request';
import Spinner from '../../components/Spinner/Spinner';
import { DEFAULT_LOCATION } from '../../constants/default-location';

const Home = () => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('q');
  let lat = searchParams.get('lat');
  let lon = searchParams.get('lon');

  if (!search && !lat && !lon) {
    lat = DEFAULT_LOCATION.LAT;
    lon = DEFAULT_LOCATION.LON;
  }

  const query = useQuery({
    queryKey: ['fetchWeatherDetails', lat, lon],
    queryFn: async () => await fetchWeatherDetails(lat, lon)
  });

  if (query.isLoading) {
    return <Spinner />;
  }

  if (query.isError) {
    return <p>Something went wrong!</p>;
  }

  const { weatherData, forecastData } = query.data ?? {};

  return (
    <main>
      <Search isInputSelected={isInputSelected} setIsInputSelected={setIsInputSelected} />
      {weatherData && <Weather {...weatherData} />}
      {forecastData && <ForecastCard {...forecastData} />}
    </main>
  );
};

export default Home;
