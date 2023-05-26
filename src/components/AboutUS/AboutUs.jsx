import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUS.css";

const AboutUS = () => {
  const Navigate = useNavigate();
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
          Ancient grains in a Modern food <br /> story
          </h1>
          <div className="last-text1">
            <div className="text11">
              <h3>The best possible Ragi laddoos available in the planet</h3>
            </div>
          </div>
          <div className="ctas1">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta" onClick={()=>{Navigate('/allProducts')}}>Shop Now</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;