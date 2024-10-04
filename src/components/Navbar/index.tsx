import React, { useEffect, useState } from "react";

import { ContactDrawer } from "@/common/ContactDrawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { components, componentsServices } from "@/constants/navConstant";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import mainLogo from "../../../public/mayaWebTechLogoMain.png";
import "./index.css";

export function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setActiveSubmenu(null);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsDrawerOpen(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollPosition > 100 ? "mainNavigationBarScrolled" : "mainNavigationBar"
      } sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background dark:bg-black/70`}
    >
      <div className="leftNavLogo">
        <Link to={"/"}>
          <img
            src={`${theme === "light" ? mainLogo : "/logoDark.webp"}`}
            alt="logo"
            height={45}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="navItemsMid">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500 dark:hover:text-red-200`}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-slate-500  dark:hover:text-red-200">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr] ">
                  <li className="row-span-3 ">
                    <NavigationMenuLink asChild>
                      <div
                        className={`flex h-full w-full select-none flex-col justify-end rounded-md ${
                          theme === "light"
                            ? "bg-[url('/bg-nav.avif')]"
                            : "bg-[url('/dark-red.jpg')]"
                        } bg-cover bg-no-repeat p-6 no-underline outline-none focus:shadow-md`}
                      >
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <div className="mb-2 mt-4 text-lg font-medium dark:text-white">
                          Maya Web Tech
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground dark:text-gray-300">
                          Transform your business with our expert software
                          development services, delivering innovative solutions
                          tailored to your unique needs.
                        </p>
                        <button className="bg-red-700 py-2 mt-4 rounded-lg shadow-lg text-white hover:bg-red-800 transition-all ">
                          <Link
                            to={"/services"}
                            className="flex items-center justify-center text-center gap-2"
                          >
                            Show All Services{" "}
                            <FaArrowRightLong className="text-white " />
                          </Link>
                        </button>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <div className="flex text-left">
                    <div>
                      <ListItem
                        href="/services/mobile-development"
                        title="Mobile Development"
                        className="hover:bg-[url('/bg-nav.jpeg')] hover:bg-cover hover:bg-no-repeat hover:dark:bg-[url('/dark-red.jpg')] text-black dark:text-white dark:hover:text-white"
                      >
                        Empower your business with cutting-edge mobile
                        applications
                      </ListItem>
                      <ListItem
                        href="/services/web-services"
                        title="Web Services"
                        className="hover:bg-[url('/bg-nav.jpeg')] hover:bg-cover hover:bg-no-repeat hover:dark:bg-[url('/dark-red.jpg')] text-black dark:text-white dark:hover:text-white"
                      >
                        Crafting responsive, engaging, and high-performing
                        websites
                      </ListItem>
                      <ListItem
                        href="/services/software-testing"
                        title="Software Testing"
                        className="hover:bg-[url('/bg-nav.jpeg')] hover:bg-cover hover:bg-no-repeat hover:dark:bg-[url('/dark-red.jpg')] text-black dark:text-white dark:hover:text-white"
                      >
                        Ensuring your software is reliable, secure
                      </ListItem>
                    </div>
                    <div>
                      <ListItem
                        href="/services/software-development"
                        title="Software Development"
                        className="hover:bg-[url('/bg-nav.jpeg')] hover:bg-cover hover:bg-no-repeat hover:dark:bg-[url('/dark-red.jpg')] text-black dark:text-white dark:hover:text-white"
                      >
                        Delivering robust and scalable software at Maya Web Tech
                      </ListItem>
                      <ListItem
                        href="/services/digital-marketing"
                        title="Digital Marketing"
                        className="hover:bg-[url('/bg-nav.jpeg')] hover:bg-cover hover:bg-no-repeat hover:dark:bg-[url('/dark-red.jpg')] text-black dark:text-white dark:hover:text-white"
                      >
                        Maximize your reach and engagement with our help.
                      </ListItem>
                      <ListItem
                        href="/services/web-hosting"
                        title="Web Hosting"
                        className="hover:bg-[url('/bg-nav.jpeg')] hover:bg-cover hover:bg-no-repeat hover:dark:bg-[url('/dark-red.jpg')] text-black dark:text-white dark:hover:text-white"
                      >
                        Providing reliable and secure web hosting
                      </ListItem>
                    </div>
                  </div>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-slate-500 dark:hover:text-red-200">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={`relative grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ${
                    theme === "light"
                      ? "bg-[url('/bg-nav.jpeg')] bg-cover bg-no-repeat"
                      : "bg-[url('/dark-red.jpg')] bg-cover bg-no-repeat"
                  } `}
                >
                  {components.map((component, ind) => (
                    <div className="industriesNavItems" key={ind}>
                      <span className="industriesNavItemLogo z-[20]">
                        {component.icon && <component.icon fontSize={50} />}
                      </span>

                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="hover:bg-[#ffffff40] z-[10] hover:backdrop-blur-sm dark:text-white "
                      >
                        {component.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://mayape.in/"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500 dark:hover:text-red-200`}
              >
                MayaPe
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/blogs"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500 dark:hover:text-red-200`}
              >
                Blogs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about-us"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500 dark:hover:text-red-200`}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact-us"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-slate-500 dark:hover:text-red-200`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div
        className={`drawer ${isDrawerOpen ? "open" : ""} ${
          theme === "light"
            ? "bg-[url('/bg-nav.jpeg')]"
            : "bg-[url('/dark-red.jpg')]"
        } bg-cover bg-no-repeat`}
      >
        <ul>
          <li
            style={{
              padding: "0 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={`${theme === "light" ? mainLogo : "/logoDark.webp"}`}
              alt="logo"
              width={100}
              className="mb-4"
              loading="lazy"
            />
          </li>
          <li>
            <Link
              onClick={toggleDrawer}
              to="/"
              className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
            >
              Home
            </Link>
          </li>
          <li>
            <button
              className="submenuTrigger"
              onClick={() => toggleSubmenu("drawer-services")}
            >
              Services{" "}
              <span>
                {activeSubmenu === "drawer-services" ? (
                  <FaMinus fontSize={10} />
                ) : (
                  <FaPlus fontSize={10} />
                )}
              </span>
            </button>
            {activeSubmenu === "drawer-services" && (
              <ul className="submenu">
                {componentsServices.map((component, index) => (
                  <li key={index} onClick={toggleDrawer}>
                    <Link
                      to={component.href}
                      className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
                    >
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              className="submenuTrigger"
              onClick={() => toggleSubmenu("drawer-industries")}
            >
              Industries{" "}
              <span>
                {activeSubmenu === "drawer-industries" ? (
                  <FaMinus fontSize={10} />
                ) : (
                  <FaPlus fontSize={10} />
                )}
              </span>
            </button>
            {activeSubmenu === "drawer-industries" && (
              <ul className="submenu">
                {components.map((component, id) => (
                  <li key={id} onClick={toggleDrawer}>
                    <Link
                      to={component.href}
                      className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
                    >
                      {component.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link
              onClick={toggleDrawer}
              to="https://mayape.in/"
              target="_blank"
              className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
            >
              MayaPe
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleDrawer}
              to="/blogs"
              className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleDrawer}
              to="/about-us"
              className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleDrawer}
              to="/contact-us"
              className="text-black dark:text-white hover:text-red-700 dark:hover:text-red-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="rightButtonNav">
        <button
          onClick={() => toggleTheme()}
          className="transition-all duration-200 ease-in-out rounded-3xl p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 mr-4"
        >
          <svg
            className="fill-black block dark:hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            height={25}
            width={25}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className="fill-yellow-300 hidden dark:block"
            fill="currentColor"
            viewBox="0 0 20 20"
            height={25}
            width={25}
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {isDrawerOpen ? (
          <IoMdClose
            fontSize={25}
            className="mSiteMenu"
            onClick={toggleDrawer}
          />
        ) : (
          <HiMenuAlt3
            className="mSiteMenu"
            fontSize={25}
            onClick={toggleDrawer}
          />
        )}
      </div>
      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
