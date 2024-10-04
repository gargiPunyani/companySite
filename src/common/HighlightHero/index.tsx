import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import Vision from "@/components/Vision";

function HighlightHero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center mx-auto px-4 sm:px-28 "
      >
        Purpose-Driven Progress: <br />
        <Highlight className="text-black dark:text-white">
          Our Mission, Vision, and Values
        </Highlight>
        <motion.div
        >
          <Vision />
        </motion.div>
      </motion.h1>
    </HeroHighlight>
  );
}

export default HighlightHero;