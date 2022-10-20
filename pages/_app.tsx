import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const showHeader = router.pathname !== '/login';
  return (
    <>
      {showHeader && <Header />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
