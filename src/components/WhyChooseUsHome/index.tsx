import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import {
  IconAward,
  IconBulb,
  IconChartLine,
  IconDiamond,
  IconHeadset,
  IconSettings,
  IconShieldCheck,
  IconThumbUp,
} from "@tabler/icons-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";

const WhyChooseUsHome = () => {
  const { theme } = useTheme();
  const features = [
    {
      title: "Innovation",
      description: "Delivering innovative solutions for your digital needs.",
      icon: <IconBulb />,
    },
    {
      title: "Customer Satisfaction",
      description: "Ensuring satisfaction by meeting customer expectations.",
      icon: <IconThumbUp />,
    },
    {
      title: "Experience",
      description: "Years of experience driving growth and quality service.",
      icon: <IconAward />,
    },
    {
      title: "Results",
      description: "Focused on achieving measurable results for your business.",
      icon: <IconChartLine />,
    },
    {
      title: "Quality",
      description: "Commitment to high-quality standards in every project.",
      icon: <IconShieldCheck />,
    },
    {
      title: "End-to-End Services",
      description:
        "Providing comprehensive web and digital marketing services.",
      icon: <IconSettings />,
    },
    {
      title: "Dedicated Support",
      description: "Offering 24/7 support to ensure your success.",
      icon: <IconHeadset />,
    },
    {
      title: "Crafting Excellence",
      description:
        "Creating digital excellence for your brand’s online success.",
      icon: <IconDiamond />,
    },
  ];

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-[url('/bg-gradiant.jpg')] bg-cover "
          : "dark:bg-gray-900"
      } px-4 sm:px-28 pt-12`}
    >
      <div className="text-3xl md:text-6xl font-semibold dark:text-white text-center">
        Why <span className="text-red-700">Choose Us?</span>
        <div className="text-lg font-light sm:font-medium sm:text-3xl mt-8">
          We Provide IT Services with Excellence
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsHome;

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.1 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-red-700 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 sm:max-w-xs relative z-10 px-10">
        {description}
      </p>
    </motion.div>
  );
};
