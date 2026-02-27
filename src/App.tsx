import About from "./components/about";
import FloatingLines  from "./components/animations/FloatingLines";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navBar";
import Projects from "./components/project";
import Skills from "./components/skills";

function App() {
  return (
    <>
      {/* Floating background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
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
