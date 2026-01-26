"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ scrolled, activeSection, onOpenBooking }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3 border-b border-white/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.7 }}
            className="w-10 h-10 bg-gradient-to-tr from-sky-400 to-blue-600 rounded-xl shadow-lg shadow-sky-500/30 flex items-center justify-center transform rotate-3"
          >
            <span className="text-white font-bold text-xl">PP</span>
          </motion.div>
          <span className="text-2xl font-black tracking-tighter text-gray-900">
            Pets<span className="text-sky-600">Puller</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "Contacts"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-medium transition-colors relative group cursor-pointer ${
                activeSection === item.toLowerCase()
                  ? "text-sky-600"
                  : "text-gray-600 hover:text-sky-500"
              }`}
            >
              {item}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}

          <motion.button
            onClick={onOpenBooking}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all border border-sky-400/20 cursor-pointer"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="py-6 px-6 space-y-4">
              {["Home", "Services", "Contacts"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-lg font-medium text-gray-800 hover:text-sky-500"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={onOpenBooking}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-xl font-bold shadow-md"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
