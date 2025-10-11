
import {Button} from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8 sm:gap-12">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none flex-1">
            <span className="text-lg sm:text-xl text-white/60">Front-End Developer</span>
            <h1 className="h1 mb-4 sm:mb-6">Hello I'm <br /><span className="text-accent">Abbas Rizk</span></h1>
            <p className="max-w-[500px] mb-6 sm:mb-9 text-white/80 text-sm sm:text-base leading-relaxed mx-auto xl:mx-0">I excel at crafting elegant digital experience and I am proficient in
              various programming languages and frameworks.</p>
            {/* btn and socials */}
            <div className="flex flex-col sm:flex-row xl:flex-row items-center gap-4 sm:gap-6 xl:gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 w-full sm:w-auto">
                <span>Download CV</span>
                <FiDownload  className="text-xl"/>
              </Button>
              <div className="mb-4 sm:mb-0 xl:mb-0">
                <Socials containerStyle="flex gap-4 sm:gap-6" iconStyle="w-8 h-8 sm:w-9 sm:h-9 border border-accent rounded-full flex items-center justify-center text-accent text-sm sm:text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-4 sm:mb-8 xl:mb-0 flex-shrink-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home

