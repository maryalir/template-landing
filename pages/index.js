import HomeHead from "../components/home/home-head/homeHead";
import HomeEnd from "../components/home/home-end/homeEnd";
import HomeMiddle from "../components/home/home-middle/homeMiddle";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <HomeHead />
      <HomeMiddle />
      <HomeEnd />
      <Footer />
    </>
  );
}
