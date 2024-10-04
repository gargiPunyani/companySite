import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import "./index.css";

const ReviewHome = () => {
  const reviews = [
    {
      title: "I feel a sense of pride working at Maya Web Tech.",
      position: "DevOps",
    },
    {
      title: "Maya Web Tech is a great place to work with a supportive team.",
      position: "Software Engineer",
    },
    {
      title: "The work culture at Maya Web Tech encourages growth and learning.",
      position: "Cloud Engineer",
    },
  ];
  const reviewsGlass = [
    {
      title: "I feel a sense of pride working at Maya Web Tech.",
      position: "React Developer",
    },
    {
      title: "Maya Web Tech is a great place to work with a supportive team.",
      position: "PHP Developer",
    },
    {
      title: "The work culture at Maya Web Tech encourages growth and learning.",
      position: "Node Developer",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-28 gap-16 py-16 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative"
      >
        <div className="flex flex-col gap-12 justify-center">
          <img
            src={"/allTeam.png"}
            alt="Review Image"
            className="reviewImageSection"
            loading="lazy"
          />
          <div className="reviewImageReviews absolute text-left top-20 right-0 sm:right-[-30px] w-[70%] text-sm bg-[#ffffff75] backdrop-blur-md shadow-lg flex flex-col gap-2 px-8 py-4 rounded-md pr-4">
            <div className="absolute hidden sm:block top-[-10px] text-xs font-semibold left-2 sm:left-[-40px] w-16 p-1">
              <img src={"/greatPlace.png"} alt="greatplace" className="rounded-md" loading="lazy" />
            </div>
            <div className="text-lg font-semibold text-right dark:text-gray-900">
              Great Place to Work reviews
            </div>
            {reviews.map((review, index) => (
              <div key={index} className="text-xs italic text-black">
                {review.title}
                <br />
                <span className="flex gap-2 not-italic font-semibold mt-1">
                 {review.position}
                  <span className="flex gap-[1.5px]">
                    {[...Array(5).keys()].map((item) => (
                      <FaStar key={item} className="text-yellow-500" />
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="reviewImageReviews absolute text-left bottom-[-30px] left-0 w-[70%] text-sm bg-[#ffffff50] backdrop-blur-sm shadow-lg flex flex-col gap-2 px-8 py-4 rounded-md pr-4">
            <div className="absolute top-[-10px] text-xs font-semibold right-[-10px] sm:right-[-30px] w-16 p-1">
              <img src={"/glassdoor.png"} alt="greatplace" className="rounded-md" loading="lazy" />
            </div>
            <div className="text-lg font-semibold dark:text-gray-900">Glassdoor Reviews</div>
            {reviewsGlass.map((review, index) => (
              <div key={index} className="text-xs italic text-gray-500 dark:text-black ">
                {review.title}
                <br />
                <span className="flex gap-2 not-italic font-semibold mt-1">
                  {review.position}
                  <span className="flex gap-[1.5px]">
                    {[...Array(5).keys()].map((item) => (
                      <FaStar key={item} className="text-green-500" />
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div
        className="ratingRightContent flex flex-col gap-8 w-auto text-left justify-center px-2 sm:pl-12"
      >
        <div className="space-y-8">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Empowered by a{" "}
            <span className="font-bold text-red-700">Culture </span> of{" "}
            <span className="font-bold text-red-700"> Innovation</span>
          </h1>
          <p className="sm:text-base font-extralight">
            At <strong> Maya Web Tech</strong>, our culture is designed to
            create an enriching and fulfilling experience for engineers. Our
            teams are composed of
            <strong> highly motivated individuals</strong> who integrate
            seamlessly with yours,
            <strong> working together to drive success</strong>. <br /> This
            strong collaboration is evident in the dedication and passion our
            engineers bring to every project, reflecting the deep connection
            they feel with our clients and their goals.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <Link to={"/about-us"}>Learn More</Link>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
