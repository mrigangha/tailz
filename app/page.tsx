"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/components/Navbar";
import Hero from "../components/components/Hero";
import Stats from "../components/components/Stats";
import Services from "../components/components/Services";
import Testimonials from "../components/components/Testimonials";
import Contact from "../components/components/Contact";
import BookingModal from "../components/components/BookingModal";
import Footer from "../components/components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Scroll Spy & Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "services", "contacts"];
      const scrollPosition = window.scrollY + 300;

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
    <div className="min-h-screen bg-sky-50 font-sans text-gray-900 selection:bg-sky-100 selection:text-sky-600 overflow-x-hidden">
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      <div id="home">
        <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />
      </div>

      <Stats />

      <div id="services">
        <Services />
      </div>

      <Testimonials />

      <div id="contacts">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
