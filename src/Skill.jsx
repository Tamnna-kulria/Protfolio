import "./Skill.css"

const skills = [
  "C",
  "C++",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "DBMS",
  "Operating System",
  "OOPs",
  "DSA"
];

export default function Skills() {

  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <p>My Toolbox</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill}
          >
            {skill}
          </div>

        ))}

      </div>

    </section>
  );
}