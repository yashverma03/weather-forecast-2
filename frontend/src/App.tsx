import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { queryClient } from './configs/query-client';
import { TemperatureProvider } from './contexts/temperature-context';
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner/Spinner';

// Lazy load the Home component
const Home = lazy(() => import('./pages/Home/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <TemperatureProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        </QueryClientProvider>
      </TemperatureProvider>
    </BrowserRouter>
  );
};

export default App;
