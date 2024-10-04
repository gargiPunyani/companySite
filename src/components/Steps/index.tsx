import { EvervaultCardDemo } from "@/common/HoverCard";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Cover } from "../ui/cover";
import "./index.css";

const Steps = () => {
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { inView: cardsInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (titleInView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.2 },
      });
    }
  }, [titleControls, titleInView]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.2 },
      });
    }
  }, [cardsControls, cardsInView]);

  return (
    <div>
      <div className="sm:py-10 max-w-5xl mx-auto my-24 mt-0 ">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleControls}
          className="mb-10"
        >
          <h1 className="titleSteps text-4xl md:text-4xl lg:text-5xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Our Working Process in just <br /> <Cover>Three - Steps</Cover>
          </h1>
        </motion.div>

        <motion.div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <EvervaultCardDemo
                title={"Design"}
                insideContent={"We Design"}
                description={
                  "Our team designs visually appealing, user-friendly websites tailored to your brand, ensuring an engaging and impactful online presence."
                }
                tagText={"Step 1"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <EvervaultCardDemo
                title={"Development"}
                insideContent={"We Develop"}
                description={
                  "We develop high-performance, scalable websites with clean code, optimizing for speed and user experience across all devices."
                }
                tagText={"Step 2"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {" "}
              <EvervaultCardDemo
                title={"Marketing"}
                insideContent={"We Do Marketing"}
                description={
                  "We implement strategic marketing campaigns that enhance your brand visibility, driving traffic and conversions to achieve your business goals."
                }
                tagText={"Step 3"}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;
