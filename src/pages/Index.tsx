import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import Projects from "@/components/Portfolio/Projects";
import Experience from "@/components/Portfolio/Experience";
import Skills from "@/components/Portfolio/Skills";
import CompetitiveProgramming from "@/components/Portfolio/CompetitiveProgramming";
import CurrentlyBuilding from "@/components/Portfolio/CurrentlyBuilding";
import BeyondCoding from "@/components/Portfolio/BeyondCoding";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <CompetitiveProgramming />
      <CurrentlyBuilding />
      <BeyondCoding />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;