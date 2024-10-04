import { motion } from "framer-motion";

const logos = [
  "/Fincafe.png",
  "/dcp.png",
  "/rooh.png",
  "/webwise.png",
  "/ladder.png",
  "/chagan.png",
  "/lekhaJokhaPng.png",
];

const CompaniesServed = () => {
  return (
    <div className="relative bottom-32 sm:bottom-24">
      <h2 className="mb-10 sm:mb-5 text-xl text-center sm:text-3xl font-normal dark:text-white text-black">
        Brands trust the expertise of{" "}
        <span className="font-medium text-red-700"> Maya Web Tech</span>
      </h2>
      <div className="flex w-4/5 backdrop-blur-lg justify-center mx-auto rounded-lg bg-transparent dark:bg-gray-400/50 border-2 border-gray-300/20 shadow-lg py-4 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-none h-24"
            >
              <img
                loading="lazy"
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mix-blend-overlay w-24 sm:w-32 h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompaniesServed;
