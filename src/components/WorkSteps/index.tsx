import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "1. Select a Project",
    description:
      "Discover the ideal project that aligns with your goals and unlock the potential for transformative success. Our selection process emphasizes innovation, strategic planning, and cost-effectiveness to ensure optimal outcomes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Project Selection
      </div>
    ),
  },
  {
    title: "2. Project Analysis",
    description:
      "Gain deep insights into your project's potential through comprehensive analysis. We evaluate every aspect with precision, leveraging data-driven metrics to craft a strategy that maximizes efficiency and impact.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Project Analysis
        </div>
      ),
  },
  {
    title: "3. Execution",
    description:
      "Seamlessly transition from planning to action with our robust execution strategies. We focus on delivering high-quality results through meticulous management and innovative solutions that meet your project’s objectives.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Project Execution
      </div>
    ),
  },
  {
    title: "4. Delivery",
    description:
      "Achieve excellence with our commitment to on-time, high-quality delivery. Our approach integrates advanced metrics and cost-effective solutions to ensure your project’s successful completion and long-term success.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Project Delivery
      </div>
    ),
  },
];
export function WorkSteps() {
  return (
    <div className="mt-12 bg-gradient-to-r from-violet-50 to-fuchsia-50 pt-4 pb-20">
        <div className="text-3xl md:text-5xl font-medium dark:text-white text-center mb-16">
        Our Workflow: From <span className="font-bold text-red-700"> Vision to Reality </span>
        </div>
      <StickyScroll content={content} />
    </div>
  );
}
