import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact section">
      <div className="section-inner">
        <h2 className="section-title">{t('contactTitle')}</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>{t('contactSubtitle')}</h3>

            <div className="contact-links">
              <a href="mailto:sayfillo@gachon.ac.kr" className="contact-link">
                <span className="icon">✉</span> {t('contactEmail')}: sayfillo@gachon.ac.kr
              </a>
              <a
                href="https://github.com/Kingsey12"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span className="icon">⚙</span> {t('contactGithub')}: Kingsey12
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="icon">👤</span> {t('contactLinkedin')}
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              {t('sendButton')}
            </button>

            {submitted && (
              <p className="form-success">✓ {t('successMessage')}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
