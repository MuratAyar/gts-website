import Hero from "../../components/Hero/Hero";
import FeaturedListings from "../../components/FeaturedListings/FeaturedListings";
import DoubleAction from "../../components/DoubleCallToAction/DoubleCallToAction";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";


export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <DoubleAction />
      <WhyChooseUs />
      {/* …ileride Featured, Category icons, vb… */}
    </>
  );
}
