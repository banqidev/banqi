import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "src/components/Stats";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "src/components/Video";
import { Metadata } from "next";
import Stats from "src/components/Stats";
import MainPage from "@/components/Main Page";

export const metadata: Metadata = {
  title: "Servicii IT Profesionale - BANQI",
  description: "BANQI oferă soluții IT personalizate pentru afaceri de orice dimensiune. De la dezvoltare software, web design, integrare sisteme până la consultanță IT, suntem partenerul tău de încredere pentru transformarea digitală.",
  keywords: "Servicii IT, Dezvoltare Software, Design Web, Consultanță IT, Integrare Sisteme, Soluții IT, BANQI",
  robots: "index, follow",

};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <MainPage />
      <Hero />
      <Features />
      <Video />
      <Stats />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing />
      <Contact />
    </>
  );
}
