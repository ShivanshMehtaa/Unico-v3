import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div>
        <section id="about-us">
        <div className="acc-text">
            <h1>Account</h1>
            <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta">Logout</div>
          </div>
        </div>

      
        
      <div className="text">
          {/* <h4>About Us</h4> */}
          <h1>
          Account
          </h1>
          <div className="ctas">
            {/* <div className="banner-cta">About</div> */}
            <div className="banner-cta">Logout</div>
          </div>
        </div>

        <div className="text">
          {/* <h4>About Us</h4> */}
          <h1>
          Order History
          </h1>
          <div className="last-text">
            <div className="text1">
              <h3>You haven't placed any orders till now</h3>
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

export default Account;