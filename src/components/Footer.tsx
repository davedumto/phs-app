import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Layout - 4 Column Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Elegance Interior Logo"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transforming spaces with innovative design solutions.
              We bring your vision to life with our exceptional team.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#interiors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Design Consultation
                </a>
              </li>
              <li>
                <a
                  href="#cleaning"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cleaning Services
                </a>
              </li>
              <li>
                <a
                  href="#fumigation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fumigation Services
                </a>
              </li>
              <li>
                <a
                  href="#academy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PHS Academy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon
                  size={20}
                  className="text-orange mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  123 Design Street, Creative City, State 12345
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon
                  size={20}
                  className="text-orange mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MailIcon
                  size={20}
                  className="text-orange mr-3 flex-shrink-0"
                />
                <span className="text-gray-400">
                  contact@eleganceinterior.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Layout - Compact Design */}
        <div className="md:hidden">
          {/* Top Section with Logo and Social */}
          <div className="flex flex-col items-center mb-8">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Elegance Interior Logo"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-center mb-4 max-w-md">
              Transforming spaces with innovative design solutions since 2010.
              We bring your vision to life with our expert team.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Services and Quick Links Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange">
                Our Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#interiors"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Interior Design
                  </a>
                </li>
                <li>
                  <a
                    href="#cleaning"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Cleaning Services
                  </a>
                </li>
                <li>
                  <a
                    href="#fumigation"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Fumigation Services
                  </a>
                </li>
                <li>
                  <a
                    href="#academy"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    PHS Academy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-orange">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gray-800 pt-6 mb-6">
            <h4 className="text-lg font-semibold mb-4 text-orange text-center">
              Contact Us
            </h4>
            <div className="grid grid-cols-1 gap-4 text-center">
              <div className="flex flex-col items-center">
                <MapPinIcon size={20} className="text-orange mb-2" />
                <span className="text-gray-400 text-sm">
                  123 Design Street
                  <br />
                  Creative City, State 12345
                </span>
              </div>
              <div className="flex flex-col items-center">
                <PhoneIcon size={20} className="text-orange mb-2" />
                <span className="text-gray-400 text-sm">(123) 456-7890</span>
              </div>
              <div className="flex flex-col items-center">
                <MailIcon size={20} className="text-orange mb-2" />
                <span className="text-gray-400 text-sm">
                  contact@eleganceinterior.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Perfect Home services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
