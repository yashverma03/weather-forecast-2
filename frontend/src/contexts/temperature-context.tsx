import { createContext, useContext, useState } from 'react';
import { TemperatureUnit } from '../interfaces/temperature-unit';
import { Children } from '../interfaces/children';

/**
 * Context type for temperature settings.
 * Contains the current temperature unit and a function to update it.
 */
interface TemperatureContextType {
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: (unit: TemperatureUnit) => void;
}

// Create a context for temperature settings, initialized as null
export const TemperatureContext = createContext<TemperatureContextType | null>(null);

/**
 * Provider component that wraps the application to provide temperature settings.
 */
export const TemperatureProvider = ({ children }: Children) => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  return (
    <TemperatureContext.Provider value={{ temperatureUnit, setTemperatureUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

/**
 * Custom hook to access the temperature context.
 * Throws an error if used outside of the TemperatureProvider.
 */
export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error('useTemperature must be used within a TemperatureProvider');
  }
  return context;
};
