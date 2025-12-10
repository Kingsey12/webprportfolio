import React from "react";
import { useLanguage } from "../LanguageContext";
import avatar from "../assets/avatar.png";

function Hero({ scrollToSection, aboutRef }) {
  const { t } = useLanguage();
  
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-header">
          <div className="avatar-circle">
            <img
              src={avatar}
              alt="Sayfillo profile"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                if (e.currentTarget.parentElement) {
                  const fallback = document.createElement("div");
                  fallback.className = "avatar-fallback";
                  fallback.textContent = "S";
                  e.currentTarget.parentElement.appendChild(fallback);
                }
              }}
            />
          </div>

          <div>
            <h1 className="hero-title">{t('heroTitle')}</h1>
            <p className="hero-subtitle">{t('heroSubtitle')}</p>
          </div>
        </div>

        <p className="hero-text">
          {t('heroDescription')}
        </p>

        <button
          className="cta-button"
          onClick={() => scrollToSection(aboutRef)}
        >
          {t('learnMore')}
        </button>
      </div>
    </section>
  );
}

export default Hero;
