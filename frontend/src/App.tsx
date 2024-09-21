import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { queryClient } from './config/query-client';
import Home from './pages/Home/Home';
import { TemperatureProvider } from './contexts/temperatureContext';

const App = () => {
  return (
    <BrowserRouter>
      <TemperatureProvider>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </TemperatureProvider>
    </BrowserRouter>
  );
};

export default App;
