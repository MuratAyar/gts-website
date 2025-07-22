import Hero from "../../components/Hero/Hero";
import FeaturedListings from "../../components/FeaturedListings/FeaturedListings";
import DoubleAction from "../../components/DoubleCallToAction/DoubleCallToAction";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import StatsSection from "../../components/AboutPageComponents/Stats/StatsSection";
import StepsSection from "../../components/AboutPageComponents/Steps/StepsSection";
import NewsletterSection from "../../components/Newsletter/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedListings />
      <DoubleAction />
      <WhyChooseUs />
      <StatsSection />
      <StepsSection />
      <NewsletterSection />
      {/* …ileride Featured, Category icons, vb… */}
    </>
  );
}
