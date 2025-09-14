import React from "react";

const data = [
  { name: "Jane Doe", role: "Clinic Manager", quote: "Calerity has made scheduling a breeze for our team." },
  { name: "Sam Patel", role: "Ops Head", quote: "We reduced conflicts and saved hours every week." }
];

export default function Testimonials(){
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title text-center">What our clients say</h2>
        <div className="test-grid">
          {data.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="avatar" aria-hidden>{t.name[0]}</div>
              <blockquote className="quote">“{t.quote}”</blockquote>
              <div className="tmeta">{t.name} · <span className="muted">{t.role}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
