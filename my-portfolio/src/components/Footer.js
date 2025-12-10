import React from "react";
import { useLanguage } from "../LanguageContext";

function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <p>© {new Date().getFullYear()} Khasanov Sayfillo Portfolio</p>
            <p className="footer-text">{t('footerText')}</p>
          </div>

          <div className="footer-links">
            <a href="mailto:sayfillo@gachon.ac.kr">{t('contactEmail')}</a>
            <a href="https://github.com/Kingsey12" target="_blank" rel="noreferrer">
              {t('contactGithub')}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              {t('contactLinkedin')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
