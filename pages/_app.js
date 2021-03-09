import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="manifest" href="/manifest.json" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
