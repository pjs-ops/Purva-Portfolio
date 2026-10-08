import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { EducationExperience } from "@/components/portfolio/EducationExperience";
import { Skills } from "@/components/portfolio/Skills";
import { Coursework } from "@/components/portfolio/Coursework";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="relative bg-cream text-ink">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <EducationExperience />
      <Skills />
      <Coursework />
      <Contact />
    </main>
  );
}
