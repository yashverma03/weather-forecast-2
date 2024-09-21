import { useState } from 'react';
import Weather from './Weather/Weather';
import ForecastCard from './ForecastCard/ForecastCard';
import Search from '../../components/Search/Search';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { fetchWeatherDetails } from '../../services/request';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  const query = useQuery({
    queryKey: ['fetchWeatherDetails', lat, lon],
    queryFn: async () => await fetchWeatherDetails(lat, lon),
    enabled: false
  });

  if (query.isLoading) {
    return <Spinner />;
  }

  if (query.isError) {
    return <p>Something went wrong!</p>;
  }

  if (!query.data) {
    return null;
  }
  const { weatherData, forecastData } = query.data;
  if (!weatherData || !forecastData) {
    return null;
  }

  return (
    <main>
      <Search isInputSelected={isInputSelected} setIsInputSelected={setIsInputSelected} />
      <Weather {...weatherData} />
      <ForecastCard {...forecastData} />
    </main>
  );
};

export default Home;
