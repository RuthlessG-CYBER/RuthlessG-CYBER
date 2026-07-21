import { useEffect } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navBar";
import Projects from "./components/project";
import Skills from "./components/skills";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Clean Professional Background */}
      <div className="fixed inset-0 -z-10 bg-[#fafafa]">
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-[600px] bg-cyan-100/30 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-[600px] bg-sky-100/30 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen font-sans text-gray-900 selection:bg-cyan-200 selection:text-cyan-900">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
