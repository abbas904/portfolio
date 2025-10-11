"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description:
      "I specialize in front-end development using HTML, CSS, and JavaScript, creating responsive and user-friendly interfaces with excellent user experiences.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I design and implement intuitive user interfaces and experiences using tools like Figma and Adobe XD to craft wireframes and interactive prototypes.",
    href: "",
  },
  {
    num: "03",
    title: "GitHub",
    description:
      "As a front-end developer, I use Git for version control and GitHub to host, collaborate on, and deploy web projects efficiently.",
    href: "",
  },
  {
    num: "04",
    title: "Clean Code",
    description:
      "As a front-end developer, I write clean, organized, and scalable code to ensure maintainability and long-term project success.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 group"
            >
              {/* header */}
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-outline leading-tight text-transparent transition-all duration-300">
                  {service.num}
                </div>
                <Link 
                  href={service.href || "#"} 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] rounded-full bg-white text-outline flex items-center justify-center transition-all duration-300
                  group-hover:bg-accent
                  hover:rotate-45"
                >
                  <BsArrowDownRight className="text-xl sm:text-2xl md:text-3xl lg:text-4xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 text-primary text-outline" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] font-bold leading-tight text-outline">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/50 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                {service.description}
              </p>

              {/* border */}
              <div className="border-b border-white/40 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
