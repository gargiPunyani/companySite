import ServiceCards from "@/common/ServiceCards";
import LetsTalkFooter from "@/components/LetsTalkFooter";
import { MovingCards } from "@/components/MovingCards";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import "./index.css";

export function HighlightHero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto sm:px-28 py-20"
      >
        <div className="text-2xl sm:text-8xl mb-8">Our Services</div>
        Transformative Solutions for Your Success: <br />
        <Highlight className="text-black dark:text-white">
          Discover Our Core Offerings
        </Highlight>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
      </motion.h1>
    </HeroHighlight>
  );
}

const ServicesPage: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <section className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <HighlightHero />
      </section>
      <div className="allItemsCircle relative flex flex-col items-center justify-center bg-cover bg-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A workplace focused on experience and enabling teams to work
            together better
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6 dark:text-gray-200"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            How we work is changing, and businesses must find new and better
            ways to communicate.
          </motion.p>
          <Link to={"/contact-us"}>
            <motion.button
              className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
      <section className="py-16 sm:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-28">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Our Expertise, Your Growth
          </h2>
          <div>
            <ServiceCards />
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center bg-gradient-to-b from-purple-50 dark:bg-gradient-to-r dark:from-black dark:to-black px-2 sm:px-28 py-8">
        <div className="flex flex-wrap max-w-screen-xl mx-auto">
          <motion.div
            className="w-full sm:w-1/2 py-2 sm:pr-2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col bg-orange-100 dark:bg-orange-700 p-6 rounded-lg shadow-md h-full relative overflow-hidden">
              <div className="sm:w-4/5 p-4 z-10 text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  Utilize your software data
                </h3>
                <p className="text-gray-600 mt-2 dark:text-gray-200">
                  Progressively reinvent models and niche revolutionary benefits
                  for integrated niches.
                </p>
                <Link to={"/contact-us"}>
                  <button className="mt-4 bg-red-700 dark:bg-red-900 text-white py-2 px-4 rounded hover:bg-red-800">
                    Start For Free
                  </button>
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-2/5">
                <img
                  src="/apps_software.svg"
                  alt="Data visualization"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full sm:w-1/2 py-2 sm:pl-2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col bg-blue-100 dark:bg-blue-700 p-6 rounded-lg shadow-md h-full relative overflow-hidden">
              <div className="sm:w-4/5 p-4 z-10 text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  Get real time updated anytime
                </h3>
                <p className="text-gray-600 mt-2 dark:text-gray-200">
                  Progressively reinvent models and niche revolutionary benefits
                  for integrated niches.
                </p>
                <Link to={"/contact-us"}>
                  <button className="mt-4 bg-red-700 dark:bg-blue-900 text-white py-2 px-4 rounded hover:bg-red-800">
                    Start For Free
                  </button>
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 w-2/5">
                <img
                  src="/updated.svg"
                  alt="Real-time updates"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <MovingCards />

      <LetsTalkFooter />
    </div>
  );
};

export default ServicesPage;
