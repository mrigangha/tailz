import React from "react";
import { Clock, Camera, ShieldCheck, Heart, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="py-24 bg-gray-950 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Heart className="w-96 h-96" />
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sky-500 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Why Pet Parents <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Choose Pets-Puller?
              </span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Clock />,
                  title: "24/7 Support",
                  text: "Round the clock assistance for any emergency.",
                },
                {
                  icon: <Camera />,
                  title: "Daily Photo Updates",
                  text: "Receive adorable pictures and videos of your pet daily.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "Premium Insurance",
                  text: "Every booking is covered by our comprehensive insurance.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="mt-1 bg-gray-900 border border-gray-800 group-hover:bg-sky-500 group-hover:border-sky-500 p-3 rounded-2xl transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 text-gray-900 shadow-2xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500"></div>
            <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
            <p className="text-gray-600 mb-8">
              Ready to give your pet the best care? Call us now and we'll answer
              all your queries.
            </p>
            <motion.a
              href="tel:+917858044746"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center w-full bg-gray-900 text-white py-5 px-6 rounded-xl font-bold hover:bg-sky-600 transition-all cursor-pointer space-x-3"
            >
              <Phone className="w-5 h-5" />
              <span>+91 7858044746</span>
            </motion.a>
            <p className="mt-6 text-sm text-gray-400">
              Available 24/7 for your pet care needs
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
