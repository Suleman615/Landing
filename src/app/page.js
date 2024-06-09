import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";

export default function Home() {
  return (
    <>
    <div className="b">
    <Navbar />
        <Hero />
        <Features />
        <About/>
        <Pricing/>
        {/* <Governance/> */}
        {/* <Security/> */}
        {/* <JoinUs/> */}
        <Footer/>
    </div>
        
       
    </>
  );
}
