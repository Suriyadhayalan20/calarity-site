import React from "react";
import Lottie from "lottie-react";
import manualIcon from "../assets/manual-scheduling-icon.json";
import hasslesIcon from "../assets/endless-icon.json";
import missedIcon from "../assets/missed-appointment-icon.json";


const items = [
  { title: "Manual scheduling", desc: "Entering shifts one by one", icon: "calendar" },
  { title: "Endless hassles", desc: "Last-minute swaps and conflicts", icon: "alert" },
  { title: "Missed appointments", desc: "Gaps and unbalanced shifts", icon: "clock" },
];

function Icon({ name }) {
  if (name === "calendar") {
    return (
      <Lottie className="manual-icon" animationData={manualIcon} loop={true} />
    );
  }
  if (name === "alert") {
    return (
      <Lottie animationData={hasslesIcon} loop={true} />
    );
  }
  return <Lottie animationData={missedIcon} loop={true} />;
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
