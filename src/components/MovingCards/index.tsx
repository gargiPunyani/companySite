import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-3xl md:text-5xl font-bold dark:text-white text-center mb-12">
        Hear from Our <span className="text-red-700">Clients</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "They boosted our search engine rankings and optimized our content strategy. The difference in our online presence is remarkable. Highly recommended!",
    name: "Arnav",
    title: "CEO",
    url: "/Fincafe.png",
  },
  {
    quote:
      "The team is super dedicated to their work and always tries to deliver the best results. Very great at communicating, making it easy and smooth.",
    name: "Ben Vanspringel",
    title: "Sr. Software engineer",
    url: "/dcp.png",
  },
  {
    quote: "Their digital marketing strategies have brought in more qualified leads, and our social media following has grown substantially. They’re always on top of the latest trends, and it shows in the results. Fantastic service!",
    name: "Abhishek ",
    title: "Founder",
    url: "/rooh.png",
  },
  {
    quote: "The team was professional, creative, and always willing to go the extra mile to ensure I was happy with the final product",
    name: "Vipul Panwar",
    title: "YFL team",
    url: "/ladder.png",
  },
  {
    quote: "The attention to detail and commitment to quality were evident throughout the entire process. The app is not only beautiful but also highly functional, and it’s been a huge hit with my customers.",
    name: "Hardeep Saini",
    title: "CEO",
    url: "/lekhaJokhaPng.png",
  },
  {
    quote: "The entire process was efficient, and they kept me informed every step of the way. I highly recommend them for any web development project!",
    name: "Chagan Singh",
    title: "CEO",
    url: "/chagan.png",
  },
];
