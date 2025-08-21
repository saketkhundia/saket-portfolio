import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <h1 className="logo">Saket's Portfolio</h1>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul id="primary-nav" className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <motion.img
          src="https://raw.githubusercontent.com/saketkhundia/saket-portfolio/main/photo.jpg"
          alt="Saket"
          className="profile-pic"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span>Saket Kumar</span>
        </motion.h2>
        <p>Front-End Developer | Java Enthusiast | MCA Student</p>
      </section>

      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          I'm Saket Kumar, currently pursuing MCA (2024-26) from Guru Jambheshwar University of Science and Technology. 
          I graduated in BCA (2021-2024) from MDU Rohtak with an 8.1 CGPA. 
          I love coding, building web applications, and continuously learning new technologies.
        </motion.p>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {["Java", "Python", "JavaScript", "React", "HTML", "CSS", "SQL", "C++", "C"].map(
            (skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education">
        <h2>Education</h2>
        <ul>
          <li>MCA (2024-26) - Guru Jambheshwar University of Science and Technology</li>
          <li>Bachelor's degree in computer science(2021-2024)</li>
          <li>Schooling - Village school & town high school</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {[
            { name: "Chess Game", link: "https://saketkhundia.github.io/chess-game" },
            { name: "Calculator App", link: "https://saketkhundia.github.io/calculator-app/" },
            { name: "Quotes Generator", link: "https://github.com/saketkhundia/Quote-Generator-Using-React-" },
            { name: "To-Do App", link: "https://github.com/saketkhundia" },
            { name: "Music Player", link: "https://github.com/saketkhundia" }
          ].map((proj, index) => (
            <motion.a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              {proj.name}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:saketkhundia21@gmail.com">saketkhundia21@gmail.com</a></p>
        <p>Phone: 8053457330</p>
        <p>GitHub: <a href="https://github.com/saketkhundia" target="_blank" rel="noreferrer">github.com/saketkhundia</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/saketkhundia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">linkedin.com/in/saket</a></p>
      </section>

      <footer>© 2025 Saket Kumar | Portfolio</footer>
    </div>
  );
}

export default App;
