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
        <nav className={`fixed w-full justify-between flex flex-row z-10 pr-10 items-center ${scrolled ? "bg-[#133737]" : ""}  `}>
          <img src={E} alt="My Logo" className="w-14 h-14" />
          {isOpen ? (
            <>
            <X className="w-6 h-6 z-10" onClick={() => setIsOpen(false)} />
              <ul className="fixed pb-4 pt-50 pl-4 pr-10 space-y-4  bg-[#133737] right-0  flex flex-col">
                <Link smooth to ="/#hero" className="text-right">Home</Link>
                <Link smooth to ="/#works" className="text-right">Projects</Link>
                <Link smooth to ="/#about" className="text-right">About</Link>
                <Link smooth to ="/#contact" className="text-right">Contact</Link>
              </ul>
            
            </>
          ) : (
            <Menu className="w-10 h-10 text-[#4AFF6B]" onClick={() => setIsOpen(true)} />
          )}

           </nav> ) : ( 
            <nav className="fixed top-0 left-0 w-full flex flex-row justify-between items-center bg-[#133737] z-50 px-4 py-2 ">
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
        isMobile ? (<nav className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center  py-2 z-50 transition-all duration-300 ${
    scrolled ? "bg-[#133737]" : "bg-transparent"}`}>
          <img
                src={E}
                alt="My Logo"
                className={`w-18 h-16 ml-2  `}
              />
              <Link
              smooth
              to="/#works"
              className="ml-auto px-6 flex flex-row items-center text-green-400 hover:text-white space-x-2 hover:cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>

        </nav>) : (
          <nav className={`fixed right-0 w-full z-20 top-0 items-center flex flex-row  ${scrolled ? "bg-[#133737]" : ""}`}>
            <Link smooth to="/#works" className="hover:cursor-pointer">
              <img
                src={E}
                alt="My Logo"
                className={`w-18 h-16 my-2 ml-4 pl-4 `}
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