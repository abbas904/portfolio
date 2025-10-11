"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "front-end",
    title: "E-commerce Website",
    description:
      "ShopSizzle is a modern, responsive online shopping platform designed to provide users with a seamless and engaging buying experience.",
    Stack: ["Html 5", "TailwindCss", "Javascript", "React"],
    image: "/e-commerce.jpg",
    github: "https://github.com/abbas904/shop-sizzle",
    live: "https://shop-sizzle-ibjy.vercel.app/",
  },
  {
    num: "02",
    category: "front-end",
    title: "Cinema-Hub",
    description:
      "Cinema-Hub is a streaming platform for movies and TV shows with rich details and recommendations.",
    Stack: ["Html 5", "SCSS", "Javascript", "React"],
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
    Stack: ["Html 5", "TailwindCss", "Javascript", "React"],
    image: "/chef.jpg",
    github: "https://github.com/abbas904/Foodu",
    live: "https://foodu-eight.vercel.app/",
  },
];

// مكون Client-only للزر مع Tooltip
const LiveDemoButton = ({ href }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={href}
        target="_blank"
        className="w-12 h-12 sm:w-16 sm:h-16 xl:w-[70px] xl:h-[70px] rounded-full bg-white/10 flex justify-center items-center hover:bg-accent transition-all"
      >
        <BsArrowUpRight className="text-white/70 text-xl sm:text-2xl xl:text-3xl" />
      </Link>
      {hover && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded pointer-events-none">
          Live Demo
        </span>
      )}
    </div>
  );
};

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const project = projects[currentIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 sm:py-8 xl:py-12 xl:px-0 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8 sm:gap-12">
          <div className="w-full xl:w-[50%] relative order-1 xl:order-2 mb-4 xl:mb-0">
            <div className="flex gap-4 justify-center mb-4 xl:mb-6">
              <button
                className="swiper-prev w-12 h-12 sm:w-14 sm:h-14 bg-white/20 border border-white/40 rounded-full flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-300 group backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="swiper-next w-12 h-12 sm:w-14 sm:h-14 bg-white/20 border border-white/40 rounded-full flex justify-center items-center hover:bg-accent hover:border-accent transition-all duration-300 group backdrop-blur-sm"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: { spaceBetween: 25 },
                768: { spaceBetween: 30 },
                1024: { spaceBetween: 30 },
              }}
              className="h-[350px] sm:h-[400px] md:h-[460px] xl:h-[520px]"
            >
              {projects.map((proj, i) => (
                <SwiperSlide key={i}>
                  <div className="h-[350px] sm:h-[400px] md:h-[460px] xl:h-[460px] relative group flex justify-center items-center bg-black/20 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full xl:w-[50%] flex flex-col gap-4 sm:gap-6 order-2 xl:order-1 mt-4 xl:mt-0">
            <div className="text-6xl sm:text-7xl xl:text-8xl font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-[42px] font-bold capitalize">
              {project.category} project
            </h2>
            <h4 className="text-pink-700 font-extrabold text-2xl">{project.title}</h4>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-3 sm:gap-4">
              {project.Stack.map((stack, i) => (
                <li key={i} className="text-lg sm:text-xl text-accent">
                  {stack}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 sm:gap-4 mt-4">
              {/* Live Demo Button مع Client-only Tooltip */}
              <LiveDemoButton href={project.live} />

              {/* GitHub Button */}
              <Link
                href={project.github}
                target="_blank"
                className="w-12 h-12 sm:w-16 sm:h-16 xl:w-[70px] xl:h-[70px] rounded-full bg-white/10 flex justify-center items-center hover:bg-accent transition-all"
              >
                <BsGithub className="text-white/70 text-xl sm:text-2xl xl:text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
