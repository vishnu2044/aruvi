import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Industries from "./components/Industries";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhatYouGet from "./components/WhatYouGet";
import Process from "./components/Process";
import WhyMe from "./components/WhyMe";
import NextSteps from "./components/NextSteps";
import Faq from "./components/Faq";
import About from "./components/About";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";

/** Scrolls to top on every route change (except hash navigation) */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Industries />
      <Services />
      <Portfolio />
      <WhatYouGet />
      <Process />
      <WhyMe />
      <NextSteps />
      <Faq />
      <About />
      <FinalCTA />
      {/* Contact remains as an option, but FinalCTA might lead to it. We keep Contact for those scrolling all the way. */}
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
