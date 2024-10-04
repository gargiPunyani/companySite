import { ContactDrawer } from "@/common/ContactDrawer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBuilding, FaBullhorn, FaLaptop, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WobbleCard } from "../../components/ui/wobble-card";
import OurTeam from "../OurTeams";
import "./index.css";

const AboutUs = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const services = [
    {
      icon: <FaBuilding className="text-purple-500 text-3xl" />,
      title: "Innovative Solutions",
      description:
        "We offer cutting-edge solutions that revolutionize your business operations.",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FaLaptop className="text-yellow-500 text-3xl" />,
      title: "Comprehensive Services",
      description:
        "A complete suite of services tailored to meet all your business needs.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaBullhorn className="text-blue-500 text-3xl" />,
      title: "Client-Centric Approach",
      description:
        "Our strategies are designed with a strong focus on client satisfaction and success.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaLeaf className="text-green-500 text-3xl" />,
      title: "Proven Track Record",
      description:
        "We have a history of delivering successful outcomes for our clients.",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-20">
      <div className="heroAboutSection relative flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 min-h-screen overflow-hidden pt-28 sm:pt-8">
        <img
          src="/about_blob.svg"
          className="absolute right-[-300px] top-0 h-full max-w-none object-cover transform "
          height={1100}
          width={1100}
          alt="Decorative Blob"
          loading="lazy"
        />
        <motion.div
          className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full sm:w-6/12"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl lg:text-5xl text-red-800 mb-4 sm:mb-8 dark:text-red-600">
            We’re Your Digital Technological Partner
          </h1>
          <p className="text-gray-500 dark:text-gray-200 mb-6 sm:text-xl">
            Since 2023, we’ve been helping businesses like yours accelerate
            their journey to success, backed by the right transformative
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-red-700 text-white py-2 px-6 rounded-full hover:bg-red-800 transition"
              onClick={() => setOpenDrawer(true)}
            >
              Get Started
            </button>
            <Link to={"/contact-us"}>
              <button className="text-red-700 dark:text-red-500 py-2 px-6 rounded-full border-[1px] border-red-700 dark:border-red-500 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="relative z-10 mt-8 lg:mt-0">
          <img
            src="/about-hero.png"
            alt="Business Illustration"
            className="w-full max-w-md"
            loading="lazy"
          />
        </div>
      </div>

      <section className="bg-[url('/light-pink.jpg')] bg-no-repeat bg-cover dark:bg-[url('/dark-red.jpg')] w-full py-12 md:py-24 lg:py-32 sm:px-16 text-left">
        <div className="container px-4 md:px-6">
          <div className="sm:grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About <span className="text-red-700"> Maya Web Tech</span>
                </h2>
                <p className=" text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Maya Web Tech Software is a leading provider of innovative
                  software solutions. Our mission is to empower businesses of
                  all sizes with cutting-edge technology that drives efficiency,
                  productivity, and growth.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are guided by a set of core values that shape our approach
                  to every project: innovation, integrity, and
                  customer-centricity. Our team of passionate experts is
                  dedicated to delivering exceptional results and building
                  long-lasting partnerships with our clients.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 ">
                  <Link to={"/contact-us"}>
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src="/about-team.svg"
              alt="Contact Us"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="allItemsCircle relative flex flex-col items-center justify-center bg-cover bg-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-300 mb-4 capitalize"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A workplace focused on experience and enabling teams to work
            together better
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6 dark:text-gray-200"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How we work is changing, and businesses must find new and better
            ways to communicate.
          </motion.p>
          <motion.button
            className="bg-red-700 text-white py-2 px-6 rounded-lg hover:bg-red-800 transition"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => setOpenDrawer(true)}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <div className="whyChooseUsCards">
        <div className="flex flex-col px-4 sm:px-28">
          <p className="text-red-700 dark:text-red-500 text-xs sm:text-lg">
            Your Trusted Partner in Digital World{" "}
          </p>
          <h1 className="text-xl sm:text-5xl mt-2 font-bold">Why choose us?</h1>
        </div>
        <div className="container mx-auto py-10 px-4 sm:px-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: index * 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
                key={index}
                className="whyChooseUsCardItems bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center border  hover:translate-y-[-10px] hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${service.bgColor} mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <OurTeam />

      <div className="ourExpertiseAbout bg-[url('/card_overlay.png')] dark:bg-[url('/dark-red2.webp')]">
        <div className="flex flex-col px-4 sm:px-28 pt-16 py-8 sm:py-16">
          <p className="text-red-700 dark:text-red-500 text-xs sm:text-lg">
            Elevating Standards Through Expert Craftsmanship
          </p>
          <h1 className="text-3xl sm:text-5xl mt-2 font-bold">Our Expertise</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 sm:px-28">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Design Excellence
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                We create visually stunning websites with a focus on
                user-centric design and functionality.
              </p>
            </div>
            <img
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              loading="lazy"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Technical Mastery
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              We build robust, scalable solutions using the latest technologies
              and best practices.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Strategic Insight
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                We use data-driven strategies to enhance your digital presence
                and achieve measurable results.
              </p>
            </div>
            <img
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
              loading="lazy"
            />
          </WobbleCard>
        </div>
      </div>

      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </div>
  );
};

export default AboutUs;
