import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/auth';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const showHeader = router.pathname !== '/login';
  return (
    <>
      <AuthProvider>
        {showHeader && <Header />}
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
