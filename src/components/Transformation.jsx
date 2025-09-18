import React, { useState } from "react";
import "./Transformation.css";

export default function Transformation() {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((s) => !s);

  return (
    <div id="how" className="transformation-stage">
      <h2 className="section-title">The Tranformation</h2>
        <p className="sub-content">Let automation take over the hard work, so you can focus on what maters.</p>
      <div
        className={`flip-scene ${flipped ? "is-flipped" : ""}`}
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggle();
        }}
        aria-pressed={flipped}
        aria-label="Transformation card. Click to flip between manual and app dashboard">
          
        <div className="flip-card">
          {/* FRONT: Manual (Before) */}
          <div className="side side-front">
            <div className="manual-wrapper">
              <div className="manual-top">
                <div className="paper-binding" />
                <div className="manual-title">Hand-filled Planner</div>
              </div>

              <div className="manual-grid" aria-hidden={flipped}>
                {Array.from({ length: 35 }).map((_, i) => (
                  <div key={i} className="manual-cell">
                    <span className="manual-day">{i % 31 === 0 ? "" : i + 1}</span>
                    <span className="manual-x">✕</span>
                  </div>
                ))}
              </div>

              <div className="manual-footer">
                <div className="sticky-note">Notes: Marked by hand</div>
              </div>
            </div>

            <div className="side-tag before-tag">Before</div>
          </div>

          {/* BACK: App Dashboard (After) */}
          <div className="side side-back">
            <div className="app-wrapper">
              <aside className="app-sidebar">
  <div className="app-logo">Sciptron</div>
  <ul className="app-menu">
    <li className="active">Omratomo</li>
    <li>Sovraonat</li>
    <li>Simolates</li>
    <li>Desorat</li>
  </ul>
</aside>


              <main className="app-main">
                <div className="app-header">
                  <div className="month">September 2025</div>
                  <div className="header-actions">
                    <button className="btn small">‹</button>
                    <button className="btn small">›</button>
                    <button className="btn primary">+ New</button>
                  </div>
                </div>

                <div className="app-calendar">
                  <div className="weekdays">
                    <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                  </div>

                  <div className="calendar-grid" aria-hidden={!flipped}>
                    {/* colored event blocks placed above the grid days */}
                    <div className="event event-purple" style={{ gridColumn: "1 / span 2" }}>Examinations</div>
                    <div className="event event-teal" style={{ gridColumn: "3 / span 2" }}>Discussion</div>
                    <div className="event event-orange" style={{ gridColumn: "5 / span 2" }}>Meetings</div>
                    <div className="event event-green" style={{ gridColumn: "2 / span 2" }}>Collaboration</div>

                    {/* numeric day tiles */}
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div key={i} className="day-tile">{i + 1}</div>
                    ))}
                  </div>
                </div>
              </main>
            </div>

            <div className="side-tag after-tag">After</div>
          </div>
        </div>
      </div>

      {/* <div className="hint">Click the card to transform (Esc/Enter/Space supported)</div> */}
    </div>
  );
}
