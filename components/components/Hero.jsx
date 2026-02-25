import React from "react";
import { ChevronRight } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hero = ({ onOpenBooking }) => {
  // Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const heroX = useTransform(mouseX, [0, 1], [-20, 20]);
  const heroY = useTransform(mouseY, [0, 1], [-20, 20]);
  const bgX = useTransform(mouseX, [0, 1], [30, -30]);
  const bgY = useTransform(mouseY, [0, 1], [30, -30]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

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
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Parallax Blobs */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-sky-200/40 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"
      />
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="z-10"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-wider uppercase text-sky-700 bg-sky-100 rounded-full border border-sky-200 shadow-sm">
              Trusted by 5,000+ Pet Parents
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6"
          >
            The Best Care For Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              Best Friend.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed"
          >
            Premium pet services. We provide a safe, loving environment for your
            pets while you're away.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <motion.button
              onClick={onOpenBooking}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sky-600 transition-all flex items-center justify-center shadow-xl cursor-pointer"
            >
              Find a Sitter
              <ChevronRight className="ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT VIDEO (FIXED) */}
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[80px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
