import React from "react";

const items = [
  { title: "Manual scheduling", desc: "Entering shifts one by one", icon: "calendar" },
  { title: "Endless hassles", desc: "Last-minute swaps and conflicts", icon: "alert" },
  { title: "Missed appointments", desc: "Gaps and unbalanced shifts", icon: "clock" },
];

function Icon({ name }) {
  if (name === "calendar") {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="none" fill="#EAF2FF"/></svg>
    );
  }
  if (name === "alert") {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#EAF8F0"/></svg>
    );
  }
  return <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#FFF4E6"/></svg>;
}

export default function StruggleCards() {
  return (
    <section className="struggle" id="struggle">
      <div className="container text-center">
        <h2 className="section-title">The Struggle</h2>
        <p className="muted">Schedulers face numerous challenges managing staff schedules.</p>

        <div className="cards">
          {items.map((it) => (
            <article key={it.title} className="card">
              <div className="card-icon"><Icon name={it.icon} /></div>
              <h3>{it.title}</h3>
              <p className="muted">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
