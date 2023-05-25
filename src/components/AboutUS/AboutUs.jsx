import React from "react";
import "./AboutUS.css";

const AboutUS = () => {
  return (
    <div>
      <section id="about-us">
        <div className="main-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=750"
            alt=""
          />
        </div>

        <div className="text">
          {/* <h4>About Us</h4> */}
          <h1>
          Ancient grains in a Modern food story
          </h1>
          <div className="last-text">
            <div className="text1">
              <h3>The best possible Ragi laddoos available in the planet</h3>
            </div>
          </div>
          <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta">Shop Now</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;