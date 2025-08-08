"use client";
import React from "react";
import { motion } from "framer-motion";
import TestimonialCarousel from "./TestimonialCarousel";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <TestimonialCarousel
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
