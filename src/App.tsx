import Hero from "./components/hero";
import About from "./components/about";
import Works from "./components/works";
import Contact from "./components/contact";
function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
