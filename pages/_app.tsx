import { AppProps } from 'next/app'
import '../styles/index.css'
// import '../styles/tailwind.css'
import Meta from '../components/meta';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the favicon */}
      <Meta />
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}
