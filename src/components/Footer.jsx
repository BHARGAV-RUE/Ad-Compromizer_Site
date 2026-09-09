import React from "react";

const OWNER_EMAIL = "bhargavkallepally9@gmail.com";
const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/u/0/?fs=1&to=${OWNER_EMAIL}&tf=cm`;

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-about">
          <p className="footer-heading">Know more about me</p>

          <p className="footer-text">
            Built and maintained by{" "}
            <a
              href="https://bhargav-rue.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-name-link"
            >
              Bhargav Kallepally
            </a>
            .
          </p>
        </div>

        <ul className="footer-links">
          {/* Email */}
          <li>
            <a
              href={EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 6h18v12H3z" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Email
            </a>
          </li>

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/BHARGAV-RUE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.28 5.68.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.67.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              GitHub
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://www.linkedin.com/in/bhargav-kallepally-816504241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM.4 8.24H4.6V23H.4V8.24zM8.34 8.24h4.02v2.01h.06c.56-1.06 1.93-2.18 3.98-2.18 4.26 0 5.05 2.8 5.05 6.44V23h-4.2v-6.68c0-1.6-.03-3.65-2.22-3.65-2.23 0-2.57 1.74-2.57 3.54V23h-4.2V8.24z" />
              </svg>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <p className="footer-note">
        Ad Compromizer runs entirely on your device — nothing is sent anywhere
        unless you choose to reach out below.
      </p>
    </footer>
  );
}