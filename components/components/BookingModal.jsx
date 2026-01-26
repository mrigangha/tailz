"use client";

import { addLead } from "@/lib/leads";
import React, { useState } from "react";
import { X, Calendar, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookingModal = ({ isOpen, onClose }) => {
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      console.log(data);

      await addLead({
        email: data.date,
        phone: data.phone,
        name: data.name,
        service: data.service,
      });
      setIsSubmitting(false);

      // Show success notification
      setNotification({
        type: "success",
        message: "Booking confirmed successfully!",
      });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setNotification(null);
      }, 4000);
    } catch (error) {
      console.error("Error submitting booking:", error);
      setNotification({
        type: "error",
        message: "Failed to submit booking. Please try again.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm cursor-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            onClick={onClose}
            type="button"
          >
            <X size={20} className="text-gray-600" />
          </button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-black text-gray-900">
              Book a Service
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Fill in the details and we'll get back to you shortly.
            </p>
          </div>

          {/* Notification */}
          <AnimatePresence>
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mb-4 p-4 rounded-xl flex items-center gap-3 ${
                  notification.type === "success"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {notification.type === "success" ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-semibold">{notification.message}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all cursor-text"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all cursor-text"
                  placeholder="+91..."
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Service
              </label>
              <select
                name="service"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all cursor-pointer"
                required
                disabled={isSubmitting}
              >
                <option value="FUNCTIONSERVICE">Event Planning</option>
                <option value="WALKING">Pet Walking</option>
                <option value="DAYCARE">Day Care</option>
                <option value="PETSITTING">Pet Sitting</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Pick a Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all cursor-text"
                required
                disabled={isSubmitting}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all mt-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Confirm Booking"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
