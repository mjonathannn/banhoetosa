import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";

import "./_app.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="SKS Banho e Tosa Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SKS Banho e Tosa</title>
      </Head>

      <Script
        src="https://kit.fontawesome.com/7d72de7558.js"
        crossOrigin="anonymous"
      />

      <Component {...pageProps} />
    </>
  );
};

export default App;
