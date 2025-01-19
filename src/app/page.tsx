import Banner from "@/components/banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo2 from "@/components/logo/Logo";
import Fleet from "@/components/fleet/Fleet";
import Works from "@/components/works/Works";
import Maketrip from "@/components/maketrip/Maketrip";
import Showcase from "@/components/showcase/Showcase";
import Services from "@/components/services/Services";
import Header from "@/header/Header";
import Review from "@/components/review/Review";
import Region from "@/components/region/Region";
import News from "@/components/news/News";
import Faq from "@/components/faq/Faq";
import Footer from "@/footer/Footer";

export default function Home() {
  

  return (
    <>
      <Header />
      <Banner />
      <Logo2 />
      <Fleet />
      <Works />
      <Maketrip />
      <Showcase />
      <Services />
      <Review />
      <Region />
      <News />
      <Faq />
      <Footer />
    </>
  );
}
