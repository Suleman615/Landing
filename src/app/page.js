import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";

import { Heebo } from "next/font/google"; 

const heebo = Heebo({
  subsets:["hebrew"],
  weight:'600'
})

export default function Home() {
  return (
    
    <main className={heebo.className}>
    <Navbar />
        <Hero />
        <Features />
        <About/>
        <Pricing/>
        {/* <Governance/> */}
        {/* <Security/> */}
        {/* <JoinUs/> */}
        <Footer/>
    </main>
        
       
  
  );
}
