import { createContext, useContext, useState } from 'react';
import { TemperatureUnit } from '../interfaces/temperature-unit';
import { Children } from '../interfaces/children';

interface TemperatureContextType {
  temperatureUnit: TemperatureUnit;
  setTemperatureUnit: (unit: TemperatureUnit) => void;
}

export const TemperatureContext = createContext<TemperatureContextType | null>(null);

export const TemperatureProvider = ({ children }: Children) => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');

  return (
    <TemperatureContext.Provider value={{ temperatureUnit, setTemperatureUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTemperature = () => {
  const context = useContext(TemperatureContext);
  if (!context) {
    throw new Error('useTemperature must be used within a TemperatureProvider');
  }
  return context;
};
