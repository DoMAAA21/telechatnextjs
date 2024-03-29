import { AppProps } from 'next/app';
import "@/app/globals.css";
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query';

const queryClient = new QueryClient()
function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;