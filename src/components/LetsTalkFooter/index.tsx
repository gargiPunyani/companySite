import { useState } from "react";
import "./index.css";
import { FlipWords } from "../ui/flip-words";
import { Button } from "../ui/moving-border";
import { ContactDrawer } from "@/common/ContactDrawer";
import { useTheme } from "@/context/ThemeContext";

const LetsTalkFooter = () => {
  const {theme} = useTheme()
  const words = ["Business", "Demo", "Services"];
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className={`${theme === 'light' ? "bg-[url('/bg-gradiant.jpg')] bg-cover" : "bg-black"} py-16 mt-16 px-4`}>
      <div className="text-2xl sm:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Let’s Talk About <div className="font-medium text-red-700 sm:hidden">Services</div>
        <FlipWords words={words} className="hidden sm:flex justify-center font-medium text-red-700 dark:text-red-700 " />
      </div>
      <div className="py-8">
        Since you made it all the way down here, <br /> book a personalized demo
        with our founders
      </div>
      <div>
        <Button
          onClick={() => setOpenDrawer(true)}
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-zinc-600 dark:text-white border-neutral-200 dark:border-slate-800 text-large sm:text-xl font-semibold"
          containerClassName="h-12 sm:h-16 text-zinc-600"
        >
          Let's Connect
        </Button>
      </div>
      <ContactDrawer isOpen={openDrawer} handleChange={setOpenDrawer} />
    </div>
  );
};

export default LetsTalkFooter;
