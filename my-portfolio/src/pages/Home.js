import React from "react";

function Home() {
  return (
    <section className="card">
      <div className="profile-header">
        <div className="avatar-circle">
          <img
            src={process.env.PUBLIC_URL + "/avatar.jpg"}
            alt="Sayfullo profile"
          />
        </div>

        <div className="profile-info">
          <h2 className="profile-name">Sayfullo</h2>
          <p className="profile-sub">Computer Engineering Student</p>
          <p className="profile-sub">Gachon University</p>
        </div>
      </div>
      <h2 className="card-title">포트폴리오 소개</h2>
      <p className="card-text">
        안녕하세요! 저는 가천대학교 컴퓨터공학부 학생 사이빌로(Sayfullo)입니다
        (학번: 202339764). 이 사이트는 React 기반의 포트폴리오 프로젝트로,
        수업 과제로 제작되었습니다.
      </p>
      <p className="card-text">
        이 포트폴리오는 React Router를 이용한 라우팅과 컴포넌트 구조를 중심으로
        구성되어 있으며, 일부 페이지에서는 <em>state</em>, <em>props</em>, 이벤트
        처리 등을 적용했습니다. 점진적으로 기능을 확장하는 학습 방식을 따릅니다.
      </p>
      <p className="card-text">
        관심 분야는 웹 개발(React, 프론트엔드), 백엔드(Node.js), Linux, 알고리즘
        등이며, CS 전반에 대한 기초와 응용을 꾸준히 다지고 있습니다.
      </p>
    </section>
  );
}

export default Home;
