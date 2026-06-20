"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
 const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/resume/resume.pdf"
 link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <section className="min-h-screen flex flex-col justify-center w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 py-10 md:py-16 lg:py-20">
          {/* text */}
          <div className="text-center lg:text-left flex-1 space-y-6 sm:space-y-8 md:space-y-10">
            <span className="text-base md:text-lg lg:text-xl text-white/60">
              Front-End Developer
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hello I'm <br />
              <span className="text-accent">Abbas Rizk</span>
            </h1>

            <p className="max-w-md lg:max-w-lg xl:max-w-xl text-white/80 mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
              I excel at crafting elegant digital experiences and am proficient
              in various programming languages and frameworks.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
       <Button
  onClick={handleDownloadCV}
  variant="outline"
  size="lg"
  className="uppercase flex items-center gap-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-sm sm:text-base md:text-lg"
>
  <span>Download CV</span>
  <FiDownload className="text-xl sm:text-2xl" />
</Button>


              <div className="flex justify-center lg:justify-start">
                <Socials
                  containerStyle="flex gap-6 sm:gap-8"
                  iconStyle="w-12 h-12 sm:w-14 sm:h-14 border border-accent rounded-full flex items-center justify-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="flex-shrink-0 order-first lg:order-none">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
