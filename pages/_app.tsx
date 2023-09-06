import { AppProps } from 'next/app'
import '../styles/index.css'
import { Noto_Sans_KR } from 'next/font/google'

const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})


export default function MyApp({ Component, pageProps }: AppProps) {
  return <main className={noto_sans_kr.className}>
    <Component {...pageProps} />
  </main>
}
