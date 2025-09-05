import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 w-full items-center text-white">
        {/* Left: Form */}
        <div className="items-center">
          <h2 className="text-2xl font-semibold mb-6">Reach Out</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-600 focus:border-green-500 focus:outline-none py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col justify-center space-y-6 items-center">
          <a
            href="#"
            className="flex items-center space-x-3 text-green-500 hover:underline"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 text-green-500 hover:underline"
          >
            <FaGithub size={24} />
            <span>Github</span>
          </a>
          <a
            href="mailto:someone@example.com"
            className="flex items-center space-x-3 text-green-500 hover:underline"
          >
            <MdEmail size={24} />
            <span>E-Mail</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 text-green-500 hover:underline"
          >
            <FaXTwitter size={24} />
            <span>X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
