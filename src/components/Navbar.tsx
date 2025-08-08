"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CustomDropdown from "./CustomDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const serviceOptions = [
    { value: "interiors", label: "Interior Design" },
    { value: "cleaning", label: "Cleaning Services" },
    { value: "fumigation", label: "Fumigation" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close services menu when main menu is toggled
    if (isOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServiceSelect = (value: string | string[]) => {
    const serviceValue = Array.isArray(value) ? value[0] : value;
    setSelectedService(serviceValue);
    setIsLoading(true);
    // Navigate to the service page
    window.location.href = `/services/${serviceValue}`;
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="bg-slate-800 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Elegance Interior Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Services Dropdown */}
            <CustomDropdown
              options={serviceOptions}
              value={selectedService}
              onChange={handleServiceSelect}
              placeholder="Services"
              variant="navbar"
            />

            <a
              href="/gallery"
              className="text-white hover:text-lightblue transition-colors font-medium"
            >
              Gallery
            </a>

            <a
              href="/academy"
              className="text-white hover:text-lightblue transition-colors font-medium"
            >
              Academy
            </a>

            <a
              href="#contact"
              className="bg-orange text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex items-center justify-center text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <XIcon size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MenuIcon size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={toggleMenu}
              />

              {/* Mobile Menu */}
              <motion.div
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-800 shadow-2xl z-50 md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.4,
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-slate-700">
                    <h2 className="text-white text-lg font-semibold">Menu</h2>
                    <button
                      onClick={toggleMenu}
                      className="text-white hover:text-lightblue transition-colors p-2"
                    >
                      <XIcon size={20} />
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 px-6 py-8 space-y-6">
                    {/* Services Dropdown */}
                    <div className="space-y-3">
                      <button
                        onClick={toggleServicesMenu}
                        className="flex items-center justify-between w-full text-white hover:text-lightblue transition-colors py-3 px-4 rounded-lg hover:bg-slate-700 font-medium text-left"
                      >
                        <span>Services</span>
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDownIcon size={18} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            className="ml-4 space-y-2 border-l-2 border-slate-600 pl-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <motion.a
                              href="/services/interiors"
                              className="block py-2 px-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              Interior Design
                            </motion.a>
                            <motion.a
                              href="/services/cleaning"
                              className="block py-2 px-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.15 }}
                            >
                              Cleaning Services
                            </motion.a>
                            <motion.a
                              href="/services/fumigation"
                              className="block py-2 px-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              Fumigation
                            </motion.a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Gallery Link */}
                    <motion.a
                      href="/gallery"
                      className="block text-white hover:text-lightblue transition-colors py-3 px-4 rounded-lg hover:bg-slate-700 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Gallery
                    </motion.a>

                    {/* Academy Link */}
                    <motion.a
                      href="/academy"
                      className="block text-white hover:text-lightblue transition-colors py-3 px-4 rounded-lg hover:bg-slate-700 font-medium"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Academy
                    </motion.a>

                    {/* Contact Button */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a
                        href="#contact"
                        className="block w-full bg-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium text-center shadow-lg hover:shadow-xl"
                      >
                        Contact Us
                      </a>
                    </motion.div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 border-t border-slate-700">
                    <div className="text-center text-slate-400 text-sm">
                      <p>Perfect Home servics</p>
                      <p className="mt-1">Creating beautiful spaces</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-1 bg-orange animate-pulse">
            <div className="h-full bg-orange animate-ping"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
