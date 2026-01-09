import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main sections with smooth animations */}
      <main className="space-y-24 mt-16">
        <section className="animate-fadeIn">
          <Hero />
        </section>

        <section className="animate-slideUp delay-150">
          <Features />
        </section>

        <section className="animate-slideUp delay-300">
          <UseCases />
        </section>

        <section className="animate-slideUp delay-450">
          <Testimonials />
        </section>

        <section className="animate-fadeIn delay-600">
          <CTA />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
