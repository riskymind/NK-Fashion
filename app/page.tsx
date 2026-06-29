import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lookbook from "@/components/Lookbook";
import About from "@/components/About";
import Process from "@/components/Process";
import Measurements from "@/components/Measurements";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <div className="nk-scroll-progress" />
      <Navbar />
      <Hero />
      <Lookbook />
      <About />
      <Process />
      <Measurements />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
      <ScrollAnimations />
    </>
  );
}
