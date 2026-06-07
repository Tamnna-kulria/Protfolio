import "./First.css";
import myImage from "./assets/Me.jpeg";
import resume from "./assets/resume.pdf";

export default function First() {
  return (
    <section className="hero">

      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <p className="subtitle">Full Stack Developer</p>

          <h1>
            Tamnna <span>Kulria</span>
          </h1>

          <p className="description">
            Computer Science student at SKIT Jaipur.
            Passionate about building modern web applications using React, Node.js,
            Express.js and MongoDB.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">View Projects</a>

          <a
             href={resume} download className="secondary">
             Download Resume
          </a>
          </div>

          <div className="stats">
            <div>
              <h3>9.34</h3>
              <p>CGPA</p>
            </div>

            <div>
              <h3>4+</h3>
              <p>Projects</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE BIG IMAGE */}
        <div className="hero-image">
          <img src={myImage} alt="Tamnna Kulria" />
        </div>

      </div>
    </section>
  );
}
