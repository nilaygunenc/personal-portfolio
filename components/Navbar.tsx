'use client';

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* SOL */}
      <div className="nav-left">
        <span className="nav-name">Fatma Nilay Günenç</span>
        <span className="nav-title">Computer Engineering</span>
      </div>

      {/* ORTA */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/education">Education</a></li>
<li><a href="/aboutme">About Me</a></li>
        <li><a href="/cv">CV</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/certificates">Certificates</a></li>
      </ul>

      {/* SAĞ */}
      <div className="nav-right">
        <ThemeToggle />
        <a href="/Nilaygunenc_cv.pdf" className="cv-btn" download>
          Download CV
        </a>
      </div>
    </nav>
  );
}
