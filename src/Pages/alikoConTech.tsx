
import img1 from "../assets/contechmock1.png";
import img2 from "../assets/contechmock2.png";
export default function AlikoConTech() {
  const images = [img1, img1, img2, img1, img2];

  // Duplicate images to make it seamless
  const scrollImages = [...images, ...images];
  return (
    <div className="min-h-screen  bg-[#000000] text-white flex flex-col relative">
      
      {/* Project Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen items-center mb-10">
        <div className="flex flex-col items-center md:space-y-60 md:mt-16 md:ml-10 md:min-h-screen">
          <h1 className="text-6xl mb-4 md:my-auto md:text-8xl font-serif">AlikoHub Con-Tech</h1>
          <a
            href="https://www.figma.com/proto/M1evx41iZFunESERduKIz2/MyPortfolio?node-id=176-807&t=TNOCRZzBOOGknvtp-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=176%3A1191"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block md:mb-36 mr-auto  bg-green-400 hover:bg-green-500 text-black font-medium px-6 py-2 rounded-full transition"
          >
            View Prototype
          </a>
        </div>

        {/* Preview Image */}
        <div className="w-full mt-10 ml-auto">
          <img
            src={img1}
            alt="Aliko Academy Preview"
            className="w-150 rounded-lg shadow-lg mx-auto"
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-10 ml-auto w-fit bg-green-400 hover:bg-green-500 text-black font-medium px-6 py-2 rounded-full transition"
          >
            View Prototype
          </a>
        </div>
      </div>
      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <img
          src={img2}
          alt="Aliko Academy Overview"
          className="w-150 order-2 md:order-1 rounded-lg shadow-lg"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-serif mt-10">Overview</h2>
          <p className="mt-4 text-lg">
            AlikoHub Academy is an e-learning platform designed to help learners
            acquire in-demand technical and professional skills in technology,
            health, and engineering. The platform emphasizes career readiness,
            certification, and hands-on project experience, inspired by leading
            global platforms such as Coursera, Udemy, and Pluralsight.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center md:px-10">
        <div>
          <h2 className="text-4xl font-serif mt-10">Design Approach</h2>
          <p className="mt-4 text-lg">
            The platform design highlights clarity, engagement, and
            accessibility, focusing on: Vibrant visual identity (yellow, blue,
            and orange tones) for youthful energy. Clear navigation for seamless
            access to courses and programs. Inclusive UX supporting both English
            and Amharic users. Modern UI featuring interactive course cards,
            real-life visuals, and responsive design.
          </p>
        </div>
        <img
          src={img2}
          alt="Aliko Academy Overview"
          className="w-150 rounded-lg shadow-lg"
        />
      </div>
      <div className="overflow-hidden relative w-full bg-black py-4">
      <div
        className="flex animate-scroll-x"
        style={{
          width: `${scrollImages.length * 400}px`, // each image width * total
        }}
      >
        {scrollImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`scroll-img-${i}`}
            className="w-[400px] h-[300px] object-cover rounded-lg mx-2"
          />
        ))}
      </div>
    </div>
    </div>
  );
}
