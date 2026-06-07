import "./Navbar.css"
export default function Navbar() {

  const links = [
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact"
  ];

  return (
    <nav className="navbar">

      <h2 className="logo">
        Tamnna
      </h2>

      <ul>

        {links.map((link) => (

          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          </li>

        ))}

      </ul>

    </nav>
  );
}