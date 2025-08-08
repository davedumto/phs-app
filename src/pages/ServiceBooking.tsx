"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRightIcon,
  SparklesIcon,
  BugIcon,
  GraduationCapIcon,
  HomeIcon,
} from "lucide-react";
import CustomDropdown from "../components/CustomDropdown";

interface ServiceBookingProps {
  serviceType?: string;
}

const ServiceBooking: React.FC<ServiceBookingProps> = ({ serviceType }) => {
  const [activeTab, setActiveTab] = useState("interiors");

  // Form state for each service type
  const [interiorFormData, setInteriorFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [cleaningFormData, setCleaningFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    cleaningType: "",
    date: "",
    time: "",
    specialRequests: "",
  });

  const [fumigationFormData, setFumigationFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    pestType: "",
    propertySize: "",
    preferredDate: "",
    pestDetails: "",
  });

  const [academyFormData, setAcademyFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    level: "",
    goals: "",
    newsletter: false,
  });

  // Dropdown options
  const projectTypeOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "office", label: "Office Space" },
    { value: "hospitality", label: "Hospitality" },
    { value: "other", label: "Other" },
  ];

  const budgetOptions = [
    { value: "under5k", label: "Under ₦5,000,000" },
    { value: "5k-10k", label: "₦5,000,000 - ₦10,000,000" },
    { value: "10k-25k", label: "₦10,000,000 - ₦25,000,000" },
    { value: "25k-50k", label: "₦25,000,000 - ₦50,000,000" },
    { value: "50k+", label: "₦50,000,000+" },
  ];

  const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "1-3months", label: "1-3 months" },
    { value: "3-6months", label: "3-6 months" },
    { value: "6months+", label: "6+ months" },
  ];

  const propertyTypeOptions = [
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "office", label: "Office" },
    { value: "commercial", label: "Commercial Space" },
  ];

  const cleaningTypeOptions = [
    { value: "regular", label: "Regular Cleaning" },
    { value: "deep", label: "Deep Cleaning" },
    { value: "move", label: "Move In/Out Cleaning" },
    { value: "post", label: "Post-Construction Cleaning" },
  ];

  const timeOptions = [
    { value: "morning", label: "Morning (8am - 12pm)" },
    { value: "afternoon", label: "Afternoon (12pm - 4pm)" },
    { value: "evening", label: "Evening (4pm - 8pm)" },
  ];

  const fumigationPropertyTypeOptions = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" },
  ];

  const pestTypeOptions = [
    { value: "general", label: "General Pests" },
    { value: "termites", label: "Termites" },
    { value: "rodents", label: "Rodents" },
    { value: "bedbugs", label: "Bed Bugs" },
    { value: "cockroaches", label: "Cockroaches" },
    { value: "other", label: "Other" },
  ];

  const courseOptions = [
    { value: "intro", label: "Introduction to Interior Design" },
    { value: "color", label: "Color Theory & Application" },
    { value: "space", label: "Space Planning & Layout" },
    { value: "materials", label: "Materials & Finishes" },
    { value: "lighting", label: "Lighting Design" },
    { value: "professional", label: "Professional Practice" },
  ];

  const levelOptions = [
    { value: "beginner", label: "Beginner (No experience)" },
    { value: "intermediate", label: "Intermediate (Some knowledge)" },
    { value: "advanced", label: "Advanced (Working professional)" },
  ];

  const services = useMemo(
    () => [
      {
        id: "interiors",
        title: "Interior Design",
        icon: <HomeIcon size={20} />,
      },
      {
        id: "cleaning",
        title: "Cleaning",
        icon: <SparklesIcon size={20} />,
      },
      {
        id: "fumigation",
        title: "Fumigation",
        icon: <BugIcon size={20} />,
      },
      {
        id: "academy",
        title: "Academy",
        icon: <GraduationCapIcon size={20} />,
      },
    ],
    []
  );

  // Set active tab based on serviceType prop
  useEffect(() => {
    if (serviceType && services.some((service) => service.id === serviceType)) {
      setActiveTab(serviceType);
    }
  }, [serviceType, services]);

  // Handle form input changes
  const handleInteriorChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInteriorFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCleaningChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCleaningFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFumigationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFumigationFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcademyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAcademyFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAcademyCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAcademyFormData((prev) => ({ ...prev, newsletter: e.target.checked }));
  };

  // Handle dropdown changes
  const handleInteriorDropdownChange = (
    field: string,
    value: string | string[]
  ) => {
    const stringValue = Array.isArray(value) ? value[0] : value;
    setInteriorFormData((prev) => ({ ...prev, [field]: stringValue }));
  };

  const handleCleaningDropdownChange = (
    field: string,
    value: string | string[]
  ) => {
    const stringValue = Array.isArray(value) ? value[0] : value;
    setCleaningFormData((prev) => ({ ...prev, [field]: stringValue }));
  };

  const handleFumigationDropdownChange = (
    field: string,
    value: string | string[]
  ) => {
    const stringValue = Array.isArray(value) ? value[0] : value;
    setFumigationFormData((prev) => ({ ...prev, [field]: stringValue }));
  };

  const handleAcademyDropdownChange = (
    field: string,
    value: string | string[]
  ) => {
    const stringValue = Array.isArray(value) ? value[0] : value;
    setAcademyFormData((prev) => ({ ...prev, [field]: stringValue }));
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Book Our Services
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Select the service you're interested in and fill out the form below.
            Our team will get back to you within 24 hours.
          </p>
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-full transition-colors ${
                  activeTab === service.id
                    ? "bg-teal text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
          {/* Service Forms */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {activeTab === "interiors" && (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HomeIcon size={24} className="mr-2 text-teal" />
                  Interior Design Booking
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                        value={interiorFormData.name}
                        onChange={handleInteriorChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={interiorFormData.email}
                        onChange={handleInteriorChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={interiorFormData.phone}
                        onChange={handleInteriorChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={projectTypeOptions}
                        value={interiorFormData.projectType}
                        onChange={(value) =>
                          handleInteriorDropdownChange("projectType", value)
                        }
                        placeholder="Select project type"
                        label="Project Type"
                        variant="form"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={budgetOptions}
                        value={interiorFormData.budget}
                        onChange={(value) =>
                          handleInteriorDropdownChange("budget", value)
                        }
                        placeholder="Select budget range"
                        label="Budget Range"
                        variant="form"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={timelineOptions}
                        value={interiorFormData.timeline}
                        onChange={(value) =>
                          handleInteriorDropdownChange("timeline", value)
                        }
                        placeholder="Select timeline"
                        label="Project Timeline"
                        variant="form"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={interiorFormData.description}
                      onChange={handleInteriorChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Tell us about your project, your vision, and any specific requirements."
                    ></textarea>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-teal text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    >
                      Submit Booking Request
                      <ArrowRightIcon size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            )}
            {activeTab === "cleaning" && (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <SparklesIcon size={24} className="mr-2 text-teal" />
                  Cleaning Services Booking
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                        value={cleaningFormData.name}
                        onChange={handleCleaningChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={cleaningFormData.email}
                        onChange={handleCleaningChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={cleaningFormData.phone}
                        onChange={handleCleaningChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={propertyTypeOptions}
                        value={cleaningFormData.propertyType}
                        onChange={(value) =>
                          handleCleaningDropdownChange("propertyType", value)
                        }
                        placeholder="Select property type"
                        label="Property Type"
                        variant="form"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={cleaningTypeOptions}
                        value={cleaningFormData.cleaningType}
                        onChange={(value) =>
                          handleCleaningDropdownChange("cleaningType", value)
                        }
                        placeholder="Select cleaning type"
                        label="Cleaning Type"
                        variant="form"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={cleaningFormData.date}
                        onChange={handleCleaningChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={timeOptions}
                        value={cleaningFormData.time}
                        onChange={(value) =>
                          handleCleaningDropdownChange("time", value)
                        }
                        placeholder="Select time"
                        label="Preferred Time"
                        variant="form"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="specialRequests"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Special Requests or Instructions
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={cleaningFormData.specialRequests}
                      onChange={handleCleaningChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Any specific areas that need attention or special instructions for our team?"
                    ></textarea>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-teal text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    >
                      Book Cleaning Service
                      <ArrowRightIcon size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            )}
            {activeTab === "fumigation" && (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BugIcon size={24} className="mr-2 text-teal" />
                  Fumigation Service Booking
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                        value={fumigationFormData.name}
                        onChange={handleFumigationChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={fumigationFormData.email}
                        onChange={handleFumigationChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={fumigationFormData.phone}
                        onChange={handleFumigationChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={fumigationPropertyTypeOptions}
                        value={fumigationFormData.propertyType}
                        onChange={(value) =>
                          handleFumigationDropdownChange("propertyType", value)
                        }
                        placeholder="Select property type"
                        label="Property Type"
                        variant="form"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={pestTypeOptions}
                        value={fumigationFormData.pestType}
                        onChange={(value) =>
                          handleFumigationDropdownChange("pestType", value)
                        }
                        placeholder="Select pest type"
                        label="Pest Type"
                        variant="form"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="propertySize"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Property Size (sq ft)
                      </label>
                      <input
                        type="number"
                        id="propertySize"
                        name="propertySize"
                        value={fumigationFormData.propertySize}
                        onChange={handleFumigationChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={fumigationFormData.preferredDate}
                        onChange={handleFumigationChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="pestDetails"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Pest Problem Details
                    </label>
                    <textarea
                      id="pestDetails"
                      name="pestDetails"
                      value={fumigationFormData.pestDetails}
                      onChange={handleFumigationChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Please describe the pest problem you're experiencing and any specific areas of concern."
                    ></textarea>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-teal text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    >
                      Book Fumigation Service
                      <ArrowRightIcon size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            )}
            {activeTab === "academy" && (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCapIcon size={24} className="mr-2 text-teal" />
                  Academy Registration
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={academyFormData.firstName}
                        onChange={handleAcademyChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={academyFormData.lastName}
                        onChange={handleAcademyChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={academyFormData.email}
                        onChange={handleAcademyChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                        required
                      />
                    </div>
                    <div>
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
                        value={academyFormData.phone}
                        onChange={handleAcademyChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={courseOptions}
                        value={academyFormData.course}
                        onChange={(value) =>
                          handleAcademyDropdownChange("course", value)
                        }
                        placeholder="Select a course"
                        label="Course of Interest"
                        variant="form"
                      />
                    </div>
                    <div>
                      <CustomDropdown
                        options={levelOptions}
                        value={academyFormData.level}
                        onChange={(value) =>
                          handleAcademyDropdownChange("level", value)
                        }
                        placeholder="Select your experience level"
                        label="Experience Level"
                        variant="form"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="goals"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Learning Goals
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={academyFormData.goals}
                      onChange={handleAcademyChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="What do you hope to achieve by taking this course? Do you have any specific learning goals?"
                    ></textarea>
                  </div>
                  <div className="mt-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={academyFormData.newsletter}
                        onChange={handleAcademyCheckboxChange}
                        className="mr-2 h-4 w-4 text-teal"
                      />
                      <span className="text-gray-700">
                        Subscribe to our newsletter for updates on new courses
                        and design tips
                      </span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-teal text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    >
                      Submit Registration
                      <ArrowRightIcon size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceBooking;
