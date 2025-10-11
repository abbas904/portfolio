
import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-28">
            {/* text */}
            <div className="text-center lg:text-left order-2 lg:order-none flex-1 max-w-lg lg:max-w-none">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 block mb-3 sm:mb-4 md:mb-5">Front-End Developer</span>
              <h1 className="h1 mb-6 sm:mb-8 md:mb-10 lg:mb-12">Hello I'm <br /><span className="text-accent">Abbas Rizk</span></h1>
              <p className="max-w-md lg:max-w-lg xl:max-w-xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mx-auto lg:mx-0">I excel at crafting elegant digital experience and I am proficient in
                various programming languages and frameworks.</p>
              {/* btn and socials */}
              <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg">
                  <span>Download CV</span>
                  <FiDownload className="text-lg sm:text-xl md:text-2xl"/>
                </Button>
                <div className="flex justify-center lg:justify-start">
                  <Socials containerStyle="flex gap-6 sm:gap-8 md:gap-10" iconStyle="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border border-accent rounded-full flex items-center justify-center text-accent text-lg sm:text-xl md:text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 lg:order-none flex-shrink-0">
              <Photo/>
            </div>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home

