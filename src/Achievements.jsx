import "./Achievements.css"

const achievements = [
  {
    icon: "🏆",
    title: "State Basketball Champion",
    desc: "1st Prize at Udaipur State Championship"
  },
  {
    icon: "🎓",
    title: "CGPA 9.34",
    desc: "Maintaining excellent academic performance"
  },
  {
    icon: "🏅",
    title: "Pragati Scholarship",
    desc: "National scholarship for academic excellence"
  },
  {
    icon: "📚",
    title: "NPTEL Honors Degree",
    desc: "Pursuing Honors through NPTEL courses"
  }
];

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">

      <div className="section-title">
        <p>Highlights</p>
        <h2>Achievements</h2>
      </div>

      <div className="achievement-grid">

        {achievements.map((item) => (
          <div
            className="achievement-card"
            key={item.title}
          >
            <h3>{item.icon}</h3>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}