"use client";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Add from "./components/Add";
import Testimonials from "./components/Testimonials";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Top from "./components/Top";


export default function Home() {
  
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Feature />
      <Add />
      <Testimonials />
      <Content />
      <Footer />
      <Top />
    </main>
  );
}
