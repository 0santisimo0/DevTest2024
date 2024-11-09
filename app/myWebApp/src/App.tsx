import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './AppRoutes'
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </HelmetProvider>
  )
}

export default App