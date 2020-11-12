import HomeHead from "../components/home/home-head/homeHead";
import HomeEnd from "../components/home/home-end/homeEnd";
import HomeMiddle from "../components/home/home-middle/homeMiddle";
import HomeAbout from "../components/home/home-about/homeAbout";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <HomeHead />
      <HomeMiddle />
      <HomeEnd />
      <HomeAbout />
      <Footer />
    </>
  );
}
