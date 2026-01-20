"use client";

import React, { useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";
import Footer from "./components/Footer";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll Spy & Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "contacts"];
      const scrollPosition = window.scrollY + 300; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 font-sans text-gray-900 selection:bg-sky-100 selection:text-sky-600 overflow-x-hidden cursor-none">
      <CustomCursor />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />

      <Stats />

      <Services />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}
