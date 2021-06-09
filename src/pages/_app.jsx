import "../styles/global.scss";
import { Header } from "../components/Header";
import { linksData } from "../components/Header/data";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header links={linksData} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
