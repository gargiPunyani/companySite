import { Button } from "@/components/ui/button";
import { blogData } from "@/constants/blogData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <section className="bg-[url('/bg-pink.jpg')] bg-no-repeat bg-cover dark:bg-[url('/dark-red2.webp')] py-24 ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left max-w-[1200px] mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 mb-4">
                Discover the Latest Insights
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Explore our expert blog posts and stay ahead of the curve.
              </p>
              <div>
                <Link
                  to="https://www.linkedin.com/company/96414344/admin/dashboard/"
                  target="_blank"
                >
                  <Button className="bg-[#ffffff34] dark:bg-[#ffffffd4] backdrop-blur-lg text-red-700 font-semibold hover:bg-[#ffffff84] ">
                    Visit LinkedIn
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-end"
            >
              <img src="/blogHero.png" alt="homeLogo" className="w-10/12" />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-28">
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Latest Blog Posts
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover the latest insights and trends from our expert writers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
          {blogData.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.2 }}
                viewport={{ once: true }}
                className=" relative overflow-hidden rounded-lg shadow-lg group text-left"
              >
                <Link
                  to={`/blogs/${item.key}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Read more</span>
                </Link>
                <img
                  src={item.titleImage}
                  alt="Blog Post"
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="bg-background p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 ">
                    {item.intro}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="link"
                      size="sm"
                      className="text-primary bg-red-50 dark:bg-gray-400 "
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
