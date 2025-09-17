import { useState } from "react";
// import "./App.css";

const data = [
  {
    img: "/images/testimonial-women.png",
    name: "Jane D.",
    role: "Product Designer",
    text: "As a busy professional, I don't have a lot of time to manage my investments, but pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily."
  },
  {
    img: "/images/testimonial-men.png",
    name: "Harsh P.",
    role: "Product Designer",
    text: "As a busy professional, I don't have a lot of time to manage my investments, but pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily."
  },
  {
    img: "/images/testimonial-women.png",
    name: "Mark S.",
   role: "Product Designer",
    text: "As a busy professional, I don't have a lot of time to manage my investments, but pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily."
   },
  {
    img: "/images/testimonial-men.png",
     name: "Lisa P.",
    role: "Product Designer",
    text: "As a busy professional, I don't have a lot of time to manage my investments, but pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily."
  }
];

export default function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % data.length);
  const prev = () => setIndex((i) => (i - 1 + data.length) % data.length);

  return (
    <div className="testimonial-section">
      <div className="container">
    <h2 className="section-title">What's our client Say</h2>

    <div className="carousel-container">
      
      {/* Left Image */}
      <div className="image-area">
        <img src={data[index].img} alt={data[index].name} />
      </div>

      {/* Right Content */}
      <div className="content-area">
        <h3>What our customers are saying</h3>
        <p className="subtitle">Serving over 50k+ customers every month</p>

        <div className="controls">
          <span>{index + 1} of {data.length}</span>
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>

        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <p>{data[index].text}</p>
          <h4>{data[index].name} <span className="role">{data[index].role}</span></h4>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
