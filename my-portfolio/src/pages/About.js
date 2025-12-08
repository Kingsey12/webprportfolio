import React from "react";

function About() {
  return (
    <section className="card">
      <h2 className="card-title">About Me</h2>
      <p className="card-text">
        저는 가천대학교 컴퓨터공학부에 재학 중인 사이빌로(Sayfullo)입니다.
        이 포트폴리오는 React 수업 과제로 제작되었으며, 간단한 라우팅과 컴포넌트
        중심 구조를 바탕으로 점차 기능을 확장하는 것을 목표로 합니다.
      </p>

      <ul className="about-list">
        <li>이름: 사이빌로 (Sayfullo)</li>
        <li>전공: 컴퓨터공학부</li>
        <li>학번: 202339764</li>
        <li>관심 분야: 웹 개발(React, 프론트엔드), 백엔드(Node.js), Linux, 알고리즘</li>
        <li>사용 언어: Java, JavaScript, Python, C/C++</li>
      </ul>

      <p className="card-text">
        앞으로 풀스택 개발자로 성장하는 것을 목표로 하고 있습니다. 기본기를
        탄탄히 다지면서, React 프론트엔드와 Node.js 백엔드에 대한 이해를 넓히고,
        운영체제(Linux)와 알고리즘 역량도 강화하려고 합니다.
      </p>
    </section>
  );
}

export default About;
