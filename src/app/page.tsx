import About from "@/components/About";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-60 space-y-16 md:space-y-24 py-16 md:py-24">
        <About />
        <Portfolio />
        <Resume />
      </div>
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
