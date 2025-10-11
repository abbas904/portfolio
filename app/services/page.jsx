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
    <section className="min-h-[80vh] flex flex-col justify-center py-6 sm:py-8 xl:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-[45px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-4 sm:gap-6 group"
            >
              {/* header */}
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-outline leading-tight text-transparent transition-all duration-300">
                  {service.num}
                </div>
                <Link 
                  href={service.href || "#"} 
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-[60px] lg:h-[60px] rounded-full bg-white text-outline flex items-center justify-center transition-all duration-300
                  group-hover:bg-accent
                  hover:rotate-45"
                >
                  <BsArrowDownRight className="text-lg sm:text-xl lg:text-2xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300 text-primary text-outline" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-[38px] font-bold leading-tight text-outline">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/50 leading-relaxed text-sm sm:text-base">
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
