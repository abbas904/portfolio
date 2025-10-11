import Link from 'next/link'
import {Button} from "../ui/button"
import Nav from './Nav';
import MobileNav from './MobileNav';



const Header = () => {
  return (
    <header className='py-6 sm:py-8 xl:py-12 text-white'>
   <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
    <Link href="/" className="text-2xl sm:text-3xl xl:text-4xl font-semibold">
  Abbas<span className="text-accent">.</span>
</Link>

{/* desktop nav hire me button */}
<div className='hidden xl:flex items-center gap-8'>
    <Nav/>
    <Link href="/contact">
    <Button className='ml-4'>Hire Me</Button>
    </Link>
</div>
 {/* mobile nav */}
  <div className='xl:hidden'>
    <MobileNav/>
  </div>
   </div>
    </header>
  )
}

export default Header
