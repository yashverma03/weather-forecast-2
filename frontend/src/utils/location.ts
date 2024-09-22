import { FetchLocation } from '../interfaces/request';

/**
 * Constructs a location string from the given FetchLocation object.
 * @param location - The location object containing the following properties:
 *   - name: The name of the city or location.
 *   - state: The state of the location (optional).
 *   - country: The country code (e.g., 'US', 'FR').
 * @returns A formatted string representing the location,
 *          which includes the city name, state (if available), and full country name.
 */
export const getLocationValue = (location: FetchLocation): string => {
  const { name, state } = location;
  const country = getCountryName(location.country);
  if (!state) {
    return `${name}, ${country}`; // Return name and country if state is not available
  }
  return `${name}, ${state}, ${country}`; // Return name, state, and country
};

/**
 * Gets the full country name from a 2-letter country code.
 * @param countryCode - The 2-letter country code (e.g., 'US').
 * @returns The full name of the country, or the country code if the name is not available.
 */
const getCountryName = (countryCode: string): string => {
  const displayNames = new Intl.DisplayNames(['en'], { type: 'region' });
  return displayNames.of(countryCode) || countryCode;
};
