import Banner from "@/components/banner/Banner";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Logo2 from "@/components/logo/Logo";
import Fleet from "@/components/fleet/Fleet";
import Works from "@/components/works/Works";
import Maketrip from "@/components/maketrip/Maketrip";
import Showcase from "@/components/showcase/Showcase";

export default function Home() {
  return (
    <>
      <Banner />
      <Logo2 />
      <Fleet />
      <Works />
      <Maketrip />
      <Showcase />
    </>
  );
}
