"use client";
import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 w-full">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 font-montserrat"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Elevating Spaces, <span className="text-teal">Enhancing Lives</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We create beautiful, functional spaces that reflect your style and
            meet your needs. From interior design to cleaning and fumigation
            services, we've got you covered.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a
              href="#services"
              className="bg-teal text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors"
            >
              Explore Our Services
              <ArrowRightIcon size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="border border-teal text-teal px-6 py-3 rounded-md flex items-center justify-center hover:bg-teal hover:bg-opacity-10 transition-colors"
            >
              Book a Consultation
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=80"
              alt="Elegant interior design"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <motion.div
              className="absolute -bottom-6 -left-6 bg-orange p-4 rounded-md shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <p className="text-white font-bold">15+ Years of Excellence</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
