import "./Contact.css"



export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <a href="mailto:kulriatamnna@gmail.com">
          📧 Email
        </a>

        <a
          href="https://linkedin.com/in/tamnna-kulria"
          target="_blank"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/Tamnna-kulria"
          target="_blank"
        >
          💻 GitHub
        </a>

        <a
          href="https://leetcode.com/tamnnakulria"
          target="_blank"
        >
          🧩 LeetCode
        </a>

      </div>

    </section>
  );
}