import BlogEight from "@/common/AllBlogs/BlogEight";
import BlogEleven from "@/common/AllBlogs/BlogEleven";
import BlogFive from "@/common/AllBlogs/BlogFive";
import BlogFour from "@/common/AllBlogs/BlogFour";
import BlogNine from "@/common/AllBlogs/BlogNine";
import BlogOne from "@/common/AllBlogs/BlogOne";
import BlogSeven from "@/common/AllBlogs/BlogSeven";
import BlogSix from "@/common/AllBlogs/BlogSix";
import BlogTen from "@/common/AllBlogs/BlogTen";
import BlogThree from "@/common/AllBlogs/BlogThree";
import BlogTwo from "@/common/AllBlogs/BlogTwo";
import { blogData } from "@/constants/blogData";
import { useTheme } from "@/context/ThemeContext";
import { PlusIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogLayout = () => {
  const { blogId } = useParams();
  const { theme } = useTheme();
  const data = blogData.filter((item) => item.key === blogId)?.[0] || [];
  const blogComponent: Record<string, JSX.Element> = {
    one: <BlogOne />,
    two: <BlogTwo />,
    three: <BlogThree />,
    four: <BlogFour />,
    five: <BlogFive />,
    six: <BlogSix />,
    seven: <BlogSeven />,
    eight: <BlogEight />,
    nine: <BlogNine />,
    ten: <BlogTen />,
    eleven: <BlogEleven />,
  };
  return (
    <div className="max-w-[1000px] min-h-screen py-32 mx-auto ">
      <div className="flex justify-center px-2">
        <img src={data?.titleImage} alt={data.title} className=" flex mb-20 " />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold uppercase max-w-[1000px] mx-auto px-2">
        {data.title}
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-16 items-center justify-between max-w-[1000px] mx-auto ">
        <div className="flex gap-2 sm:gap-6 items-center">
          <img
            src={`${theme === 'light' ? "/mayaWebTechLogoMain.png" : "/logoDark.webp" }`}
            alt="logo"
            className="h-5 sm:h-10 "
          />
          <div className="text-left space-y-1">
            <Link
              to={"/"}
              className="text-lg sm:text-2xl font-semibold hover:underline-offset-4 hover:underline "
            >
              Maya Web Tech
            </Link>
            <h3 className="font-semibold text-sm sm:text-lg text-gray-500">
              Crafting Digital Excellence
            </h3>
            <h3 className="text-xs sm:text-base">
              Published {data.publishedDate}
            </h3>
          </div>
        </div>
        <div>
          <Link
            to="https://www.linkedin.com/company/96414344/admin/dashboard/"
            target="_blank"
            className="flex items-center gap-2 text-sm sm:text-xl font-semibold border-2 px-4 py-2 rounded-2xl hover:border-red-700 transition-all ease-in-out duration-300 hover:text-red-700 "
          >
            Follow <PlusIcon className="h-4 sm:h-5" />{" "}
          </Link>
        </div>
      </div>
      {blogComponent[`${data.key}`]}
    </div>
  );
};

export default BlogLayout;
