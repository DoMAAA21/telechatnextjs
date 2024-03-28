import { AppProps } from 'next/app';
import Layout from '@/components/layout/index';
import "@/app/globals.css";

function App({ Component, pageProps }: AppProps) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }

export default App;