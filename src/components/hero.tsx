
import me from "../assets/mePortfolio.png";

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-16 py-8">
        <h1 className="text-green-400 font-bold text-4xl">Eden</h1>
        <ul className="flex space-x-28 text-gray-300">
          <li className="hover:text-white cursor-pointer text-2xl">Home</li>
          <li className="hover:text-white cursor-pointer text-2xl">About</li>
          <li className="hover:text-white cursor-pointer text-2xl">Works</li>
          <li className="hover:text-white cursor-pointer text-2xl">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 items-center pl-16 pr-6">
        {/* Text Section */}
        <div className="w-fit h-fit mt-28">
          <h1 className="text-9xl font-medium leading-[0.8]">
            Eden <br /> Alemayehu
          </h1>
          <p className="text-gray-400 text-2xl mt-10">
            UX/UI Designer <br /> & Front-End Developer based in Ethiopia
          </p>
        </div>

        {/* Image Section */}
        <div className=" w-fit h-fit items-end ml-auto">
          
            <img src={me} alt="Eden" className="relative z-10 object-contain rounded-lg w-[700px] h-[700px]" />
        </div>
      </div>
    </section>
  );
}
