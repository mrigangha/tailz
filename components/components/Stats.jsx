import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Happy Pets", value: "5000+" },
    { label: "Verified Sitters", value: "200+" },
    { label: "Cities", value: "15+" },
    { label: "Rating", value: "4.9/5" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-16 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="text-center group cursor-default"
            >
              <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
