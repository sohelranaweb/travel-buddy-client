import CTASection from "@/components/modules/Home/CTASection";
import { Destinations } from "@/components/modules/Home/Destination";
import Features from "@/components/modules/Home/Features";
import { Hero } from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/How-it-works";
import Newsletter from "@/components/modules/Home/Newsletter";
import PopularTrips from "@/components/modules/Home/PopularTrips";
import SafetySection from "@/components/modules/Home/safety-section";
import Testimonials from "@/components/modules/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <PopularTrips></PopularTrips>
      <Features></Features>
      <Destinations></Destinations>
      <Newsletter></Newsletter>
      <SafetySection></SafetySection>
      <Testimonials></Testimonials>
      <CTASection></CTASection>
    </div>
  );
}
