import { useEffect, useState } from "react";
import E from "../assets/E.png";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`flex fixed justify-between items-center px-16 py-3 w-full z-50 ${
          scrolled ? "bg-[#133737]" : "bg-transparent"
        }`}
      >
        <img src={E} alt="My Logo" className="w-14 h-14" />
        <ul className="flex space-x-14 text-gray-300 ml-auto">
          <li className="hover:text-white cursor-pointer text-2xl">
            {" "}
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-white cursor-pointer text-2xl">
            {" "}
            <a href="#works">Projects</a>
          </li>
          <li className="hover:text-white cursor-pointer text-2xl">
            {" "}
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white cursor-pointer text-2xl">
            {" "}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}