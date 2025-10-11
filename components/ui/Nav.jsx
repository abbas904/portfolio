"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
const links =[
    {name: "Home", path: "/"},
    {name: "Services", path: "/services"},
    {name: "Resume", path: "/resume"},
    {name: "Work", path: "/work"},
    {name: "Contact", path: "/contact"},
]

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={clsx(
            'capitalize font-medium transition-all hover:text-accent',
            // Optional: show an underline/border on hover as well
            'hover:border-b-2 hover:border-accent',
            link.path === pathname && 'text-accent border-b-2 border-accent'
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
