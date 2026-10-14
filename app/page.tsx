import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import RoomExperience from '@/components/experience/RoomExperience';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import PracticeAreas from '@/components/sections/PracticeAreas';
import LawyersSection from '@/components/sections/LawyersSection';
import CasesSection from '@/components/sections/CasesSection';
import ApproachSection from '@/components/sections/ApproachSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <RoomExperience />
        <AboutSection />
        <StatsSection />
        <VisionMissionSection />
        <PracticeAreas />
        <LawyersSection />
        <CasesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
