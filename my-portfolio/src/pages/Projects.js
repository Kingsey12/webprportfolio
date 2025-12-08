import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "현재 보고 계신 포트폴리오 프로젝트입니다. React Router로 라우팅을 구성하고, 컴포넌트 중심 구조로 페이지를 구성했습니다. 과제 요구사항에 맞춰 state/이벤트 처리도 일부 적용했습니다.",
    tech: ["React", "React Router", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "CS2 Info Web Page",
    description:
      "Counter-Strike 2의 맵, 무기, 팁 등을 설명하는 간단한 웹 페이지 프로젝트입니다. HTML/CSS/JS로 정적 정보를 깔끔하게 정리하고, 인터랙션을 소규모로 추가하는 것이 목표입니다.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://kingsey12.github.io/cs.github.io/",
  },
  {
    id: 3,
    title: "Linux Practice & Report",
    description:
      "Linux 과목에서 수행한 실습과 리포트를 정리했습니다. 주요 명령어, 쉘 스크립트, 파일 시스템 구조 등을 실습하며, 학습 내용을 문서화했습니다.",
    tech: ["Linux", "Shell Script", "Bash"],
  },
];

function Projects() {
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = showMore ? projects : projects.slice(0, 2);

  return (
    <section className="card">
      <h2 className="card-title">Projects</h2>
      <p className="card-text">
        실제 또는 학습용 프로젝트들을 간략히 정리했습니다. 카드에는 간단한 설명과
        사용 기술(Tech Stack)을 함께 표기했습니다.
      </p>

      <div className="project-list">
        {visibleProjects.map((project) => (
          <article key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">사용 기술: {project.tech.join(", ")}</p>
            {project.link && (
              <p className="card-text" style={{ marginTop: 8 }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  프로젝트 보기
                </a>
              </p>
            )}
          </article>
        ))}
      </div>

      <button
        type="button"
        className="btn-primary"
        style={{ marginTop: 12 }}
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "간략히 보기" : "더 보기"}
      </button>

      <p className="card-text small" style={{ marginTop: 8 }}>
        ※ 과제 확장 시 상태(state), props, 이벤트(onClick 등), 그리고 fetch를
        이용한 데이터 로딩을 점진적으로 적용할 예정입니다.
      </p>
    </section>
  );
}

export default Projects;
