import "styles/globals.css";
import Head from "next/head";
export default App;
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BlogHub</title>

        {/* <link
          href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
