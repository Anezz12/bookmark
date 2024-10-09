"use client";
import Image from "next/image";
import TypedText from "./ui/Typing";
import ImageHero from "@/public/images/illustration-hero.svg";
import { delay, motion } from "framer-motion";
import animation from "@/utility/animation";
import { SlideUp } from "@/utility/animation";
export default function HeroSection() {
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Bookmark", "Harsena", "Argretya"],
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     loop: true,
  //   });
  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    // Hero Section
    <section>
      {/* Container For Image & Content */}
      <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
        {/* Content */}
        <div className=" flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
          <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
            <TypedText
              strings={["A Simple Bookmark Manager "]}
              typeSpeed={50}
              backSpeed={50}
              loop={true}
            />
          </h1>
          <motion.p
            variants={SlideUp(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0"
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            variants={SlideUp(0.2)}
            whileInView={"animate"}
            initial="initial"
            className="flex items-center justify-center w-full space-x-4 lg:justify-start"
          >
            <a
              href="#"
              className="p-4 text-sm font-semibold text- bg-blue-500 rounded shadow-md text-white  border-2 border-blue-500 hover:bg-white hover:text-blue-500"
            >
              Get It On Chrome
            </a>
            <a
              href="#"
              className="p-4 text-sm font-semibold text- bg-gray-400 rounded shadow-md text-white  border-2 border-gray-400 hover:bg-white hover:text-blue-500"
            >
              Get it On FireFox
            </a>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2"
        >
          <div className="bg-hero" />
          <Image
            src={ImageHero}
            width={800}
            height={100}
            className="relative z-10 lg:top-24 xl:top-0 overflow-x-visible"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
}
