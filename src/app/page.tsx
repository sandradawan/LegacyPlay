import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ceo from "@/components/Ceo";
import Offerings from "@/components/Offerings";
import Tournaments from "@/components/Tournaments";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Ceo />
        <Offerings />
        <Tournaments />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
