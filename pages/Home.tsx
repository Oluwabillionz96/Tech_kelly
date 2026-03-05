import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import SkillBarSection from "@/components/skill-bar-section";
import ContactSection from "@/components/ContactSection";

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Static Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <HeroSection />
      <ServicesSection />
      <SkillBarSection />
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
