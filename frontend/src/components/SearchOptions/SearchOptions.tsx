import { useQuery } from '@tanstack/react-query';
import { fetchLocations } from '../../services/request';
import styles from './SearchOptions.module.css';
import ClickAwayListener from 'react-click-away-listener';
import { useSearchParams } from 'react-router-dom';
import { FetchLocation } from '../../interfaces/request';
import { getLocationValue } from '../../utils/location';
import { QueryKeyEnum } from '../../enums/query-key';
import { IsInputSelectedState } from '../../interfaces/is-input-selected';

interface Props extends IsInputSelectedState {
  search: string;
}

/**
 * SearchOptions component displays location suggestions based on user input.
 */
const SearchOptions = ({ search, isInputSelected, setIsInputSelected }: Props) => {
  const setSearchParams = useSearchParams()[1];

  const query = useQuery({
    queryKey: [QueryKeyEnum.FetchLocations, search],
    queryFn: async () => await fetchLocations(search),
    enabled: search !== '' // Only fetch locations if search is not empty
  });

  /**
   * Handles setting the selected location in the search parameters.
   */
  const handleSetLocation = (location: FetchLocation) => {
    const placeName = getLocationValue(location);
    setSearchParams((prev) => {
      prev.set('q', placeName);
      prev.set('lon', location.lon.toString());
      prev.set('lat', location.lat.toString());
      return prev;
    });
    setIsInputSelected(false); // Close suggestions after selection
  };

  /**
   * Renders the locations or loading/error states based on the query.
   */
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
    return null; // Don't render suggestions if the input is not selected
  }

  return (
    <ClickAwayListener onClickAway={() => setIsInputSelected(false)}>
      <section className={styles.section}>{getLocations()}</section>
    </ClickAwayListener>
  );
};

export default SearchOptions;
