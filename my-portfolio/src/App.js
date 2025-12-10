import React, { useRef, useState } from "react";
import "./App.css";
import { LanguageProvider } from "./LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    setMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LanguageProvider>
      <div className="app">
        <Header
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, projectsRef, contactRef }}
        />

        <main>
          <section ref={homeRef}>
            <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} />
          </section>

          <section ref={aboutRef}>
            <About />
          </section>

          <section ref={projectsRef}>
            <Projects />
          </section>

          <section ref={contactRef}>
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
