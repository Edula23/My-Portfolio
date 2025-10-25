import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import E from "../assets/E.png";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import useWindowSize from "../hooks/useWindowSize"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname == "/";
  const {isMobile} = useWindowSize();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isHome ? (
        isMobile ? ( 
        <nav className={`flex flex-row ${scrolled ? "bg-[#133737]" : ""}  `}>
          <img src={E} alt="My Logo" className="w-14 h-14" />
          {isOpen ? (
            <X className="w-6 h-6" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="w-6 h-6" onClick={() => setIsOpen(true)} />
          )}

           </nav> ) : ( 
            <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center bg-[#133737] z-50 ">
          <img src={E} alt="My Logo" className={`w-14 h-14 ${scrolled ? "bg-[#133737]" : ""}`} />
          <ul className={`flex space-x-14 text-gray-300 ml-auto `}>
            <li className={`hover:text-white cursor-pointer text-2xl `}>
              {" "}
              <Link smooth to="/#hero">
                Home
              </Link>
            </li>
            <li
              className= "hover:text-white cursor-pointer text-2xl"
            >
              {" "}
              <Link smooth to="/#works">
                Projects
              </Link>
            </li>
            <li
              className= "hover:text-white cursor-pointer text-2xl "
            >
              {" "}
              <Link smooth to="/#about">
                About
              </Link>
            </li>
            <li
              className="hover:text-white cursor-pointer text-2xl "
            >
              {" "}
              <Link smooth to="/#contact">
                Contact
              </Link>
            </li>
          </ul>{" "}
        </nav> )
        
      ) : (
        isMobile ? (<nav className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center px-1 py-3 z-50 transition-all duration-300 ${
    scrolled ? "bg-[#133737]" : "bg-transparent"}`}>
          <img
                src={E}
                alt="My Logo"
                className={`w-18 h-18 mt-4 ml-4 pl-4 `}
              />
              <Link
              smooth
              to="/#works"
              className="mt-auto ml-auto px-6 flex flex-row items-center text-green-400 hover:text-white space-x-2 hover:cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>

        </nav>) : (
          <nav className={`flex flex-row items-center ${scrolled ? "bg-[#133737]" : ""}`}>
            <Link smooth to="/#works" className="hover:cursor-pointer">
              <img
                src={E}
                alt="My Logo"
                className={`w-18 h-18 mt-4 ml-4 pl-4 `}
              />
            </Link>
            <Link
              smooth
              to="/#works"
              className=" ml-auto px-6 flex flex-row items-center text-green-400 hover:text-white space-x-2 hover:cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
        </nav>)
        
      )}
      

    </>);
}