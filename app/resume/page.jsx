"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
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
    "Front-End Developer with 2 years of experience designing and developing responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks such as React.js.",
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
    "Proficient in HTML, CSS, JavaScript, React.js, and modern frameworks.",
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

export default function Resume() {
  const handleDownloadCV = () => {
    console.log("Download Clicked");

    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center py-8 text-white"
    >
      <div className="container mx-auto px-4">

        {/* Download CV */}
        <div className="flex justify-center mb-8">
          <Button onClick={handleDownloadCV} variant="outline" size="lg">
            <span>Download CV</span>
            <FiDownload />
          </Button>
        </div>

        <Tabs defaultValue="Experience" className="flex flex-col lg:flex-row gap-10">

          {/* Tabs List */}
          <TabsList className="flex flex-col gap-4 w-full lg:max-w-[300px]">
            {["Experience", "Education", "Skills", "About Me"].map((tab) => (
              <TabsTrigger key={tab} value={tab}>
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Content */}
          <div className="w-full">

            <TabsContent value="Experience">
              <h2>{experience.title}</h2>
              <p>{experience.description}</p>

              {experience.items.map((exp, i) => (
                <div key={i}>
                  <h3>{exp.role}</h3>
                  <p>{exp.company}</p>
                  <span>{exp.period}</span>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="Education">
              <h2>{education.title}</h2>
              <p>{education.description}</p>

              {education.items.map((edu, i) => (
                <div key={i}>
                  <h3>{edu.title}</h3>
                  <span>{edu.period}</span>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="Skills">
              <h2>{skills.title}</h2>

              <div className="grid grid-cols-2 gap-4">
                {skills.skillList.map((skill) => (
                  <div key={skill.name}>
                    {skill.icon}
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="About Me">
              <h2>{about.title}</h2>
              <p>{about.description}</p>

              {about.info.map((item, i) => (
                <div key={i}>
                  <strong>{item.fieldname}:</strong> {item.value}
                </div>
              ))}
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}