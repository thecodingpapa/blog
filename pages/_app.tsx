import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
