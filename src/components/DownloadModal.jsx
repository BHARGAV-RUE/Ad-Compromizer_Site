import React, { useEffect, useRef, useState } from "react";

const OWNER_EMAIL = "bhargavkallepally9@gmail.com";

export default function DownloadModal({ open, onClose, onDownload }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (open && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape" && open) onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  function reset() {
    setEmail("");
    setMessage("");
  }

  function handleSkip() {
    onDownload();
    onClose();
    reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onDownload();

    if (email.trim() || message.trim()) {
      const subject = "Ad Compromizer feedback" + (email ? ` from ${email}` : "");
      const bodyLines = [];
      if (email) bodyLines.push(`From: ${email}`);
      if (message) bodyLines.push("", message);
      const body = bodyLines.join("\n");

      const gmailUrl =
        `https://mail.google.com/mail/u/0/?fs=1&to=${encodeURIComponent(OWNER_EMAIL)}` +
        `&tf=cm&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(gmailUrl, "_blank", "noopener");
    }

    onClose();
    reset();
  }

  return (
    <div
      className={`modal-overlay ${open ? "open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <p className="eyebrow">Before you go</p>
        <h3 id="modalTitle">Say hi while it downloads</h3>
        <p className="modal-sub">
          Optional — leave your email and a note if you hit a bug or want a feature. Your download
          starts either way.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userEmail">Email</label>
          <input
            id="userEmail"
            type="email"
            placeholder="you@example.com"
            value={email}
            ref={emailInputRef}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="userMessage">Message</label>
          <textarea
            id="userMessage"
            rows={3}
            placeholder="Found a bug, have an idea, or just say hi…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="modal-actions">
            <button type="button" className="btn-text" onClick={handleSkip}>
              Skip and download
            </button>
            <button type="submit" className="btn btn-primary btn-small">
              Send and download
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
