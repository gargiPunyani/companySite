import { ContactDrawer } from "@/common/ContactDrawer";
import ContactUsForm from "@/common/ContactForm";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ContactUs = () => {
  const {theme} = useTheme()
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="contactUsMainContainer flex flex-col min-h-[100dvh] ">
      <main className="flex-1">
        {/* Hero section  */}
        <section className="heroSectionContactUs w-full py-28 md:py-24 lg:py-16 pb-8 sm:px-8">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  We're Here to Help
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team is dedicated to providing you with the best possible
                  experience. Whether you have a question, need assistance, or
                  want to explore a partnership, we're here to help.
                </p>
                <Button
                  onClick={() => setOpenDrawer(true)}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200"
                >
                  Get in Touch
                </Button>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                src="/Contact us.svg"
                width="550"
                height="310"
                alt="Contact Us"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Location section */}
        <section className="w-full py-12 md:py-24 lg:py-32 px-2 sm:px-16 ">
          <div className="container px-4 md:px-6">
            <div className="flex sm:grid gap-6 flex-col-reverse lg:grid-cols-2 lg:gap-16 items-center">
              <motion.iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169.0724326238418!2d77.31212023395004!3d28.585454016360714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82bb1073c98eb55b%3A0x8ce0dbaa63119ed7!2sMaya%20Web%20Tech!5e1!3m2!1sen!2sin!4v1724740552341!5m2!1sen!2sin"
                className="sm:mx-auto sm:aspect-[3/2] overflow-hidden rounded-xl object-cover object-center w-full h-[300px] sm:h-full"
                loading="lazy"
                initial={{ opacity: 0, scaleX: 0.9, scaleY: 0.9 }}
                whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <motion.div className="space-y-4 text-left ">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Visit Our Office
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our office is located in strategic locations around the world,
                  making it easy for you to connect with us. Find the nearest
                  office and schedule a visit.
                </p>
                <Link
                  to="https://maps.app.goo.gl/SpDLMcd91Xzaxha1A"
                  target="_blank"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200"
                >
                  Open Google Map
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support section  */}
        <section className={`${theme === 'light' ? "supportSection247" : "bg-[url('/dark-red.jpg')]"} w-full py-28 md:py-24 lg:py-16 pb-8 px-2 sm:px-16 `}>
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  24/7 Customer Support
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our dedicated support team is available around the clock to
                  assist you with any questions or concerns you may have. We're
                  here to ensure your success.
                </p>
                <Button
                  onClick={() => setOpenDrawer(true)}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200"
                >
                  Contact Support
                </Button>
              </motion.div>
              <motion.img
                src="/contact24-7.png"
                width="550"
                height="310"
                alt="Contact Us"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Join our team */}
        <section className="w-full py-28 md:py-24 lg:py-16 pb-8 px-2 sm:px-16 bg-gradient-to-t from-gray-100 dark:from-black">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                className="space-y-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Team
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the exciting career opportunities at our company.
                  We're always looking for talented individuals to join our
                  growing team. Click below to contact the team.
                </p>
                <Button
                  onClick={() => setOpenDrawer(true)}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-700 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-red-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-gray-200"
                >
                  Contact
                </Button>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                src="/join-team.png"
                width="550"
                height="310"
                alt="Contact Us"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <ContactUsForm type={"contactPage"} />
      </main>
      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </div>
  );
};

export default ContactUs;
