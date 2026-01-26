import React from "react";
import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Luca & Galata's Parent",
      role: "Dog & Cat Parent",
      text: "A heartfelt thank you for taking care of Luca and Galata so well! You handled not only their physical but also mental and emotional needs. We literally didn't have anything to worry about - we just knew our kids were in good hands!",
    },
    {
      name: "Chumpy & Pingu's Parent",
      role: "Pet Parent",
      text: "A home away from home! My kids Chumpy and Pingu always enjoy their stay. The staff is absolutely professional, trustworthy and reliable. They provide good food, the place is hygienic, and they deliver exceptional customer service.",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-black mb-4 text-gray-900">
          Our Happy Family
        </h2>
        <p className="text-gray-500">
          See what pet parents are saying about us.
        </p>
      </div>
      <div className="relative w-full">
        <motion.div
          className="flex space-x-8 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* Duplicate logic for infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[350px] bg-sky-50 p-8 rounded-3xl border border-sky-100 shadow-sm flex-shrink-0"
            >
              <Quote className="w-10 h-10 text-sky-200 mb-6" />
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                {t.text}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-sky-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-sky-500 font-bold uppercase tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
