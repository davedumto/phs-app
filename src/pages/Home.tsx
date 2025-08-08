import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import FeaturedWorks from "../components/FeaturedWorks";
import TestimonialsSection from "../components/TestimonialsSection";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import BookingForm from "../components/BookingForm";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedWorks />
      <TestimonialsSection />
      <FAQ />
      <Newsletter />
      <BookingForm />
    </>
  );
};
export default HomePage;
