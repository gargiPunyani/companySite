import { Tabs } from "../ui/tabs";
import { motion } from "framer-motion";

function WorkShow() {
  const tabs = [
    {
      title: "Mobile App",
      value: "mobile",
      content: (
        <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
          <p>Mobile App</p>
          <DummyContent url="/mobDemo.png" />
        </div>
      ),
    },
    {
      title: "Websites",
      value: "web",
      content: (
        <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
          <p>Websites</p>
          <DummyContent url="/websiteDemo.png" />
        </div>
      ),
    },
    {
      title: "iOS",
      value: "ios",
      content: (
        <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
          <p>iOS</p>
          <DummyContent url="/iosDemo.png" />
        </div>
      ),
    },
    {
      title: "Android",
      value: "android",
      content: (
        <div className="w-full h-full p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 rounded-2xl relative overflow-hidden">
          <p>Android</p>
          <DummyContent url="mobileDemo.png" />
        </div>
      ),
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="text-3xl md:text-5xl font-medium mt-24 dark:text-white text-center">
          See Our Results in{" "}
          <span className="font-bold text-red-700">Action</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="h-[20rem] md:h-[40rem] flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40 mt-12 relative px-4">
          <Tabs tabs={tabs} />
        </div>
      </motion.div>
    </>
  );
}
export default WorkShow;

const DummyContent = ({ url }: { url?: string }) => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <img
        loading="lazy"
        src={url}
        alt="dummy image"
        className="absolute inset-0 sm:h-full h-60 object-cover rounded-xl mx-auto p-8"
      />
    </div>
  );
};
