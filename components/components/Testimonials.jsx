import React from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Dog Mom",
      text: "The best care I could ask for! My Golden Retriever loves coming here.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike Chen",
      role: "Cat Dad",
      text: "Professional, clean, and carrying. Detailed updates everyday!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Patel",
      role: "Pet Parent",
      text: "Training sessions were a game changer for my puppy.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "David Smith",
      role: "Dog Dad",
      text: "Highly recommended for weekend boarding. Stress free experience.",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-black mb-4 text-gray-900">
          Our Happy Family
        </h2>
        <p className="text-gray-500">See what pet parents are saying about us.</p>
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
                "{t.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
