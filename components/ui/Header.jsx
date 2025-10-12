import Link from 'next/link';
import { Button } from "../ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  const whatsappNumber = "996535052140"; // رقمك بدون +
  const whatsappMessage = "Hello Abbas!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className='py-6 sm:py-8 xl:py-12 text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-3xl xl:text-4xl font-semibold">
          Abbas<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav + WhatsApp button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Button asChild className='ml-4'>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaWhatsapp className="text-green-500 text-lg sm:text-xl"/>
              Hire Me
            </a>
          </Button>
        </div>

        {/* Mobile nav */}
        <div className='xl:hidden'>
          <MobileNav whatsappLink={whatsappLink} />
        </div>
      </div>
    </header>
  );
};

export default Header;
