import React from "react";

/**
 * Placeholder for a Google AdSense unit.
 *
 * Reserves 300x600 (Half Page) on wide viewports and 160x600
 * (Wide Skyscraper) on medium ones — both are standard IAB sizes,
 * and side-rail units at this size tend to carry some of the best
 * CPMs of any standard placement because of their size/viewability.
 * Hidden below ~1100px since there's no honest way to fit a
 * skyscraper next to the content without breaking the layout.
 *
 * TO GO LIVE:
 * Replace the placeholder <div> below with your real AdSense unit,
 * e.g.:
 *
 * <ins className="adsbygoogle"
 *      style={{ display: "inline-block", width: 300, height: 600 }}
 *      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *      data-ad-slot="XXXXXXXXXX" />
 *
 * and call `(window.adsbygoogle = window.adsbygoogle || []).push({})`
 * in a useEffect after mount.
 */
export default function AdSlot({ side }) {
  return (
    <aside className={`ad-rail ad-rail-${side}`} aria-label="Advertisement">
      <div className="ad-slot ad-slot-large">
        <span className="ad-slot-label">Ad space</span>
        <span className="ad-slot-size">300 × 600</span>
      </div>
      <div className="ad-slot ad-slot-medium">
        <span className="ad-slot-label">Ad space</span>
        <span className="ad-slot-size">160 × 600</span>
      </div>
    </aside>
  );
}
