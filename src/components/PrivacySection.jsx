import React from "react";

const PERMISSIONS = [
  { name: "tabs", why: "Read/update tab URLs, create and remove tabs" },
  { name: "storage", why: "Save your Primary Tab, Protection state, and counters locally on your device" },
  { name: "webNavigation", why: "Notice when the Primary Tab commits a new page" },
  { name: "webRequest", why: "Catch HTTP-level redirect chains directly" },
  { name: "windows", why: "Refocus the right window if an ad opens one" },
  { name: "contextMenus", why: "Right-click shortcuts for the same actions" },
];

export default function PrivacySection() {
  return (
    <section id="privacy">
      <h2>Privacy</h2>
      <p className="section-sub">
        Everything runs locally in your browser. Every permission maps to a specific job — none of
        them read page content, forms, or network payloads, and nothing is sent to any server.
      </p>
      <table>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {PERMISSIONS.map((p) => (
            <tr key={p.name}>
              <td className="perm">{p.name}</td>
              <td className="why">{p.why}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
