import React, { useRef, useState, useEffect } from "react";
import { Quote, User, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useAnimation } from "framer-motion";

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
  {
    name: "Bella's Parent",
    role: "Dog Parent",
    text: "Bella has never been happier! She comes back home refreshed and well-rested. The team genuinely loves animals and it shows in every interaction. I wouldn't trust anyone else with my fur baby.",
  },
  {
    name: "Mochi's Parent",
    role: "Cat Parent",
    text: "I was nervous at first leaving Mochi behind, but the daily updates and photos put me completely at ease. Mochi was treated like royalty. We'll definitely be back!",
  },
];

const CARD_WIDTH = 370;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export default function Testimonials() {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const total = testimonials.length;

  useEffect(() => {
    const update = () => {
      if (trackRef.current) {
        setContainerWidth(trackRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - Math.floor(containerWidth / CARD_STEP));

  const snapTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrent(clamped);
    controls.start({
      x: -clamped * CARD_STEP,
      transition: { type: "spring", stiffness: 300, damping: 35 },
    });
  };

  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -300) {
      snapTo(current + 1);
    } else if (offset > 50 || velocity > 300) {
      snapTo(current - 1);
    } else {
      snapTo(current);
    }
  };

  // Scroll the container horizontally too
  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 40) snapTo(current + 1);
      else if (e.deltaX < -40) snapTo(current - 1);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden select-none">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sky-500 font-bold uppercase tracking-widest text-sm mb-2">
              Testimonials
            </p>
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Our Happy
              <br />
              <span className="text-sky-400">Family</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base">
              See what pet parents are saying about us.
            </p>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => snapTo(current - 1)}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border-2 border-sky-200 flex items-center justify-center text-sky-400 hover:bg-sky-50 hover:border-sky-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => snapTo(current + 1)}
              disabled={current >= maxIndex}
              className="w-11 h-11 rounded-full border-2 border-sky-200 flex items-center justify-center text-sky-400 hover:bg-sky-50 hover:border-sky-400 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => snapTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-sky-400" : "w-2 bg-sky-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Drag track */}
      <div
        ref={trackRef}
        className="px-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
      >
        <motion.div
          className="flex"
          style={{ x, gap: CARD_GAP }}
          drag="x"
          dragConstraints={{ left: -maxIndex * CARD_STEP, right: 0 }}
          dragElastic={0.08}
          animate={controls}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={{ width: CARD_WIDTH, flexShrink: 0 }}
              whileHover={
                !isDragging ? { y: -4, transition: { duration: 0.2 } } : {}
              }
              className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-3xl border border-sky-100 shadow-sm"
            >
              {/* Big quote mark */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-10 h-10 text-sky-200" />
                <span className="text-sky-100 font-black text-6xl leading-none select-none">
                  "
                </span>
              </div>

              <p className="text-gray-600 text-base leading-relaxed italic mb-8">
                {t.text}
              </p>

              {/* Divider */}
              <div className="h-px bg-sky-100 mb-6" />

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center ring-2 ring-sky-200">
                  <User className="w-6 h-6 text-sky-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-sky-500 font-bold uppercase tracking-wider mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint — fades out after mount */}
      <motion.p
        className="text-center text-gray-300 text-xs mt-8 tracking-wide"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        ← Drag or scroll to explore →
      </motion.p>
    </section>
  );
}
