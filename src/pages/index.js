import Header from "../components/header";
import AfterHeader from "../components/home/afterHeader";
import ViewCollection from "../components/home/viewCollection";

import StickyCollection from "../components/home/stickyCollection";
import RelatedViewCollection from "../components/home/relatedViewCollection";
import SliderSection from "../components/home/sliderSection";

import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <AfterHeader />
        <ViewCollection />
        <StickyCollection />
        <RelatedViewCollection />
        <SliderSection />
        <Footer />
      </main>
    </>
  );
}
