
import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col xl:flex-row items-center justify-between min-h-screen py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none flex-1">
              <span className="text-base sm:text-lg lg:text-xl text-white/60 block mb-2 sm:mb-3">Front-End Developer</span>
              <h1 className="h1 mb-4 sm:mb-6 lg:mb-8">Hello I'm <br /><span className="text-accent">Abbas Rizk</span></h1>
              <p className="max-w-[500px] mb-6 sm:mb-8 lg:mb-10 text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed mx-auto xl:mx-0">I excel at crafting elegant digital experience and I am proficient in
                various programming languages and frameworks.</p>
              {/* btn and socials */}
              <div className="flex flex-col sm:flex-row xl:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4">
                  <span>Download CV</span>
                  <FiDownload  className="text-lg sm:text-xl"/>
                </Button>
                <div className="flex justify-center xl:justify-start">
                  <Socials containerStyle="flex gap-4 sm:gap-6" iconStyle="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-accent rounded-full flex items-center justify-center text-accent text-sm sm:text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none flex-shrink-0">
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

