"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./button";

const Links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = ({ whatsappLink }) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex flex-col justify-center items-center h-full bg-slate-900/50 backdrop-blur-md p-8"
      >
        {/* Accessibility title, visually hidden */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Logo / Name */}
        <div className="mb-10 ml-4 text-4xl font-bold text-white">
          Abbas<span className="text-accent">.</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 items-center">
          {Links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`text-lg font-medium capitalize transition-colors duration-200 ${
                  pathname === link.path
                    ? "text-accent font-bold"
                    : "text-slate-100"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        {whatsappLink && (
          <div className="mt-8">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                Hire Me
              </a>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
