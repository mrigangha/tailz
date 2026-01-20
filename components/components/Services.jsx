import React from "react";
import { Heart, Star, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const Services = () => {
  const services = [
    {
      title: "Pet Boarding",
      description:
        "A home away from home with 24/7 supervision and plenty of playtime in our spacious facility.",
      icon: <Heart className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      color: "bg-sky-500",
    },
    {
      title: "Pet Grooming",
      description:
        "Professional styling and hygiene treatments to keep your pet looking and feeling their absolute best.",
      icon: <Star className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600",
      color: "bg-indigo-500",
    },
    {
      title: "Dog Training",
      description:
        "Expert-led sessions focusing on positive reinforcement to build a strong bond with your pet.",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600",
      color: "bg-teal-500",
    },
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
    <section id="services" className="py-24 bg-sky-50/50 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl font-black mb-4 text-gray-900">
            Our Premium Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Everything your pet needs to stay happy, healthy, and safe. Tailored
            care for every breed.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <TiltCard className="group h-full bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] transition-shadow duration-300 overflow-hidden border border-white/60 hover:border-sky-200 cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <div
                    className={`absolute top-4 left-4 ${service.color} p-3 rounded-2xl shadow-lg z-10`}
                  >
                    {service.icon}
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-sky-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sky-600 font-bold hover:gap-3 transition-all duration-300">
                    Learn More <ChevronRight className="w-5 h-5 ml-1" />
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
