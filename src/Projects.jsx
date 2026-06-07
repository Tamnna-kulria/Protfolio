import "./Projects.css";
import financeImg from './assets/finance.png';
import agriImg from "./assets/agri.png"
import lmsImg from "./assets/lms.png"

const projects = [
  {
    title: "Finance Tracker",
    image: financeImg,
    description:
      "A MERN stack application to manage income, expenses, and financial records with an intuitive dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Tamnna-kulria/EXPENSE_TRACKER",
    live: "https://expense-tracker-sj1d.vercel.app/",
  },

  {
    title: "Agriculture Management System",
    image: agriImg,
    description:
      "A web-based platform that helps farmers manage crop data, resources, and agricultural activities.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Tamnna-kulria/Agriculture",
    live: "https://agriculture-three-peach.vercel.app/",
  },

  {
    title: "Crime Report Classifier",
    image: lmsImg,
    description:
      "A Python-based project that classifies crime reports and suggests relevant IPC sections.",
    tech: ["Python", "Tkinter"],
    github: "https://github.com/Tamnna-kulria/LMS",
    live: "https://lms-theta-one.vercel.app/",
  },

];

export default function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-title">
        <p>My Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}