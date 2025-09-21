
import CallToAction from "../components/CallToAction";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import GenerateSection from "../components/GenerateSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StatsSection from "../components/StatusSection";
import WorkflowPreview from "../components/WorkflowPreview";
import Working from "../components/Working";

export default function Homepage() {
  return (
    <div className="font-sans bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white min-h-screen">
      <Navbar/>
      <div className="relative-z-0">
          <HeroSection />

          <StatsSection />

          <FeaturesSection />

          <Working/>
          <CallToAction />
          <GenerateSection/>
          <div className="mt-16">
            <Footer />
          </div>
      </div>
    </div>
  );
}

