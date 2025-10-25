import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import email from "../assets/email.png"
import x from "../assets/twitter.png"
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1, ease:"easeOut"}}
    viewport={{once:true}}
    >
    <div id="contact" className="bg-black mt-10 mb-10 flex items-center justify-center md:py-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 w-full  items-start md:items-center text-white">
        {/* Left: Form */}
        <div className="items-center">
          <h2 className="text-2xl font-semibold mb-6">Reach Out</h2>
          <form className="flex flex-col space-y-4" action="https://formspree.io/f/mvgbykqb" method="POST">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-500 focus:outline-none py-2"
              />
            
            
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-500 focus:outline-none py-2"
              />
            
            
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-500 focus:outline-none py-2"
              />
            
            <button
              type="submit"
              className="bg-green-500 ml-auto px-4 py-1 md:ml-0 text-black md:px-6 md:py-2 rounded-full w-1/6 hover:bg-green-400 hover:cursor-pointer transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Social Links */}
        <div className="hidden md:flex flex-col justify-end w-1/2 ml-auto mt-16 md:mt-0 space-y-6 items-start md:ml-40">
          <a
            href="https://www.linkedin.com/in/eden-alemayehu-886991294/"
            className="hidden md:flex items-center space-x-3 text-white hover:underline"
          >
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
            <span >LinkedIn</span>
          </a>
          <a
            href="https://www.linkedin.com/in/eden-alemayehu-886991294/"
            className="md:hidden flex items-center w-1/2 justify-between text-white hover:underline"
          >
            <span>LinkedIn</span>
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
          </a>
          <a
            href="https://github.com/Edula23/"
            className="hidden md:flex items-center space-x-3 text-white hover:underline"
          >
            <img src={github} alt="Github" className="w-10 h-10" />
            <span>Github</span>
          </a>
          <a
            href="https://github.com/Edula23/"
            className="md:hidden flex items-center w-1/2 justify-between space-x-3 text-white hover:underline"
          >
            <span>Github</span>
            <img src={github} alt="Github" className="w-10 h-10" />
          </a>
          <a
            href="mailto:edengebeta210@gmail.com"
            className="hidden md:flex items-center space-x-3 text-white hover:underline"
          >
            <img src={email} alt="E-Mail" className="w-10 h-10" />
            <span>E-Mail</span>
          </a>
          <a
            href="mailto:edengebeta210@gmail.com"
            className="flex md:hidden items-center w-1/2 justify-between text-white hover:underline"
          >
            <span>E-Mail</span>
            <img src={email} alt="E-Mail" className="w-10 h-10" />
            
          </a>
          <a
            href="https://x.com/edenAlemayehuu/"
            className="hidden md:flex items-center space-x-3 text-white hover:underline"
          >
            <img src={x} alt="X" className="w-10 h-10" />
            <span>X</span>
          </a>
          <a
            href="https://x.com/edenAlemayehuu/"
            className="md:hidden flex w-1/2 justify-between items-center text-white hover:underline"
          >
            <span>X</span>
            <img src={x} alt="X" className="w-10 h-10" />            
          </a>
        </div>
        <div className="flex flex-row w-full justify-between mt-10 md:hidden">
          <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
          <img src={github} alt="Github" className="w-10 h-10" />
          <img src={email} alt="E-Mail" className="w-10 h-10" />
          <img src={x} alt="X" className="w-10 h-10" />
        </div>
      </div>
    </div>
    </motion.div>
  );
}
