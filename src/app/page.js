'use client'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Add from "./components/Add";
import Testimonials from "./components/Testimonials";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Top from "./components/Top";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const locomotive = new LocomotiveScroll();
  return (
   <main>
    <Navbar/>
    <HeroSection/>
    <Feature/>
    <Add/>
    <Testimonials/>
    <Content/>
    <Footer/>
    <Top/>
   </main>
  );
}
