"use client";
import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-16 bg-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-montserrat">
              Stay Updated with Our Latest Projects
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to see our newest
              interior design projects and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <button className="bg-orange text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
