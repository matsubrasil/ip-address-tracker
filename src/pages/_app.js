import Head from 'next/head'
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './../styles/GlobalStyles'

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>IP tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle/>
      <ToastContainer/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
