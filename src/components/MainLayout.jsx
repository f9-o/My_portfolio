import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import InterestsSection from './sections/InterestsSection';
import ContactSection from './sections/ContactSection';

const MainLayout = () => {
  return (
    <div className="bg-[#030303] text-white font-mono min-h-screen overflow-y-auto">
      {/* Fallback Static BG */}
      <div className="fixed inset-0 bg-[#050505] z-0" />

      {/* Content */}
      <main className="relative z-10">
         <div id="hero"> <HeroSection /> </div>
         <div id="about"> <AboutSection /> </div>
         <div id="experience"> <ExperienceSection /> </div>
         <div id="certifications"> <CertificationsSection /> </div>
         <div id="skills"> <SkillsSection /> </div>
         <div id="projects"> <ProjectsSection /> </div>
         <div id="interests"> <InterestsSection /> </div>
         <div id="contact"> <ContactSection /> </div>
      </main>
    </div>
  );
};

export default MainLayout;
