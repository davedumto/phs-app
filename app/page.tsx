import Navbar from "../src/components/Navbar";
import HomePage from "../src/pages/Home";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
