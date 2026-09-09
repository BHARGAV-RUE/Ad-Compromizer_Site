import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "what", label: "What is it?" },
  { id: "install", label: "Install" },
  { id: "use", label: "Use" },
  { id: "privacy", label: "Privacy" },
];

export default function Navbar({ onDirectDownload }) {
  const [active, setActive] = useState("what");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-wrap">
        <a className="brand" href="#top">
          Ad Compromizer
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`nav-link ${active === s.id ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a
            href="#"
            className="btn btn-primary btn-small"
            onClick={(e) => {
              e.preventDefault();
              onDirectDownload();
            }}
          >
            Download
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
