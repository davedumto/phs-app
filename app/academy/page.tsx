import Navbar from "../../src/components/Navbar";
import ServiceBooking from "../../src/pages/ServiceBooking";
import Footer from "../../src/components/Footer";

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <ServiceBooking serviceType="academy" />
      </main>
      <Footer />
    </>
  );
}
