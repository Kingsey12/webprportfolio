import React, { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import logo from "../assets/logo.png";

function Header({ menuOpen, setMenuOpen, scrollToSection, refs }) {
  const [activeSection, setActiveSection] = useState("home");
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "home", ref: refs.homeRef },
        { name: "about", ref: refs.aboutRef },
        { name: "projects", ref: refs.projectsRef },
        { name: "contact", ref: refs.contactRef },
      ];

      for (let section of sections) {
        const el = section.ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">Khasanov Sayfillo</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger" />
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <button
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={() => scrollToSection(refs.homeRef)}
              >
                {t('home')}
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                onClick={() => scrollToSection(refs.aboutRef)}
              >
                {t('about')}
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                onClick={() => scrollToSection(refs.projectsRef)}
              >
                {t('projects')}
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                onClick={() => scrollToSection(refs.contactRef)}
              >
                {t('contact')}
              </button>
            </li>
            <li>
              <button className="lang-toggle" onClick={toggleLanguage}>
                {language === 'en' ? '한국어' : 'EN'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
