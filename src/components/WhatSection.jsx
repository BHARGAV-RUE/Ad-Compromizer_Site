import React from "react";

export default function WhatSection() {
  return (
    <section id="what">
      <h2>What it actually does</h2>
      <p className="section-sub">
        Not a blacklist, not a request blocker. It reacts after the fact, on one tab you pick.
      </p>
      <div className="row-list">
        <div className="row">
          <div className="k">Primary Tab</div>
          <div className="v">
            The one tab you're protecting. Independent from Protection — you can mark a tab
            Primary without turning anything on yet.
          </div>
        </div>
        <div className="row">
          <div className="k">Protection</div>
          <div className="v">
            The on/off switch for monitoring. Only turns on once a Primary Tab exists.
          </div>
        </div>
        <div className="row">
          <div className="k">Same-tab redirects</div>
          <div className="v">
            If the Primary Tab itself gets navigated away — 301/302, <code>window.location</code>,{" "}
            <code>location.replace()</code>, meta refresh, chained redirects — it's forced straight
            back to the last legitimate URL.
          </div>
        </div>
        <div className="row">
          <div className="k">New-tab redirects</div>
          <div className="v">
            If an ad opens a separate tab instead, that tab is tagged{" "}
            <span className="badge">
              <span className="dot dot-evil"></span>EVIL
            </span>{" "}
            with a floating 😈 button, and focus jumps back to your Primary Tab automatically.
          </div>
        </div>
        <div className="row">
          <div className="k">Clearing up</div>
          <div className="v">
            One click closes every tab still marked EVIL. Anything you've flipped to{" "}
            <span className="badge">
              <span className="dot dot-good"></span>NOT_EVIL
            </span>{" "}
            (😺) is left open.
          </div>
        </div>
      </div>
    </section>
  );
}
