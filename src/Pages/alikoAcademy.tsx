import { HashLink as Link } from "react-router-hash-link";
import { ArrowLeft } from "lucide-react";
import E from "../assets/E.png";
export default function AlikoAcademy() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      {/* Back to Projects */}
      <div className="flex flex-row">
        <img src={E} alt="My Logo" className={`w-18 h-18 pt-4 pl-4`} />
        <Link
          smooth
          to="/#works"
          className="mt-auto ml-auto flex flex-row items-center text-green-400 hover:text-white space-x-2 hover:cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>
      </div>
      {/* Project Info */}
      <div className="text-center space-y-6 mt-16">
        <h1 className="text-4xl font-serif">Aliko Academy</h1>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-400 hover:bg-green-500 text-black font-medium px-6 py-2 rounded-full transition"
        >
          View Prototype
        </a>
      </div>

      {/* Preview Image */}
      <div className="mt-10">
        <img
          src="/images/aliko-academy.png" // replace with your image path
          alt="Aliko Academy Preview"
          className="max-w-4xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
