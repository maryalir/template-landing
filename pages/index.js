import HomeHead from "../components/home/home-head/homeHead";
import HomeMiddle from "../components/home/home-middle/homeMiddle";
import HomeServices from "../components/home/home-services/homeServices";
import HomeSample from "../components/home/homeSample/homeSample";
import HomeTeam from "../components/home/home-team/homeTeam";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <HomeHead />
      <HomeMiddle />
      <HomeServices />
      <HomeSample />
      <HomeTeam />
      <Footer/>
    </>
  );
}
