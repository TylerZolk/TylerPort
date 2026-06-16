import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import MoreThanCode from "@/components/MoreThanCode";
import Thoughts from "@/components/Thoughts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Experience />
      <MoreThanCode />
      <Thoughts />
      <Contact />
      <Footer />
    </main>
  );
}
