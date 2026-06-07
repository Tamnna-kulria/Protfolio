import "./Experience.css"

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <p>Professional Journey</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-timeline">

        {/* Playtown Studio */}

        <div className="experience-item">
          <div className="experience-dot"></div>

          <div className="experience-content">

            <h3>Full Stack MERN Developer Intern</h3>

            <h4>
              Playtown Studio
       
            </h4>

            <span className="experience-date">
              May 2025 
            </span>

            <div className="tech-stack">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>

            <ul>
              <li>
                Developed full-stack MERN applications
                with scalable architecture.
              </li>

              <li>
                Built reusable React components and
                responsive user interfaces.
              </li>

              <li>
                Designed and integrated REST APIs
                using Express.js and Node.js.
              </li>

              <li>
                Managed MongoDB collections,
                schemas and CRUD operations.
              </li>

              <li>
                Collaborated with developers using
                Git and GitHub workflows.
              </li>
            </ul>

          </div>
        </div>

        {/* Kistechnosoftware */}

        <div className="experience-item">
          <div className="experience-dot"></div>

          <div className="experience-content">

            <h3>Web Development Intern</h3>

            <h4>Kistechnosoftware</h4>

            <span className="experience-date">
              June 2024 - July 2024
            </span>

            <div className="tech-stack">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
            </div>

            <ul>
              <li>
                Developed responsive web pages using
                HTML, CSS and JavaScript.
              </li>

              <li>
                Improved website UI/UX and optimized
                layouts for better usability.
              </li>

              <li>
                Assisted in debugging and testing
                web applications.
              </li>

              <li>
                Worked on real-world projects and
                collaborated with senior developers.
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}