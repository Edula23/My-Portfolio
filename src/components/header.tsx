
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import E from "../assets/E.png";
import { HashLink as Link} from 'react-router-hash-link';
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <nav
        className={`flex fixed justify-between items-center px-16 py-1.5 w-full z-50 ${
          scrolled ? "bg-[#133737]" : "bg-transparent"
        } ${isHome ? "hidden" : ""} `}
      >
        <img src={E} alt="My Logo" className="w-14 h-14" />
        <ul className={`flex space-x-14 text-gray-300 ml-auto `}>
          <li className={`hover:text-white cursor-pointer text-2xl `}>
            {" "}
            <Link smooth to="/#hero">Home</Link>
          </li>
          <li className={`hover:text-white cursor-pointer text-2xl ${isHome ? "hidden" : ""}`}>
            {" "}
            <Link smooth to="/#works">Projects</Link>
          </li>
          <li className={`hover:text-white cursor-pointer text-2xl ${isHome ? "hidden" : ""}`}>
            {" "}
            <Link smooth to="/#about">About</Link>
          </li>
          <li className={`hover:text-white cursor-pointer text-2xl ${isHome ? "hidden" : ""}`}>
            {" "}
            <Link smooth to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      </>
  );
}