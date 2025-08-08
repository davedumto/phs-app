"use client";

import React from "react";
import { motion } from "framer-motion";
import Masonry from "../../src/components/Masonry";
import Navbar from "../../src/components/Navbar";
import ServicesSection from "../../src/components/ServicesSection";
import Newsletter from "../../src/components/Newsletter";
import FAQ from "../../src/components/FAQ";
import Footer from "../../src/components/Footer";

const GalleryPage = () => {
  const interiorDesignItems = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=900&fit=crop",
      url: "https://example.com/project1",
      height: 900,
      title: "Modern Living Room",
      category: "Interior Design",
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=750&fit=crop",
      url: "https://example.com/project2",
      height: 750,
      title: "Minimalist Kitchen",
      category: "Interior Design",
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=800&fit=crop",
      url: "https://example.com/project3",
      height: 800,
      title: "Luxurious Bedroom",
      category: "Interior Design",
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&h=600&fit=crop",
      url: "https://example.com/project4",
      height: 600,
      title: "Contemporary Dining",
      category: "Interior Design",
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=1000&fit=crop",
      url: "https://example.com/project5",
      height: 1000,
      title: "Elegant Lounge",
      category: "Interior Design",
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=600&h=700&fit=crop",
      url: "https://example.com/project6",
      height: 700,
      title: "Cozy Family Room",
      category: "Interior Design",
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=850&fit=crop",
      url: "https://example.com/project7",
      height: 850,
      title: "Master Suite",
      category: "Interior Design",
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=650&fit=crop",
      url: "https://example.com/project8",
      height: 650,
      title: "Home Office",
      category: "Interior Design",
    },
    {
      id: "9",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=950&fit=crop",
      url: "https://example.com/project9",
      height: 950,
      title: "Open Concept Living",
      category: "Interior Design",
    },
    {
      id: "10",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=550&fit=crop",
      url: "https://example.com/project10",
      height: 550,
      title: "Modern Bathroom",
      category: "Interior Design",
    },
    {
      id: "11",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=750&fit=crop",
      url: "https://example.com/project11",
      height: 750,
      title: "Urban Apartment",
      category: "Interior Design",
    },
    {
      id: "12",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=800&fit=crop",
      url: "https://example.com/project12",
      height: 800,
      title: "Scandinavian Style",
      category: "Interior Design",
    },
    {
      id: "13",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=700&fit=crop",
      url: "https://example.com/project13",
      height: 700,
      title: "Industrial Loft",
      category: "Interior Design",
    },
    {
      id: "14",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=900&fit=crop",
      url: "https://example.com/project14",
      height: 900,
      title: "Luxury Villa",
      category: "Interior Design",
    },
    {
      id: "15",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=750&fit=crop",
      url: "https://example.com/project15",
      height: 750,
      title: "Modern Studio",
      category: "Interior Design",
    },
    {
      id: "16",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=850&fit=crop",
      url: "https://example.com/project16",
      height: 850,
      title: "Coastal Retreat",
      category: "Interior Design",
    },
    {
      id: "17",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=600&fit=crop",
      url: "https://example.com/project17",
      height: 600,
      title: "Urban Penthouse",
      category: "Interior Design",
    },
    {
      id: "18",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=950&fit=crop",
      url: "https://example.com/project18",
      height: 950,
      title: "Mountain Cabin",
      category: "Interior Design",
    },
    {
      id: "19",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=700&fit=crop",
      url: "https://example.com/project19",
      height: 700,
      title: "Contemporary Loft",
      category: "Interior Design",
    },
    {
      id: "20",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=800&fit=crop",
      url: "https://example.com/project20",
      height: 800,
      title: "Mediterranean Villa",
      category: "Interior Design",
    },
    {
      id: "21",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=650&fit=crop",
      url: "https://example.com/project21",
      height: 650,
      title: "Art Deco Apartment",
      category: "Interior Design",
    },
    {
      id: "22",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=900&fit=crop",
      url: "https://example.com/project22",
      height: 900,
      title: "Minimalist House",
      category: "Interior Design",
    },
    {
      id: "23",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=750&fit=crop",
      url: "https://example.com/project23",
      height: 750,
      title: "Bohemian Studio",
      category: "Interior Design",
    },
    {
      id: "24",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=850&fit=crop",
      url: "https://example.com/project24",
      height: 850,
      title: "Modern Farmhouse",
      category: "Interior Design",
    },
    {
      id: "25",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=600&fit=crop",
      url: "https://example.com/project25",
      height: 600,
      title: "Luxury Penthouse",
      category: "Interior Design",
    },
    {
      id: "26",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=950&fit=crop",
      url: "https://example.com/project26",
      height: 950,
      title: "Contemporary Villa",
      category: "Interior Design",
    },
    {
      id: "27",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=700&fit=crop",
      url: "https://example.com/project27",
      height: 700,
      title: "Urban Townhouse",
      category: "Interior Design",
    },
    {
      id: "28",
      img: "https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=800&fit=crop",
      url: "https://example.com/project28",
      height: 800,
      title: "Scandinavian Home",
      category: "Interior Design",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7e8]">
      <Navbar />
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
              Our Interior Design <span className="text-teal">Portfolio</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our curated collection of stunning interior design
              projects that transform spaces into beautiful, functional
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-700">
              Click on any project to view more details
            </p>
          </div>

          <Masonry
            items={interiorDesignItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-4xl font-bold text-teal mb-2">150+</div>
              <div className="text-gray-700">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="text-4xl font-bold text-teal mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="text-4xl font-bold text-teal mb-2">98%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="text-4xl font-bold text-teal mb-2">50+</div>
              <div className="text-gray-700">Awards Won</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              What Our Clients <span className="text-teal">Say</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our interior design services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4">
                <div className="text-orange text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "The team transformed our living room into a stunning space that
                perfectly reflects our style. Professional, creative, and
                detail-oriented."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-600">Residential Client</div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4">
                <div className="text-orange text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "Exceptional service from start to finish. They understood our
                vision and delivered beyond our expectations. Highly
                recommended!"
              </p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-600">Commercial Client</div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="flex items-center mb-4">
                <div className="text-orange text-2xl">★★★★★</div>
              </div>
              <p className="text-gray-700 mb-4">
                "Professional, innovative, and truly passionate about design.
                They made our dream home a reality with their expertise and
                creativity."
              </p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-600">Luxury Home Owner</div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                Ready to Transform Your{" "}
                <span className="text-teal">Space?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Let's create something beautiful together. Get in touch to start
                your interior design journey and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services/interiors"
                  className="bg-teal text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
                >
                  Explore Our Services
                </a>
                <a
                  href="/contact"
                  className="border border-teal text-teal px-8 py-4 rounded-md text-lg font-semibold hover:bg-teal hover:bg-opacity-10 transition-colors inline-block"
                >
                  Book a Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />

      <FAQ />

      <Footer />
    </div>
  );
};

export default GalleryPage;
