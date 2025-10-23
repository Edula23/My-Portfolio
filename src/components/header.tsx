import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import E from "../assets/E.png";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
        className={`hidden md:flex fixed justify-between items-center px-16 py-1.5 w-full z-50 ${
          scrolled ? "bg-[#133737]" : "bg-transparent"
        } ${isHome ? "hidden" : ""} `}
      >
        <img src={E} alt="My Logo" className="w-14 h-14" />
        <ul className={`flex space-x-14 text-gray-300 ml-auto `}>
          <li className={`hover:text-white cursor-pointer text-2xl `}>
            {" "}
            <Link smooth to="/#hero">
              Home
            </Link>
          </li>
          <li
            className={`hover:text-white cursor-pointer text-2xl ${
              isHome ? "hidden" : ""
            }`}
          >
            {" "}
            <Link smooth to="/#works">
              Projects
            </Link>
          </li>
          <li
            className={`hover:text-white cursor-pointer text-2xl ${
              isHome ? "hidden" : ""
            }`}
          >
            {" "}
            <Link smooth to="/#about">
              About
            </Link>
          </li>
          <li
            className={`hover:text-white cursor-pointer text-2xl ${
              isHome ? "hidden" : ""
            }`}
          >
            {" "}
            <Link smooth to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="fixed bg-[#133737] top-0 right-0 md:hidden">
        <img src={E} alt="Logo" className="fixed top-6 left-4 w-16 h-16" />
        {/* <img src={E} alt="humberger menu" className="w-16 h-16" /> */}
        <div className="flex flex-col">
          <button className=" fixed right-2 top-6 md:hidden " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} className="top-3 fixed right-3 z-50" /> : <Menu className="text-[#4AFF6B]" size={50} />}
        </button>
        {isOpen && (
          <div className="md:hidden fixed right-6 top-2 bg-[#133737] w-36 rounded-lg z-40 mt-16">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <Link smooth to="/#hero">
                <li
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </li>
              </Link>
              <Link smooth to="/#works">
                <li
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </li>
              </Link>
              <Link smooth to="/#about">
                <li
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </li>
              </Link>
              <Link smooth to="/#contact">
                <li
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        )}
        </div>
      </nav>
    </>
  );
}
