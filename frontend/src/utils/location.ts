import { FetchLocation } from '../interfaces/request';

/**
 * Constructs a location string from the given FetchLocation object.
 * @param {FetchLocation} location - The location object containing name, state, and country.
 * @returns {string} - A formatted string representing the location.
 */
export const getLocationValue = (location: FetchLocation) => {
  const { name, state, country } = location;
  if (!state) {
    return `${name}, ${country}`; // Return name and country if state is not available
  }
  return `${name}, ${state}, ${country}`; // Return name, state, and country
};
