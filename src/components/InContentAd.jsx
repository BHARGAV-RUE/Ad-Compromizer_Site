import React from "react";

/**
 * In-content ad placeholder for mobile/tablet, where there's no room
 * for the 300x600 / 160x600 side rails (those are hidden below 1100px
 * in index.css). 300x250 (Medium Rectangle) is the standard choice
 * for this spot — it fits comfortably even on a 320px-wide screen
 * and has strong fill rates for in-content placements.
 *
 * TO GO LIVE, replace the placeholder <div> below with a real
 * AdSense unit, e.g.:
 *
 * <ins className="adsbygoogle"
 *      style={{ display: "inline-block", width: 300, height: 250 }}
 *      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *      data-ad-slot="XXXXXXXXXX" />
 *
 * and push it via `(window.adsbygoogle = window.adsbygoogle || []).push({})`
 * in a useEffect after mount.
 */
export default function InContentAd() {
  return (
    <div className="in-content-ad" aria-label="Advertisement">
      <span className="ad-slot-label">Ad space</span>
      <span className="ad-slot-size">300 × 250</span>
    </div>
  );
}