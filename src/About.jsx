import "./About.css"

export default function About() {
  return (
    <section className="about" id="about">

      <div className="section-title">
        <p>Get To Know Me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        <div className="about-text">

          <p>
            I am a Computer Science student at
            SKIT Jaipur with a CGPA of 9.34.
          </p>

          <p>
            I enjoy building full-stack web
            applications using React, Node.js,
            Express.js and MongoDB.
          </p>

          <p>
            Currently preparing for software
            engineering placements while improving
            my DSA and development skills.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">
            <h3>9.34</h3>
            <p>CGPA</p>
          </div>


        <div className="about-card">
            <h3>🏆</h3>
            <p>State Champion(BasketBall)</p>
          </div>

         

          <div className="about-card">
            <h3>4+</h3>
            <p>Projects</p>
          </div>

       

        </div>

      </div>

    </section>
  );
}