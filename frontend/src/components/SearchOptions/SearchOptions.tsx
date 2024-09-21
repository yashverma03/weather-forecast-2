import { useQuery } from '@tanstack/react-query';
import { fetchLocations } from '../../services/request';
import styles from './SearchOptions.module.css';
import ClickAwayListener from 'react-click-away-listener';
import { InputSelectedState } from '../../pages/Home/Home';
import { useSearchParams } from 'react-router-dom';
import { FetchLocation } from '../../interfaces/request';
import { getLocationValue } from '../../utils/location';

const SearchOptions = ({ isInputSelected, setIsInputSelected }: InputSelectedState) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') ?? '';

  const query = useQuery({
    queryKey: ['locations', search],
    queryFn: async () => await fetchLocations(search),
    enabled: search !== ''
  });

  const handleSetLocation = (location: FetchLocation) => {
    const placeName = getLocationValue(location);
    setSearchParams((prev) => {
      prev.set('q', placeName);
      prev.set('lon', location.lon.toString());
      prev.set('lat', location.lat.toString());
      return prev;
    });
    setIsInputSelected(false);
  };

  const getLocations = () => {
    if (query.isLoading) {
      return <div className={styles.loading}>Loading...</div>;
    }

    if (query.isError) {
      return <div className={styles.error}>Something went wrong!</div>;
    }

    if (!query.data || query.data.length === 0) {
      return <div className={styles.empty}>No results were found</div>;
    }

    return query.data.map((location, index) => (
      <button className={styles.button} key={index} onClick={() => handleSetLocation(location)}>
        {getLocationValue(location)}
      </button>
    ));
  };

  if (!isInputSelected) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={() => setIsInputSelected(false)}>
      <section className={styles.section}>{getLocations()}</section>
    </ClickAwayListener>
  );
};

export default SearchOptions;
