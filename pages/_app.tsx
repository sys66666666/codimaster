import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
    <>
      <Head>
        <title>Codimaster</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
