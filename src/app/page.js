import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Security from "@/components/Security";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Features />
        <About/>
        <Governance/>
        <Security/>
        <JoinUs/>
        <Footer/>
       
    </>
  );
}
