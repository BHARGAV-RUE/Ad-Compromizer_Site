import React from "react";
import StepList from "./StepList.jsx";

const STEPS = [
  {
    title: "Download and unzip",
    body: (
      <>
        Get <code>AdCompromizer.zip</code> above and extract it anywhere on your machine.
      </>
    ),
  },
  {
    title: "Open Chrome's extensions page",
    body: (
      <>
        Go to <code>chrome://extensions</code> in your address bar.
      </>
    ),
  },
  {
    title: "Turn on Developer mode",
    body: "Flip the toggle in the top-right corner of that page.",
  },
  {
    title: "Load the folder",
    body: (
      <>
        Click <strong>Load unpacked</strong> and select the unzipped <code>AdCompromizer</code>{" "}
        folder.
      </>
    ),
  },
  {
    title: "Pin it",
    body: "Click the puzzle-piece icon in Chrome's toolbar and pin Ad Compromizer so it's one click away.",
  },
];

export default function InstallSection() {
  return (
    <section id="install">
      <h2>Install it</h2>
      <p className="section-sub">No account, no store listing yet — load it straight from the folder.</p>
      <StepList steps={STEPS} />
    </section>
  );
}
