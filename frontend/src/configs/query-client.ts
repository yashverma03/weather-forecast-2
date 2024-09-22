import { QueryClient } from '@tanstack/react-query';

/**
 * Instance of QueryClient for managing queries in the application.
 * Configured with default options for queries.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  }
});
