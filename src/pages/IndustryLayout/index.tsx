import LetsTalkFooter from "@/components/LetsTalkFooter";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { industryData } from "@/constants/industry";
import { motion } from "framer-motion";
import { useId } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

const IndustryLayout = () => {
  const { industry } = useParams();
  const industryContent =
    industryData[industry as keyof typeof industryData] ||
    industryData["healthcare"];

  return (
    <div className="industrySec min-h-screen">
      <div className="mx-auto">
        <div className="relative mb-12 text-center h-[450px] sm:h-[500px] pt-40 bg-[url('/bg1.webp')] bg-cover dark:bg-[url('/dark-red1.webp')] dark:bg-cover ">
          <motion.h1
            className="absolute show-title text-6xl sm:text-[180px] z-[-9]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {industryContent.title}
          </motion.h1>
          <motion.h1
            className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4 "
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {industryContent.title}
          </motion.h1>
          <motion.h2
            className="text-xl font-semibold text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {industryContent.heading}
          </motion.h2>
          <motion.div
            className="flex justify-center gap-16 mt-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Link to={"/contact-us"}>Book Demo</Link>
            </HoverBorderGradient>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Link to={"/"}>Back to Home</Link>
            </HoverBorderGradient>
          </motion.div>
        </div>

        <div className="space-y-4 text-center mb-40 px-4 sm:px-28">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Trusted {industryContent.title} partner
          </h2>
          <h3 className="text-xl font-semibold">
            Your one stop solution for all
          </h3>
          <p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {industryContent.description}
          </p>
        </div>
        <div className="text-xl sm:text-5xl mb-12">Key Features</div>
        <div className="bg-[url('/long-png-img.png')] bg-cover dark:bg-gradient-to-t dark:from-black dark:via-red-950 dark:to-black  space-y-20 sm:space-y-48 px-4 sm:px-28">
          {industryContent.offerings.map((offering: any, index: number) => (
            <motion.div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } items-center gap-8 flex-col sm:flex-row `}
              initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <div className="mx-4 px-4 py-2 rounded-sm font-bold text-white bg-red-700 sm:w-3/12 ">
                  Feature {index + 1}
                </div>
                <div className="p-4">
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-2 text-left">
                    {offering.title}
                  </h3>
                  <p className="text-lg text-gray-600 text-left dark:text-gray-300">
                    {offering.description}
                  </p>
                </div>
              </div>

              <div
                className="flex-1"
                style={{
                  display: "flex",
                  justifyContent: `${(index + 1) % 2 === 0 ? "left" : "right"}`,
                }}
              >
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-96 h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-[url('/tw-bg-vibrant.png')] bg-cover dark:bg-[url('/dark-red2.webp')]">
          <div className="mt-36 text-2xl sm:text-5xl font-semibold mb-4 sm:mb-8 px-4 sm:px-28 pt-20">
            Why to choose <span className="text-red-700">Maya Web Tech </span>{" "}
          </div>
          <div className="text-lg sm:text-xl px-4 sm:px-28">
            Our team of experts possesses extensive knowledge and experience in
            the this industry, ensuring that the solutions are tailored to
            address your unique needs.
          </div>
          <div className="py-20 lg:py-20 px-4 sm:px-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 max-w-7xl mx-auto">
              {grid.map((feature, ind) => (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: ind * 0.2 }}
                  viewport={{ once: true }}
                  key={ind}
                  className="relative bg-gradient-to-r dark:from-neutral-900 from-neutral-50 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
                >
                  <Grid size={15} />
                  <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                    {feature.title}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <LetsTalkFooter />
      </div>
    </div>
  );
};

export default IndustryLayout;

const grid = [
  {
    title: "Innovation",
    description:
      "We deliver cutting-edge solutions and integrate the latest trends in web design and digital marketing to keep your business ahead of the curve.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Our commitment is to exceed client expectations by providing high-quality services and ensuring complete satisfaction with every project we undertake.",
  },
  {
    title: "Experience",
    description:
      "With years of industry experience, our team effectively applies proven strategies to drive growth and deliver exceptional results for your business.",
  },
  {
    title: "Results-Driven",
    description:
      "We focus on data-driven approaches to achieve measurable and impactful results, helping your business thrive in a competitive digital landscape.",
  },
  {
    title: "Quality",
    description:
      "We adhere to the highest quality standards in all our services, ensuring excellence and reliability in every aspect of web design and digital marketing.",
  },
  {
    title: "Personalization",
    description:
      "Our solutions are carefully tailored to fit the unique needs and goals of each client, providing a customized approach for optimal results and satisfaction.",
  },
  {
    title: "Time Management",
    description:
      "We prioritize effective time management to deliver projects on schedule, ensuring that all work is completed promptly without compromising quality or detail.",
  },
  {
    title: "Professionalism",
    description:
      "Our team demonstrates professionalism in every interaction, maintaining a high standard of service and ensuring smooth, efficient, and respectful client communications.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, index: number) => (
            <rect
              strokeWidth="0"
              key={index}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
