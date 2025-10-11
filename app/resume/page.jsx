"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaTypo3,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "I’m a passionate Front-End Developer with a deep understanding of UI/UX principles, performance optimization, and component-based architecture. I enjoy transforming ideas into smooth, visually appealing, and accessible web applications that deliver real value to users. My goal is to continue growing as a developer, mastering advanced React patterns and TypeScript, and contributing to large-scale, innovative projects.",
  info: [
    { fieldname: "Name", value: "Abbas Rizk Salem" },
    { fieldname: "Age", value: "28" },
    { fieldname: "Email", value: "abbasrizk777@gmail.com" },
    { fieldname: "Phone", value: "+966 535 052 140" },
    { fieldname: "Experience", value: "+2 years" },
    { fieldname: "Freelance", value: "Available" },
    { fieldname: "Nationality", value: "Egyptian" },
    { fieldname: "Languages", value: "Arabic, English" },
    { fieldname: "Address", value: "Jeddah, Saudi Arabia" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Front-End Developer with 2 years of experience designing and developing responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React.js, and experienced in translating UI/UX designs into clean, efficient code.",
  items: [
    {
      company: "Coders, Nasir City",
      role: "Front-End Developer",
      period: "June 2023 - December 2023",
    },
    {
      company: "Freelancer at Upwork, Cairo",
      role: "Front-End Developer",
      period: "January 2024 - January 2025",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Department of Computer Science at October 6 University.",
  items: [
    {
      title: "Front-End Course at Route Academy",
      period: "August 2021 - December 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in HTML, CSS, JavaScript, and modern frameworks such as React.js. Experienced in translating UI/UX designs into clean, efficient code.",
  skillList: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Next", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <FaTypo3 /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-screen-xl">
        <Tabs
          defaultValue="Experience"
          className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full"
        >
          {/* Tabs List */}
          <TabsList className="flex flex-row lg:flex-col gap-3 sm:gap-4 md:gap-6 w-full lg:max-w-[350px] overflow-x-auto lg:overflow-x-visible">
            {["Experience", "Education", "Skills", "About Me"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-white bg-[#27272c] hover:bg-green-500 hover:text-black rounded-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-center transition-all duration-300 data-[state=active]:bg-green-500 data-[state=active]:text-black text-sm sm:text-base md:text-lg whitespace-nowrap"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full mt-6 lg:mt-0">
            {/* Experience */}
            <TabsContent value="Experience">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">{experience.title}</h3>
              <p className="text-white/70 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">{experience.description}</p>
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                {experience.items.map((exp, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 p-4 sm:p-6 md:p-8 rounded-lg hover:border-green-500 transition"
                  >
                    <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{exp.role}</h4>
                    <p className="text-accent text-sm sm:text-base md:text-lg mb-2">{exp.company}</p>
                    <span className="text-xs sm:text-sm md:text-base text-gray-400">{exp.period}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="Education">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">{education.title}</h3>
              <p className="text-accent mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">{education.description}</p>
              {education.items.map((edu, index) => (
                <div
                  key={index}
                  className="border border-gray-700 p-4 sm:p-6 md:p-8 rounded-lg hover:border-green-500 transition mb-4 sm:mb-6 md:mb-8"
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{edu.title}</h4>
                  <span className="text-xs sm:text-sm md:text-base text-accent">{edu.period}</span>
                </div>
              ))}
            </TabsContent>

            {/* Skills */}
            <TabsContent value="Skills">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">{skills.title}</h3>
              <p className="text-white/70 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">{skills.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                {skills.skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 sm:gap-4 group"
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl border border-gray-500 rounded-lg p-4 sm:p-6 md:p-8 transition-colors duration-300 group-hover:text-accent">
                      {skill.icon}
                    </div>
                    <span className="text-sm sm:text-base md:text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* About Me */}
            <TabsContent value="About Me">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">{about.title}</h3>
              <p className="text-white/70 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg">{about.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {about.info.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 p-4 sm:p-6 md:p-8 rounded-lg flex justify-between hover:border-green-500 transition"
                  >
                    <span className="font-medium text-white text-sm sm:text-base md:text-lg">
                      {item.fieldname}:
                    </span>
                    <span className="text-accent text-sm sm:text-base md:text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
