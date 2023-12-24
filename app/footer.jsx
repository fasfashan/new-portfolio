/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="space-y-6 mb-10">
      <h2 className="md:text-6xl text-4xl tracking-tighter mt-40 max-w-5xl">
        I'm available for freelance projects —feel free to initiate a project
        and let's explore how we can collaborate.
      </h2>
      <a
        className="px-4 w-fit font-medium flex items-center gap-1 py-2 bg-gradient-to-t from-radiance to-warmth hover:opacity-90 transition-all"
        href="mailto:pasapadilah1410@gmail.com"
      >
        Send me an Email <EnvelopeClosedIcon />
      </a>
      <p className="text-gray-400">
        © {currentYear} Fasha Fadillah. All Rights Reserved.
      </p>
    </footer>
  );
}
