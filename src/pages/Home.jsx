import React from "react";
import Hero from "../components/Hero";
import StruggleCards from "../components/StruggleCards";
import Transformation from "../components/Transformation";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <StruggleCards />
      <Transformation />
      <Testimonials />
      <CTA />
    </main>
  );
}
