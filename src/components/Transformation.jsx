import React from "react";

export default function Transformation() {
  return (
    <section className="transformation" id="how">
      <div className="container">
        <h2 className="section-title text-center">The Transformation</h2>
        <p className="muted text-center">Let automation take over the hard work, so you can focus on what matters.</p>

        <div className="before-after">
          <div className="box">
            <div className="box-header">Before</div>
            <div className="schedule before-schedule">
              <div className="cell" />
              <div className="cell" />
              <div className="cell" />
              <div className="cell" />
            </div>
          </div>

          <div className="box">
            <div className="box-header">After</div>
            <div className="schedule after-schedule">
              <div className="row">
                <div className="slot filled"/>
                <div className="slot filled"/>
                <div className="slot"/>
                <div className="slot filled"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
