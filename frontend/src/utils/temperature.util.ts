/**
 * Converts a temperature value to a specified unit and formats it as a string.
 * @param {number} temperature - The temperature value to convert.
 * @param {'celsius' | 'fahrenheit'} unit - The unit to convert the temperature to.
 * @returns {string} - The formatted temperature string.
 */
export const getTemperature = (temperature: number, unit: 'celsius' | 'fahrenheit') => {
  if (unit === 'celsius') {
    return `${temperature}°C`; // Return temperature in Celsius
  }
  const convertedTemperature = (temperature * 9) / 5 + 32; // Convert to Fahrenheit
  return `${convertedTemperature.toFixed(2)}°F`; // Return formatted temperature in Fahrenheit
};
