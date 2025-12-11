import React from "react";
import { useLanguage } from "../LanguageContext";

function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: t('project1Title'),
      description: t('project1Desc'),
      tech: ["React", "JavaScript", "CSS", "Responsive Design"],
      image: process.env.PUBLIC_URL + "/images/project-portfolio.png",
    },
    {
      id: 2,
      title: t('project2Title'),
      description: t('project2Desc'),
      tech: ["HTML", "CSS", "JavaScript"],
      image: process.env.PUBLIC_URL + "/images/project-cs2.png",
      link: "https://kingsey12.github.io/cs.github.io/",
    },
    {
      id: 3,
      title: t('project3Title'),
      description: t('project3Desc'),
      tech: ["Linux", "Bash", "Shell Scripting"],
      image: process.env.PUBLIC_URL + "/images/project-linux.png",
    },
    {
      id: 4,
      title: t('project4Title'),
      description: t('project4Desc'),
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: process.env.PUBLIC_URL + "/images/project-campuseat.png",
    },
    {
      id: 5,
      title: t('project5Title'),
      description: t('project5Desc'),
      tech: ["NestJS", "TypeScript", "SQL", "REST API"],
      image: process.env.PUBLIC_URL + "/images/project-smartpantry.png",
    },
    {
      id: 6,
      title: t('project6Title'),
      description: t('project6Desc'),
      tech: ["Java", "OOP", "Swing"],
      image: process.env.PUBLIC_URL + "/images/project-kiosk.png",
    },
  ];

  return (
    <section className="projects section">
      <div className="section-inner">
        <h2 className="section-title">{t('projectsTitle')}</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t('viewProject')}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
