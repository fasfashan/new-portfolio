import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function Navbar() {
  const menuItems = [
    {
      text: "LinkedIn",
      icon: <ArrowTopRightIcon />,
      link: "https://www.linkedin.com/in/muhamad-fasha-fadillah/",
    },
    {
      text: "Twitter",
      icon: <ArrowTopRightIcon />,
      link: "https://twitter.com/fasfashan",
    },
    {
      text: "Github",
      icon: <ArrowTopRightIcon />,
      link: "https://github.com/fasfashan",
    },
  ];
  return (
    <nav className="sticky top-0  z-10 border-slate-300">
      <div className="flex items-center justify-between  py-3">
        <Link href="/">
          <svg
            width="40"
            height="40"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="44" fill="url(#paint0_linear_105_256)" />
            <path
              d="M15.8442 31L17.9342 21.0418H15.9426L16.631 17.7224H18.6473L18.9423 16.2471C19.139 15.2635 19.598 14.4931 20.3193 13.9358C21.0405 13.362 22.0896 13.0752 23.4666 13.0752H26.4909L25.8762 15.952H24.5484C24.0731 15.952 23.7042 16.0258 23.442 16.1733C23.1797 16.3208 23.0076 16.5913 22.9256 16.9847L22.7535 17.7224H25.2615L24.573 21.0418H22.0404L19.975 31H15.8442ZM21.9859 31L22.7481 27.3364H26.6331L25.8708 31H21.9859Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_105_256"
                x1="-0.000685211"
                y1="43.9997"
                x2="43.9995"
                y2="-0.000535721"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6600" />
                <stop offset="1" stop-color="#FF9201" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        <ul className="flex items-center md:gap-8 gap-6 text-sm">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                className="flex hover:text-gray-400 font-medium text-black tracking-tight transition-all items-center gap-2"
                href={item.link}
                target="_blank"
              >
                {item.text} {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
