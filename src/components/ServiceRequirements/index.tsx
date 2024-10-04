import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HoverEffect } from "../ui/card-hover-effect";
import { Button } from "../ui/moving-border";
import './index.css';

function ServiceRequirements() {
  const {theme} = useTheme()
  return (
    <div className={`${theme === 'light' ? "bg-[url('/bg-gradiant.jpg')] bg-cover" : 'bg-black'} py-12 pt-16 px-4 sm:px-28`}>
      <div className="text-3xl md:text-5xl font-medium dark:text-white text-center mb-12">
        One-Stop Destination for All Your{" "}
        <span className=" font-bold text-red-700"> Businesses </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <HoverEffect items={projects} />
      </motion.div>
      <Link to={"/contact-us"}>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:shadow-lg"
          containerClassName="mb-6"
        >
          Share Your Requirements
        </Button>
      </Link>
    </div>
  );
}

export default ServiceRequirements;

export const projects = [
  {
    title: "Web Design",
    description:
      "Crafting visually appealing, responsive websites that deliver seamless user experiences and align with your brand identity.",
  },
  {
    title: "Web Development",
    description:
      "Developing high-performance, scalable web applications tailored to meet your business needs and enhance user engagement.",
  },
  {
    title: "Software Developement",
    description:
      "Building innovative software solutions that streamline operations, improve productivity, and drive business growth.",
  },
  {
    title: "Digital Marketing",
    description:
      "Creating targeted digital marketing strategies that boost brand visibility and drive customer engagement across online platforms.",
  },
  {
    title: "Fintech",
    description:
      "Developing secure, user-friendly fintech solutions to streamline financial transactions and enhance customer experience.",
  },
  {
    title: "Dashboard",
    description:
      "Designing comprehensive dashboards that offer real-time insights, empowering businesses to make data-driven decisions effectively.",
  },
];
