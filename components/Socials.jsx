import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const social = [
  { icon: <FaGithub />, link: "https://github.com/abbas904" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/abbas-rizk-salem-7925a72b5/" },
  { icon: <FaEnvelope />, link: "mailto:abbasrizk@gmail.com" },
];

const Socials = ({ containerStyle = "flex gap-4", iconStyle = "text-2xl hover:text-accent" }) => {
  return (
    <div className={containerStyle}>
      {social.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
