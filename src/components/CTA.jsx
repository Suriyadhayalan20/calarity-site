import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CTA(){
  let navigate = useNavigate();

  let handleClick = () =>{
    navigate("/contact")
  };
  
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <h2>Ready to get started?</h2>
          <p className="muted">Request a demo and we'll tailor an onboarding plan for your team.</p>
        </div>
        <div>
          <Link onClick={handleClick} to="/contact" className="btn btn-primary large">Request a Demo</Link>
        </div>
      </div>
    </section>
  );
}
