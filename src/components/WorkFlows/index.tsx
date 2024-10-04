import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import React from "react";
import "./index.css";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Select a project",
    description:
      "Discover the ideal project that aligns with your goals and unlock the potential for transformative success. Our selection process emphasizes innovation, strategic planning, and cost-effectiveness to ensure optimal outcomes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="10em" width="7em">
        <path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z" />
        <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm8.933 3.519l-1.726-1.726-1.414 1.414 3.274 3.274 5.702-6.84-1.538-1.282z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Project analysis",
    description:
      "Gain deep insights into your project's potential through comprehensive analysis. We evaluate every aspect with precision, leveraging data-driven metrics to craft a strategy that maximizes efficiency and impact.",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="10em"
        width="7em"
      >
        <path d="M12 4.5a2.5 2.5 0 00-4.96-.46 2.5 2.5 0 00-1.98 3 2.5 2.5 0 00-1.32 4.24 3 3 0 00.34 5.58 2.5 2.5 0 002.96 3.08 2.5 2.5 0 004.91.05L12 20V4.5zM16 8V5c0-1.1.9-2 2-2M12 13h4" />
        <path d="M12 18h6a2 2 0 012 2v1M12 8h8M20.5 8a.5.5 0 11-1 0 .5.5 0 011 0zM16.5 13a.5.5 0 11-1 0 .5.5 0 011 0z" />
        <path d="M20.5 21a.5.5 0 11-1 0 .5.5 0 011 0zM18.5 3a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Plan Execute",
    description:
      "Seamlessly transition from planning to action with our robust execution strategies. We focus on delivering high-quality results through meticulous management and innovative solutions that meet your project’s objectives.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" height="10em" width="7em">
        <path d="M23.235 6.825v11.997a.924.924 0 01-.419.725l-.393.235c-1.961 1.135-3.687 2.134-5.431 3.14V9.948L5.759 3.454C7.703 2.338 9.64 1.211 11.586.1a.927.927 0 01.837 0l10.81 6.243v.482zm-8.741 4.562A9631.706 9631.706 0 006.8 6.943a.94.94 0 00-.837 0c-1.733 1.001-3.467 2-5.199 3.004l8.113 4.684V24c1.732-.999 3.46-2.006 5.197-2.995a.927.927 0 00.419-.724zM.765 19.317l5.613 3.241V16.07z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Deliver result",
    description:
      "Achieve excellence with our commitment to on-time, high-quality delivery. Our approach integrates advanced metrics and cost-effective solutions to ensure your project’s successful completion and long-term success.",
    icon: (
      <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="10em"
        width="7em"
      >
        <defs>
          <style />
        </defs>
        <path d="M632 698.3l141.9-112c4.1-3.2 4.1-9.4 0-12.6L632 461.7c-5.3-4.2-13-.4-13 6.3v76H295c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h324v76c0 6.7 7.8 10.4 13 6.3zm261.3-405L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v278c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V422c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-83.5c0-17-6.7-33.2-18.7-45.2zM640 288H384V184h256v104zm264 436h-56c-4.4 0-8 3.6-8 8v108H184V732c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v148c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V732c0-4.4-3.6-8-8-8z" />
      </svg>
    ),
  },
];

export const WorkFlows: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="py-12 sm:px-28 bg-white dark:bg-black">
      <div className="text-3xl md:text-6xl font-semibold dark:text-white text-center mb-16 sm:mb-28">
        Our Workflow
        <div className="text-xl mt-4 md:text-xl">
          From{" "}
          <span className="font-semibold text-red-700">
            {" "}
            Vision to Reality{" "}
          </span>{" "}
          in just 4-steps.
        </div>
      </div>
      <div className="relative flex flex-col items-center space-y-12">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`flex px-4 sm:w-full ${
                isEven ? "justify-start" : "justify-end"
              } z-[9]`}
              initial={{ opacity: 0, y: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="flex sm:w-1/2  items-center mb-16 rounded-xl"
                style={{
                  zIndex: "9",
                  boxShadow: ` ${
                    theme === "light"
                      ? "0 0 30px 0 #ff007220"
                      : "0 0 100px 20px #ff007250"
                  }`,
                }}
              >
                <div
                  className={`text-left bg-white dark:bg-[url('/dark-red.jpg')] dark:bg-cover p-6 rounded-xl`}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-700">
                      <span className="text-xl font-bold text-red-700 dark:text-gray-100">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center mb-4 relative">
                    <div
                      className="absolute top-[-100px] right-10"
                      style={{ color: `${theme === 'light' ? 'rgb(206 0 0 / 5%)' : 'rgb(206 0 0 / 35%)'}` }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-100 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 300"
          className="absolute bottom-10 left-0 w-full h-full pointer-events-none svgPathSteps"
        >
          <path
            d="M50 70 C50 100, 150 100, 150 130 S 150 200, 50 200 L50 250 C50 270 150 270 150 290"
            stroke="#db2777"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      </div>
    </div>
  );
};
