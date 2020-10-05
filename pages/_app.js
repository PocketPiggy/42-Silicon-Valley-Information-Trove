import "../styles/style.scss";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;