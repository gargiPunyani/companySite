import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaCogs,
  FaRobot,
} from "react-icons/fa";
import "./index.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

interface Service {
  title: string;
  description: string;
  number: string;
  icon: JSX.Element;
  redirect: string;
}

const services: Service[] = [
  {
    title: "Mobile Development",
    description:
      "Empower your business with cutting-edge mobile applications that provide seamless user experiences, optimized performance, and innovative features.",
    number: "01",
    icon: <FaCode />,
    redirect: "/services/mobile-development",
  },
  {
    title: "Software Development",
    description:
      "Delivering robust and scalable software solutions that drive efficiency, enhance productivity, and accelerate your digital transformation journey.",
    number: "02",
    icon: <FaPaintBrush />,
    redirect: "/services/software-development",
  },
  {
    title: "Web Services",
    description:
      "Crafting responsive, engaging, and high-performing websites tailored to your business needs, ensuring a strong online presence.",
    number: "03",
    icon: <FaBullhorn />,
    redirect: "/services/web-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize your reach and engagement through data-driven digital marketing strategies that boost brand visibility and drive growth.",
    number: "04",
    icon: <FaChartLine />,
    redirect: "/services/digital-marketing",
  },
  {
    title: "Software Testing",
    description:
      "Ensuring your software is reliable, secure, and free of defects with comprehensive testing services that guarantee quality and performance.",
    number: "05",
    icon: <FaCogs />,
    redirect: "/services/software-testing",
  },
  {
    title: "Web Hosting",
    description:
      "Providing reliable and secure web hosting services that ensure your website is always online, fast, and accessible to your audience.",
    number: "06",
    icon: <FaRobot />,
    redirect: "/services/web-hosting",
  },
];

const ServiceCards: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:p-6 sm:px-0">
      {services.map((service, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`relative group rounded-lg overflow-hidden shadow-lg p-4 sm:p-8 sm:px-12 service-card ${
            hoveredIndex === index ? "service-card-hovered" : ""
          }`}
          style={{
            boxShadow: `${
              theme === "dark"
                ? "0 0 30px 10px #ff020030"
                : "0 0 10px 5px #ff020010"
            }`,
          }}
        >
          <motion.div
            className={`absolute inset-0 bg-red-800 ${
              hoveredIndex === index ? "bg-wavy-pattern" : "bg-wavy-pattern"
            }`}
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={
              hoveredIndex === index
                ? { clipPath: "circle(150% at 100% 0%)" }
                : { clipPath: "circle(15% at 100% 0%)" }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <div className="flex justify-between flex-col gap-8 items-left relative">
              <div
                className={`text-4xl py-4 rounded-full p-4 flex items-center justify-center w-16 h-16 service-icon ${
                  hoveredIndex === index
                    ? "bg-white text-red-800"
                    : "bg-red-800 text-white"
                }`}
              >
                {service.icon}
              </div>
              <div className="text-white flex flex-col gap-4 text-left service-text ">
                <h3 className="text-lg sm:text-2xl font-bold text-black dark:text-gray-200 service-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm sm:text-lg text-gray-600 dark:text-gray-200 service-text">
                  {service.description}
                </p>
              </div>
              <div
                style={{ position: "absolute", right: "0px", top: "-70px" }}
                className="text-[140px] text-red-700 opacity-10 dark:opacity-50 font-bold"
              >
                {service.number}
              </div>
            </div>
            <Link to={service.redirect} target="_blank">
              <motion.button
                className="mt-4 px-4 py-2 text-xs sm:text-sm bg-white dark:bg-red-800 text-red-800 dark:text-white font-bold rounded shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                READ MORE <FaArrowRightLong />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
