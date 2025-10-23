import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import About from "./components/about";
import Works from "./components/works";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import travelHabesha from "./assets/travelHabesha.png";
import TravelHabesha from "./Pages/travelHabesha";
import campusGebeta from "./assets/CampusGebeta.png";
import alikoAcademy from "./assets/alikoAcademy.png";
import CampusGebeta from "./Pages/campusGebeta";
import alikoContech from "./assets/alikoCon-Tech.png";
import AlikoConTech from "./Pages/alikoConTech";
import AlikoAcademy from "./Pages/alikoAcademy";
import closetMatch from "./assets/portfolioImgClosetMatch.png";
function App() {
  return (
    <BrowserRouter>
    <div className="bg-black text-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
      <Hero />
      <Works 
      uxiProjects={[
          { title: "Travel Habesha", image: travelHabesha, description: "This travel website design blends modern  UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/travel-habesha" },
          { title: "Aliko Academy", image: alikoAcademy, description: "This travel website design blends modern  UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/aliko-academy" },
          { title: "Campus Gebeta", image: campusGebeta, description: "This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/campus-gebeta" },
          { title: "Aliko Con-Tech", image: alikoContech, description: "This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/aliko-con-tech" }
        ]}
      frEnProjects={[
          { title: "Travel Habesha", image: travelHabesha, description: "This travel website design blends modern  UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/travel-habesha" },
          { title: "Campus Gebeta", image: campusGebeta, description: "This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/campus-gebeta" },
          { title: "Aliko Con-Tech", image: alikoContech, description: "This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/aliko-con-tech" },
          { title: "Closet Match", image: closetMatch, description: "This travel website design blends modern UI/UX principles with cultural flair, offering users a seamless journey from exploration to booking.",  link: "/closet-match" },
        ]}/>
      <About />
      <Contact />
      <Footer />
      </>
        } />
        <Route path="/travel-habesha" element={<TravelHabesha />} />
        <Route path="/campus-gebeta" element={<CampusGebeta />} />
        <Route path="/aliko-con-tech" element={<AlikoConTech />} />
        <Route path="/aliko-academy" element={<AlikoAcademy />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;