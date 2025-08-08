import Navbar from "../../../src/components/Navbar";
import ServiceBooking from "../../../src/pages/ServiceBooking";
import Footer from "../../../src/components/Footer";

interface ServicePageProps {
  params: {
    serviceType: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <ServiceBooking serviceType={params.serviceType} />
      </main>
      <Footer />
    </>
  );
}
