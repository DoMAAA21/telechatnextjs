import { AppProps } from 'next/app';
import "@/app/globals.css";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';
import { AuthProvider } from '@/context/authContext';

const queryClient = new QueryClient()
function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;