import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from '../components';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/auth';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const showHeader = router.pathname !== '/login';
  return (
    <>
      <AuthProvider>
        {showHeader && <Header />}
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
