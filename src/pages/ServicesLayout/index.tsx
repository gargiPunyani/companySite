import { CommonIconCloud } from "@/common/CommonIconCloud";
import { ContactDrawer } from "@/common/ContactDrawer";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { features, services } from "@/constants/servicesConstant";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import serviceImage from "../../../public/services_image.webp";
import "./index.css";

const ServicesLayout = () => {
  const { service } = useParams();
  const {theme} = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const serviceContent =
    services.find(
      (s) => s.title.toLowerCase().replace(/\s+/g, "-") === service
    ) || services[0];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black">
      <div className={`${theme === 'light' ? "bg-[url('/bg-gradiant.jpg')] bg-cover" : "bg-[url('/dark-red1.webp')] bg-cover "} flex flex-col sm:flex-row items-center px-4 sm:px-60 py-16 pt-28 sm:pt-36 sm:gap-16 bg-dark-red`}>
        <div className="flex-1 text-center">
          <motion.h1
            className="text-2xl sm:text-4xl font-bold dark:text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Unlock the Power of <br />
            <span className="text-red-700 text-3xl sm:text-6xl">
              {" "}
              {serviceContent.title}{" "}
            </span>{" "}
            <br />
            <span className="text-2xl font-normal">with Our Expertise</span>
          </motion.h1>
          <motion.p
            className="text-sm text-gray-700 sm:text-lg mb-4 mt-8 dark:text-gray-200"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Welcome to Maya Web Tech, your trusted partner for comprehensive{" "}
            {serviceContent.title} services. With our {serviceContent.title}{" "}
            expertise, we empower you to harness the full potential of this
            versatile platform to create stunning websites that captivate your
            audience and drive results.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
            <motion.button
              className="w-40 h-10 rounded-xl bg-red-700 border  border-transparent text-white text-sm"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => setOpenDrawer(true)}
            >
              Get Started
            </motion.button>
            <Link to={"/contact-us"}>
              <motion.button
                className="w-40 h-10 rounded-xl bg-white dark:font-semibold text-red-700 border border-red-700  text-sm"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <CommonIconCloud title={serviceContent.title} icons={serviceContent.slugs} />

      <div className="px-4 sm:px-28 py-16 ">
        <h2 className="text-3xl sm:text-5xl font-bold mb-12 dark:text-gray-200 ">Key Features</h2>
        <div className="flex flex-col gap-20">
          {serviceContent?.keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`serviceKeyFeatures gap-10 text-left items-center justify-between`}
              initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex flex-col gap-3 sm:w-7/12">
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 dark:text-red-500 sm:mb-2">
                  {feature.title}
                </h3>
                <h3 className="text-4xl font-semibold dark:text-gray-200 sm:font-extrabold mb-2">
                  {feature.subtitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-100 sm:text-xl sm:w-9/12">
                  {feature.description}
                </p>
              </motion.div>
              <div className="sm:w-5/12 min-h-96 flex items-center">
                <img
                  className=""
                  src={feature?.url || serviceImage}
                  alt="serviceImage"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div className="px-4 sm:px-28 py-16">
        <h1 className="font-semibold dark:text-gray-100">
          WHY CHOOSE{" "}
          <span className="font-bold text-red-700 dark:text-red-600"> MAYAWEBTECH</span>
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold sm:font-semibold mt-3 mb-6 dark:text-gray-300">
          A smarter way to outsource your designs
        </h2>
        <h3 className="sm:text-2xl text-gray-600 dark:text-gray-200 mb-4 sm:mb-6">
          {" "}
          is an all-in-one creative service. For a flat and affordable monthly
          price you get access to a team of talented designers who can help with
          all your design projects.
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <HoverEffect items={projects} />
        </motion.div>
      </motion.div>

      <div className={`${theme === 'light' ? "bg-[url('/low_light_theme.png')] bg-cover" : "bg-black"} flex flex-col md:flex-row md:items-center md:justify-between sm:text-left py-12 px-4 sm:px-28  `}>
        <motion.div className="md:w-5/12">
          <h3 className="text-red-700 dark:text-red-500 font-bold text-sm uppercase mb-4">
            Make your website standout
          </h3>
          <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-200  mb-6">
            Your business deserves an awesome website
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-200 mb-8">
            Attract, engage, and convert potential clients with a professionally
            designed website or landing page.
          </p>
          <Link to={"/contact-us"}>
            <button
              style={{ border: "1px solid" }}
              className="bg-white text-red-700 dark:text-white dark:bg-red-700 border-red-700 font-bold px-6 py-3 hover:bg-red-700 hover:text-white dark:hover:bg-white dark:hover:text-red-700 rounded-lg transition duration-300"
            >
              Contact Us Now
            </button>
          </Link>
        </motion.div>
        <div className="md:w-1/2 mt-12 md:mt-0 md:pl-1 space-y-8 text-left">
          {features.map((feature, index) => (
            <motion.div
              className="flex items-start gap-2 sm:gap-6"
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-red-700 dark:text-red-600 text-5xl mr-4">
                {<feature.icon />}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-200  mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 ">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col sm:flex-row-reverse w-full gap-4 sm:gap-10 text-left items-center mt-4 sm:mt-32 justify-between px-4 sm:px-28`}
      >
        <div className="sm:w-5/12 flex flex-col gap-3 sm:gap-6">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700 dark:text-red-600  sm:mb-2">
            Don’t Overpay for {serviceContent.title}
          </h3>
          <h3 className="text-5xl font-semibold sm:font-extrabold mb-2 dark:text-gray-200 ">
            {serviceContent.title} is included in all our plans
          </h3>
          <p className="text-gray-600 sm:text-xl dark:text-gray-200 ">
            All plans include unlimited requests, unlimited revisions, and
            source files. All plans include unlimited requests, unlimited
            revisions, and source files.
          </p>
          <Link
            to={"/contact-us"}
            className="bg-white dark:bg-red-700 text-red-700 dark:text-gray-200 border-red-700 font-bold px-6 py-3 hover:bg-red-700 dark:hover:bg-red-900 hover:text-white rounded-lg transition duration-300 text-center"
            style={{ border: "1px solid" }}
          >
            Contact Us Now
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scaleX: 2, scaleY: 2, x: -200 }}
          whileInView={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <img className="" width={600} src={"/ourWork.png"} alt="serviceImage" loading="lazy" />
        </motion.div>
      </div>
      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </div>
  );
};

export default ServicesLayout;

export const projects = [
  {
    title: "STRESS LESS",
    description:
      "Crafting visually appealing, responsive websites that deliver seamless user experiences and align with your brand identity.",
    subtitle: "4.8",
  },
  {
    title: "SHIP FASTER",
    description:
      "Developing high-performance, scalable web applications tailored to meet your business needs and enhance user engagement.",
    subtitle: "24h",
  },
  {
    title: "CUT COSTS",
    description:
      "Building innovative software solutions that streamline operations, improve productivity, and drive business growth.",
    subtitle: "50%",
  },
];
