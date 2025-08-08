"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import {
  SparklesIcon,
  BugIcon,
  GraduationCapIcon,
  HomeIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: "interiors",
      title: "Interior Design",
      description:
        "Transform your space with our professional interior design services. We create beautiful, functional spaces tailored to your lifestyle.",
      icon: <HomeIcon size={24} />,
      subservices: ["Booking", "Our Works", "Reviews"],
    },
    {
      id: "cleaning",
      title: "Cleaning Services",
      description:
        "Keep your space pristine with our professional cleaning services. We use eco-friendly products and techniques.",
      icon: <SparklesIcon size={24} />,
      subservices: ["Booking", "Our Works", "Reviews"],
    },
    {
      id: "fumigation",
      title: "Fumigation",
      description:
        "Eliminate pests and maintain a healthy environment with our comprehensive fumigation services.",
      icon: <BugIcon size={24} />,
      subservices: ["Booking", "Our Works", "Reviews"],
    },
    {
      id: "academy",
      title: "Design Academy",
      description:
        "Learn the art of interior design from our experts. Join our courses and workshops to enhance your skills.",
      icon: <GraduationCapIcon size={24} />,
      subservices: [
        "Registration",
        "Testimonials",
        "Courses",
        "Gallery",
        "Payment",
      ],
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  // Check if we're on mobile only for layout purposes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="services" className="py-16 bg-[#f9f7e8]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We Offer a Range of Services Tailored to Your Needs
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants} custom={index}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                subservices={service.subservices}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ServicesSection;
