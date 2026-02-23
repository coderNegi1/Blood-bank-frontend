import HeroSection from "@/app/components/Hero";
import Collaborators from "@/app/components/Collaborators";
import BloodWorkflowPage from "@/app/components/BloodWorkflow";
import MissionSection from "@/app/components/Mission";
import WelcomePopup from "../components/popup";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-900 ">

      <WelcomePopup />
      <section id="hero" className="mt-16">
        <HeroSection />
      </section>

      <section id="mission" className="mt-16">
        <MissionSection />
      </section>

      <section id="workflow" className="mt-16">
        <BloodWorkflowPage />
      </section>

      <section id="collaborators" className="mt-16 ">
        <Collaborators />
      </section>
    </main>
  );
}
