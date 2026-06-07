import "./Education.css"
export default function Education() {
  return (
    <section className="education" id="education">

      <div className="section-title">
        <p>Academic Background</p>
        <h2>Education</h2>
      </div>

      <div className="education-timeline">

        <div className="education-item">

          <div className="education-dot"></div>

          <div className="education-content">

            <h3>B.Tech in Computer Science</h3>

            <h4>Swami Keshvanand Institute of Technology, Jaipur</h4>

            <span>2023 - 2027</span>

            <p>
              Current CGPA: <strong>9.34</strong>
            </p>

          </div>

        </div>

        <div className="education-item">

          <div className="education-dot"></div>

          <div className="education-content">

            <h3>Senior Secondary (Class XII)</h3>

            <h4>Devendra Bal Bharti School</h4>

            <span>2023</span>

            <p>
              Percentage: <strong>94%</strong>
            </p>

          </div>

        </div>

        <div className="education-item">

          <div className="education-dot"></div>

          <div className="education-content">

            <h3>Secondary (Class X)</h3>

            <h4>Blue Mount International School</h4>

            <span>2021</span>

            <p>
              Percentage: <strong>82%</strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}