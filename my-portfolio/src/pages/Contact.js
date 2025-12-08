import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("폼 전송 데이터:", form); // 데모: 콘솔 출력
    setSubmitted(true);
  };

  return (
    <section className="card">
      <h2 className="card-title">Contact</h2>
      <p className="card-text">
        이 폼은 과제 데모용으로 제작되었습니다. 현재는 입력된 내용을 콘솔에 출력하며,
        추후 백엔드 연동으로 실제 전송 기능을 추가할 수 있습니다.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">메시지</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          보내기
        </button>
      </form>

      {submitted && (
        <p className="form-success">
          폼이 제출되었습니다! (지금은 콘솔에만 출력됩니다.)
        </p>
      )}

      <div className="card-text" style={{ marginTop: 16 }}>
        <strong>Contact Info</strong>
        <ul className="about-list" style={{ marginTop: 8 }}>
          <li>Email: your_email@gachon.ac.kr</li>
          <li>GitHub: https://github.com/your-github</li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
