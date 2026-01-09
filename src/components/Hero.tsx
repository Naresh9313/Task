import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white pt-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Convert More Leads with AI-Powered WhatsApp Sales
        </h1>


        <h1 className="text-6xl text-red-500 font-bold"></h1>


        <p className="mt-6 text-lg opacity-90">
          SellSharp automates conversations, follows up leads, and helps your
          sales team close faster — 24/7.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold
transition-all duration-300 hover:scale-105 hover:shadow-lg"
>
            Get Started Free
          </button>
          <button className="border border-white px-6 py-3 rounded-lg">
            Book a Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
