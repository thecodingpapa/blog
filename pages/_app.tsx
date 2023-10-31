import { AppProps } from 'next/app'
import '../styles/index.css'
// import '../styles/tailwind.css'
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}

      <Component {...pageProps} />
    </>
  );
}
