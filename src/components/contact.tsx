import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import email from "../assets/email.png"
import x from "../assets/twitter.png"

export default function ContactForm() {
  return (
    <div id="contact" className="bg-black min-h-screen flex items-center justify-center py-6 px-20">
      <div className="grid md:grid-cols-2 gap-8 w-full items-center text-white">
        {/* Left: Form */}
        <div className="items-center">
          <h2 className="text-2xl font-semibold mb-6">Reach Out</h2>
          <form className="space-y-4" action="https://formspree.io/f/mvgbykqb" method="POST">
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
              className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 hover:cursor-pointer transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col justify-center space-y-6 items-start ml-40">
          <a
            href="https://www.linkedin.com/in/eden-alemayehu-886991294/"
            className="flex items-center space-x-3 text-white hover:underline"
          >
            <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
            <span >LinkedIn</span>
          </a>
          <a
            href="https://github.com/Edula23/"
            className="flex items-center space-x-3 text-white hover:underline"
          >
            <img src={github} alt="Github" className="w-10 h-10" />
            <span>Github</span>
          </a>
          <a
            href="mailto:edengebeta210@gmail.com"
            className="flex items-center space-x-3 text-white hover:underline"
          >
            <img src={email} alt="E-Mail" className="w-10 h-10" />
            <span>E-Mail</span>
          </a>
          <a
            href="https://x.com/edenAlemayehuu/"
            className="flex items-center space-x-3 text-white hover:underline"
          >
            <img src={x} alt="X" className="w-10 h-10" />
            <span>X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
