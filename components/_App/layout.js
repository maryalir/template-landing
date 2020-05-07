import Head from "next/head";
import Navigation from "../nav/navigation";
import "../../public/styles.scss";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </Head>
      <Navigation />
      <div className="wrapper-container">
        <div className="container">{children}</div>
      </div>
    </>
  );
}

export default Layout;
