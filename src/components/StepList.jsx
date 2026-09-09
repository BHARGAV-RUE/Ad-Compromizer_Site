import React from "react";

export default function StepList({ steps }) {
  return (
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.title}>
          <div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
