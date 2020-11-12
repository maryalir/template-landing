import HomeHead from "../components/home/home-head/homeHead";
import HomeEnd from "../components/home/home-end/homeEnd";
import HomeMiddle from "../components/home/home-middle/homeMiddle";
import HomeAbout from "../components/home/home-about/homeAbout";
import HomeMap from "../components/home/home-map/homeMap";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <HomeHead />
      <HomeMap/>
      <HomeMiddle />
      <HomeEnd />
      <HomeAbout />
      <Footer />
    </>
  );
}
