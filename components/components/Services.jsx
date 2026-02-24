import React from "react";
import { Calendar, Footprints, Activity } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const Services = () => {
  const services = [
    {
      title: "Event Pet Chaperone",
      description:
        "Planning a wedding or special event? We manage your dog during the festivities, ensuring they are part of your big day safely without the stress.",
      icon: <Calendar className="w-8 h-8 text-white" />,
      image:
        "https://res.cloudinary.com/dzc1x0y1h/image/upload/v1771946116/WhatsApp_Image_2026-02-24_at_8.31.45_PM_prdyh5.jpg",
      color: "bg-pink-500",
    },
    {
      title: "Walking & Day Care",
      description:
        "Reliable dog walking, drop-in pet sitting, and day care services to keep your furry friend happy, active, and socialized while you are busy.",
      icon: <Footprints className="w-8 h-8 text-white" />,
      image:
        "https://res.cloudinary.com/dzc1x0y1h/image/upload/v1771946105/WhatsApp_Image_2026-02-24_at_8.31.51_PM_rjsmbk.jpg",
      color: "bg-sky-500",
    },
    {
      title: "Special Needs Care",
      description:
        "Experienced care for senior dogs and specific medical needs, including Arthritis, Epilepsy, and mobility support. Your pet is safe in knowledgeable hands.",
      icon: <Activity className="w-8 h-8 text-white" />,
      image:
        "https://res.cloudinary.com/dzc1x0y1h/image/upload/v1771946105/WhatsApp_Image_2026-02-24_at_8.31.51_PM_1_gpkzff.jpg",
      color: "bg-emerald-500",
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
            Professional Pet Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From special events to specialized medical care, we provide the
            attention and expertise your best friend deserves.
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
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
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
