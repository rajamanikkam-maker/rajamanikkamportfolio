import React, { useState, useEffect } from 'react';
import "./About.css";

const About = () => {
  const images = ["RAJA PHOTO.png",  "logo512.png"]; // Add your image file names here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the image index to the next one in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Rajamanikkam</h2>
            <p style={{ color: "#666", letterSpacing: ".7px", marginTop: 2, lineHeight: 2 }}>
              Dynamic and innovative computer engineering graduate with a passion for technology and a proven track record of driving impactful solutions. Proficient in software development, hardware design, and system optimization. Adept at thriving in fast-paced environments and committed to continuous growth. Ready to leverage expertise to contribute to a forward-thinking organization's technological advancements.
            </p>
          </div>
          <div className="right_container mt-3">
            <img src={images[currentImageIndex]} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
