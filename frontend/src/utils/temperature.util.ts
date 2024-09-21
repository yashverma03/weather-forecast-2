export const getTemperature = (temperature: number, unit: 'celsius' | 'fahrenheit') => {
  if (unit === 'celsius') {
    return `${temperature}°C`;
  }
  const convertedTemperature = (temperature * 9) / 5 + 32;
  return `${convertedTemperature.toFixed(2)}°F`;
};
