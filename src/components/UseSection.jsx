import React from "react";
import StepList from "./StepList.jsx";

const STEPS = [
  {
    title: "Set a Primary Tab",
    body: (
      <>
        Open the page you want to protect, click the extension icon, then{" "}
        <strong>Set This as Primary Tab</strong>. The button turns blue and reads "Remove Primary"
        while you're on it.
      </>
    ),
  },
  {
    title: "Enable Protection",
    body: (
      <>
        Press <strong>Enable Protection</strong> in the popup. It only works once a Primary Tab is
        set.
      </>
    ),
  },
  {
    title: "Browse as normal",
    body: (
      <>
        If the Primary Tab gets redirected, it snaps back on its own. Watch the{" "}
        <strong>Redirects Detected</strong> counter in the popup climb each time.
      </>
    ),
  },
  {
    title: "Deal with popped-up tabs",
    body: "A new tab opened by an ad gets the 😈 floating button and your focus returns to the Primary Tab. Click 😈 on that tab if you actually want to keep it — it turns into 😺 and won't be touched by clearing.",
  },
  {
    title: "Clear or turn off",
    body: (
      <>
        Use <strong>Clear EVIL Redirect Tabs</strong> to close every flagged tab at once, or{" "}
        <strong>Disable Protection</strong> to pause without losing your Primary Tab setup.
      </>
    ),
  },
];

export default function UseSection() {
  return (
    <section id="use">
      <h2>Use it</h2>
      <p className="section-sub">Two switches, then let it run in the background.</p>
      <StepList steps={STEPS} />
    </section>
  );
}
