import React from "react";
import { useLanguage } from "../LanguageContext";

function About() {
  const { t } = useLanguage();
  
  return (
    <section className="about section">
      <div className="section-inner">
        <h2 className="section-title">{t('aboutTitle')}</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>{t('aboutMeTitle')}</h3>
            <p>{t('aboutMeText')}</p>
          </div>

          <div className="about-card">
            <h3>{t('aboutSkillsTitle')}</h3>
            <p>{t('aboutSkillsText')}</p>
          </div>

          <div className="about-card">
            <h3>{t('aboutInterestsTitle')}</h3>
            <p>{t('aboutInterestsText')}</p>
          </div>

          <div className="about-card">
            <h3>{t('aboutLearningTitle')}</h3>
            <p>{t('aboutLearningText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

