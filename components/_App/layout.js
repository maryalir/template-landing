import Head from "next/head";
import Navigation from "../nav/navigation";
import "../../public/styles.scss";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
        <script type="text/javascript" src="scripts/scrollNav.js"></script>
      </Head>
      <Navigation />
      <div className="wrapper-container">
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export default Layout;
