import me from "../assets/mePortfolio.png";
import useWindowSize from "../hooks/useWindowSize"
import mePorMob from "../assets/mePortfolioMob.png"

export default function HeroSection() {
  const {isMobile} = useWindowSize();
  const imgSrc = isMobile ? mePorMob : me;
  return (
    <section className="bg-black text-white min-h-screen w-full flex flex-col">    

      {/* Hero Section */}
      <div id="hero" className="flex flex-col mt-16 md:flex-row md:mt-40 md:gap-12  mx-auto">
        {/* Text Section */}
        <div className="flex flex-col justify-between md:mb-15">
          <h1 className="text-7xl font-medium">
            Hey There, <br />
            I'm <span className="text-[#4AFF6B] font-bold">Eden</span>
          </h1>
          <a href="../public/Eden_A_Gebeta_Resume_(1).pdf" download="Eden_A_Gebeta_Resume.pdf" className="hidden md:block">
            <button className="bg-[#4AFF6B] w-32 text-black py-2 rounded-full font-bold text-sm hover:bg-[#133737] hover:text-white hover:cursor-pointer transition-colors ">
            Resume
          </button>
          </a>
          
        </div>

        {/* Image Section */}
        <div className="relative md:mt-30 p-0">
          <img
            src={imgSrc}
            alt="Eden"
            className="mb-0 p-0 object-contain rounded-lg w-[500px]"
          />
        </div>
        <div className="md:w-[400px] md:flex md:flex-col md:justify-between md:mb-20">
          <p className="text-gray-400 text-2xl mt-10">
            I'm a UX/UI Designer <br className="hidden md:block" /> and Front-End Developer <br className="hidden md:block"/> based in Ethiopia
          </p>
          <a href="../public/Eden_A_Gebeta_Resume_(1).pdf" download="Eden_A_Gebeta_Resume.pdf" className=" md:hidden">
            <button className="bg-[#4AFF6B] mt-4 w-32 text-black py-2 rounded-full font-bold text-sm hover:bg-[#133737] hover:text-white hover:cursor-pointer transition-colors ">
            Resume
          </button>
          </a>
          <p className="hidden md:block text-gray-400 text-2xl md:mt-10"> edengebeta210@gmail.com </p>
        </div>
      </div>
    </section>
  );
}
