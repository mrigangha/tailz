import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-sky-100 to-sky-200 text-gray-900 relative pt-24 pb-10"
    >
      {/* Curvy Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-950"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">PP</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">
                Pets<span className="text-sky-600">Puller</span>
              </span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed font-medium">
              Providing modern pet care solutions across India. Safe,
              transparent, and loving environment for your furry friends.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Services</h4>
            <ul className="space-y-4 text-gray-600">
              {["Event Planning", "Pet Walking", "Pet Sitter", "Day Care"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-sky-600 transition-colors flex items-center group font-medium cursor-pointer"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-0.5 bg-sky-600 mr-0 group-hover:mr-2"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Company</h4>
            <ul className="space-y-4 text-gray-600">
              {["About Us", "Become a Partner", "Careers", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-sky-600 transition-colors flex items-center group font-medium cursor-pointer"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-0.5 bg-sky-600 mr-0 group-hover:mr-2"></span>
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Contact</h4>
            <ul className="space-y-5 text-gray-600">
              <li className="flex items-start space-x-3 group">
                <MapPin
                  size={20}
                  className="text-sky-600 mt-1 group-hover:animate-bounce"
                />
                <span className="group-hover:text-sky-500 transition-colors font-medium">
                  Hebbal,
                  <br />
                  Bangalore, India 560024
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone
                  size={20}
                  className="text-sky-600 group-hover:animate-pulse"
                />
                <span className="group-hover:text-sky-500 transition-colors font-bold">
                  +91 7858044746
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail
                  size={20}
                  className="text-sky-600 group-hover:animate-pulse"
                />
                <span className="group-hover:text-sky-500 transition-colors font-medium">
                  petspuller@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-200/50 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} Pets-Puller Pet Care Pvt Ltd. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-sky-600 transition-colors font-medium cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors font-medium cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
