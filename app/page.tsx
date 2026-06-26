import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lookbook from "@/components/Lookbook";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Measurements from "@/components/Measurements";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lookbook />
      {/* <Services /> */}
      <About />
      <Process />
      <Measurements />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}
