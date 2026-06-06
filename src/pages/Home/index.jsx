import React from "react";
import Navbar from "../../components/Landing/Navbar";
import Hero from "../../components/Landing/Hero";
import LogoMarquee from "../../components/Landing/LogoMarquee";
import Stats from "../../components/Landing/Stats";
import Problem from "../../components/Landing/Problem";
import Services from "../../components/Landing/Services";
import Showreel from "../../components/Landing/Showreel";
import Process from "../../components/Landing/Process";
import Guarantees from "../../components/Landing/Guarantees";
import WhyMe from "../../components/Landing/WhyMe";
import Testimonials from "../../components/Landing/Testimonials";
import Work from "../../components/Landing/Work";
import Approach from "../../components/Landing/Approach";
import Faq from "../../components/Landing/Faq";
import CtaContact from "../../components/Landing/CtaContact";
import Footer from "../../components/Landing/Footer";
import BrandColorSwitcher from "../../components/BrandColorSwitcher";
import WhatsAppFab from "../../components/Landing/WhatsAppFab";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <Problem />
        <Services />
        <Showreel />
        <Process />
        <Guarantees />
        <WhyMe />
        <Testimonials />
        <Work />
        <Approach />
        <Faq />
        <CtaContact />
      </main>
      <Footer />
      <WhatsAppFab />
      <BrandColorSwitcher />
    </>
  );
};

export default Home;
