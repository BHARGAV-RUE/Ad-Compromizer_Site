import React from "react";

export default function FinalCta({ onOpenModal }) {
  return (
    <section className="cta-final">
      <h2>Get the files</h2>
      <p className="section-sub">
        Includes <code>README.md</code> covering the details on how to upload extension to chrome extension.
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
