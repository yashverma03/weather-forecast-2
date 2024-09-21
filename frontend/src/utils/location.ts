import { FetchLocation } from '../interfaces/request';

export const getLocationValue = (location: FetchLocation) => {
  const { name, state, country } = location;
  if (!state) {
    return `${name}, ${country}`;
  }
  return `${name}, ${state}, ${country}`;
};
