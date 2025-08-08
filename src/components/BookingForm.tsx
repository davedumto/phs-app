"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomDropdown from "./CustomDropdown";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    message: "",
  });

  const serviceOptions = [
    { value: "interior", label: "Interior Design" },
    { value: "cleaning", label: "Cleaning Services" },
    { value: "fumigation", label: "Fumigation Services" },
    { value: "academy", label: "Design Academy" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string | string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      services: Array.isArray(value) ? value : [value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      services: [],
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
        >
          <div className="md:flex">
            <motion.div
              className="md:w-1/2 bg-teal p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut" as const,
              }}
            >
              <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
              <p className="mb-6">
                Ready to transform your space? Fill out the form and our team
                will get back to you within 24 hours.
              </p>
              <div className="mb-8">
                <h3 className="font-semibold mb-2">Our Contact Information</h3>
                <p className="mb-2">Email: contact@eleganceinterior.com</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p>Address: 123 Design Street, Creative City</p>
              </div>
              <div className="bg-white/10 p-4 rounded-md">
                <p className="text-sm">
                  "We believe that good design should be beautiful, functional,
                  and accessible to everyone."
                </p>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut" as const,
              }}
            >
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: "easeOut" as const,
                  }}
                >
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                    required
                  />
                </motion.div>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: "easeOut" as const,
                  }}
                >
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                    required
                  />
                </motion.div>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: "easeOut" as const,
                  }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </motion.div>
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6,
                    ease: "easeOut" as const,
                  }}
                >
                  <CustomDropdown
                    options={serviceOptions}
                    value={formData.services}
                    onChange={handleServiceChange}
                    placeholder="Select services"
                    label="Services Interested In"
                    variant="form"
                    multiSelect={true}
                  />
                </motion.div>
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: "easeOut" as const,
                  }}
                >
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-orange text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: "easeOut" as const,
                  }}
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
