import { useEffect, useState } from "react";
import me from "../assets/mePortfolio.png";
import E from "../assets/E.png";
export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className={`flex fixed justify-between items-center px-16 py-3 w-full z-50 ${
          scrolled ? "bg-[#133737]" : "bg-transparent"
        }`}
      >
        <img src={E} alt="My Logo" className="w-14 h-14" />
        <ul className="flex space-x-28 text-gray-300 ml-auto">
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

      {/* Hero Section */}
      <div id="hero" className="flex mt-40 gap-12  mx-auto">
        {/* Text Section */}
        <div className="flex flex-col justify-between mb-15">
          <h1 className="text-7xl font-medium">
            Hey There, <br />
            I'm <span className="text-[#4AFF6B] font-bold">Eden</span>
          </h1>
          <a href="../public/Eden_A_Gebeta_Resume.pdf" download="Eden_A_Gebeta_Resume.pdf">
            <button className="bg-[#4AFF6B] w-32 text-black py-2 rounded-full font-bold text-sm hover:bg-[#133737] hover:text-white transition-colors ">
            Resume
          </button>
          </a>
          
        </div>

        {/* Image Section */}
        <div className="relative mt-30 p-0">
          <img
            src={me}
            alt="Eden"
            className="mb-0 p-0 object-contain rounded-lg w-[500px]"
          />
        </div>
        <div className="w-[400px] flex flex-col justify-between mb-20">
          <p className="text-gray-400 text-2xl mt-10">
            I'm a UX/UI Designer <br /> and Front-End Developer <br/> based in Ethiopia
          </p>
          <p className="text-gray-400 text-2xl mt-10"> edengebeta210@gmail.com </p>
        </div>
      </div>
    </section>
  );
}
