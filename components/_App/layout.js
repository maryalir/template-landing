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
        <title>Mia Plus +</title>
        
        <meta
          name="description"
          content="MiaPlus+ offers Marketplace insurance plans with different coverage and premium levels. Learn more about our affordable healthcare plans and compare each..."
        />

        <meta property="og:title" content="Gold Tree by CS" />
        <meta
          property="og:description"
          content="MiaPlus+ offers Marketplace insurance plans with different coverage and premium levels. Learn more about our affordable healthcare plans and compare each..."
        />
        <meta
          property="og:image"
          content="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/LogoMIAPLUSazulMINI.png"
        />
        <meta property="og:url" content="https://miaplus.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Navigation />
      <div className="wrapper-container">
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export default Layout;
