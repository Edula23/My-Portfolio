import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// const routers = createBrowserRouter([
//   { path: "/", element: <AcademyHomePage /> },
//   { path: "/about", element: <AcademyAboutPage /> },
//   { path: "/services", element: <AcademyHomePage /> },
//   { path: "/courses", element: <AboutCoursesPage /> },
//   { path: "/contact-us", element: <AcademyContactUsPage /> },
//   { path: "/sampleCourse", element: <SampleCoursePage /> }
// ]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
