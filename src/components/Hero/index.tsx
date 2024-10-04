import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import { FlipWords } from "../ui/flip-words";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import "./index.css";
import { Badge } from "../ui/badge";
import { ContactDrawer } from "@/common/ContactDrawer";
import { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const words = ["Websites", "Apps", "SEO", "Marketing"];
  const wordsTypeWriter = [
    {
      text: "Build",
    },
    {
      text: "with",
    },
    {
      text: "Maya Web Tech.",
      className: "text-red-700 dark:text-red-700",
    },
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: -80 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center sm:justify-center px-4"
      >
        <div className="leadingTechHero">
          <Badge className="px-8 py-2" variant="secondary">
            Leading Tech
          </Badge>
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Your One-Stop Solution
          <br />
          <div className="font-medium mt-2">
            <FlipWords words={words} />
          </div>
        </div>
        <div className="">
          <TypewriterEffectSmooth
            className="hidden sm:flex lg:text-sm lg:font-medium md:text-2xl md:font-medium"
            words={wordsTypeWriter}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button
            className="w-40 h-10 rounded-xl bg-red-700 border dark:border-black border-transparent text-white text-sm"
            onClick={() => setOpenDrawer(true)}
          >
            Get Started
          </button>
          <Link to={"/contact-us"}>
          <button className="w-40 h-10 rounded-xl bg-white dark:bg-transparent text-red-700 dark:text-red-500 border border-red-700 dark:font-semibold  text-sm">
            Contact Us
          </button>
          </Link>
        </div>
      </motion.div>
      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </AuroraBackground>
  );
}

export default Hero;