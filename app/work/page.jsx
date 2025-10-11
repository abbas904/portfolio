"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "E-commerce Website",
    description:
      "ShopSizzle is a modern, responsive online shopping platform designed to provide users with a seamless and engaging buying experience.",
    Stack: [
      { name: "Html 5" },
      { name: "TailwindCss" },
      { name: "Javascript" },
      { name: "React" },
    ],
    image: "/e-commerce.jpg",
    github: "https://github.com/abbas904/shop-sizzle",
    live: "https://shop-sizzle-ibjy.vercel.app/",
  },
  {
    num: "02",
    category: "front-end",
    title: "Cinema-Hub",
    description:
      "Cinema-Hub is a streaming platform that allows users to explore and discover their favorite movies and TV shows with rich details and recommendations.",
    Stack: [
      { name: "Html 5" },
      { name: "SCSS" },
      { name: "Javascript" },
      { name: "React" },
    ],
    image: "/movies.jpg",
    github: "https://github.com/abbas904/movie-app",
    live: "https://movie-app-ruby-two.vercel.app/react-movie-app",
  },
  {
    num: "03",
    category: "front-end",
    title: "Foodu",
    description:
      "Foodu is a modern and fully responsive web platform that lets users explore restaurant dishes, learn about chefs, and order food through a clean UI.",
    Stack: [
      { name: "Html 5" },
      { name: "TailwindCss" },
      { name: "Javascript" },
      { name: "React" },
    ],
    image: "/chef.jpg",
    github: "https://github.com/abbas904/Foodu",
    live: "https://foodu-eight.vercel.app/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handlSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* ==== Left Side (project details) ==== */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.Stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group hover:bg-accent transition-all">
                        <BsArrowUpRight className="text-white/70 text-3xl group-hover:text-white" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group hover:bg-accent transition-all">
                        <BsGithub className="text-white/70 text-3xl group-hover:text-white" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* ==== Right Side (Slider) ==== */}
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handlSliderChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-black/20 rounded-2xl overflow-hidden">
                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* ==== Slider Buttons ==== */}
              <WorkSliderBtns
                containerStyles="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-50"
                btnStyles="w-12 h-12 bg-white/20 border border-white/40 rounded-full flex justify-center items-center hover:bg-accent transition-all"
                iconsStyles="text-2xl text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
