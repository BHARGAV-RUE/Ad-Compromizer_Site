import React from "react";

export default function FinalCta({ onOpenModal }) {
  return (
    <section className="cta-final">
      <h2>Get the files</h2>
      <p className="section-sub">
        Includes <code>manifest.json</code>, <code>background.js</code>, <code>content.js</code>,
        the popup, and a full <code>README.md</code> covering the same detail as this page.
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
    </section>
  );
}
