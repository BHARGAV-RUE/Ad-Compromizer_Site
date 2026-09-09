import React, { useEffect, useState } from "react";

const STEPS = [
  "Allow the redirect",
  "Detect it happened",
  "Escape the chain",
  "Restore your page",
];

export default function Hero({ zipSizeLabel, onOpenModal }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((i) => (i + 1) % STEPS.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Chrome extension — Manifest V3</p>
          <h1>Stop losing your tab to ad redirects.</h1>
          <p className="tagline">We don't stop the redirect. We escape from it.</p>
          <p className="lead">
            Ad Compromizer watches one tab you choose. When an ad hijacks it, the redirect is
            allowed to happen, caught, and reversed — you land right back where you were.
          </p>
          <a
            className="btn btn-primary"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onOpenModal();
            }}
          >
            Download AdCompromizer.zip
          </a>
          <span className="btn-note">{zipSizeLabel} · unpacked, ready to load in Chrome</span>
        </div>

        <div className="flow-card">
          {STEPS.map((step, i) => (
            <React.Fragment key={step}>
              <div className={`flow-step ${activeStep === i ? "active" : ""}`}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{step}</span>
              </div>
              {i < STEPS.length - 1 && <div className="flow-arrow">↓</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
