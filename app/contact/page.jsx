"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+966 535 052 140",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abbasrizk777@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jeddah, Saudi Arabia",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      className="py-6 sm:py-8 xl:py-12 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 xl:gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-8 xl:p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-2xl sm:text-3xl xl:text-4xl text-accent font-bold">
                Let's Work Together
              </h3>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                Feel free to get in touch with me for collaborations, project
                inquiries, or any creative ideas you'd like to bring to life.
                I'm always open to discussing new opportunities and sharing
                knowledge about web development and design. You can reach me via
                email, connect with me on social media, or simply drop a message
                through the contact form below — I'll get back to you as soon as
                possible.
              </p>

              {/* inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>

              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI / UX Design</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* message */}
              <Textarea
                placeholder="Your Message"
                className="h-24 sm:h-32 resize-none mt-4 sm:mt-6 xl:mt-10"
              />

              {/* button */}
              <Button className="self-start bg-accent hover:bg-accent/80 text-black font-semibold w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex flex-col justify-center xl:items-end order-1 xl:order-none mb-6 sm:mb-8 xl:mb-0">
            <div className="flex flex-col gap-4 sm:gap-6 xl:gap-8 w-full max-w-[400px]">
              {info.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 sm:gap-6 bg-[#2e2e35] p-4 sm:p-5 rounded-xl hover:bg-[#3a3a42] transition-all"
                >
                  <div className="text-accent text-xl sm:text-2xl">{item.icon}</div>
                  <div>
                    <p className="text-white/60 text-xs sm:text-sm">{item.title}</p>
                    <h4 className="text-base sm:text-lg xl:text-xl font-semibold">{item.description}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
