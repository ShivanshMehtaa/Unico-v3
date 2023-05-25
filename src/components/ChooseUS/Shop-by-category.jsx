import React from "react";
import './Shop.css';
import Category3 from "../Home/Category/Category-3"

function Serive ()  {
    return (
        <div>
            <div className="choose-container">
                <h1>Shop By Category</h1>
                <Category3/>
                <div className="ctas">
          {/* <div className="banner-cta">About</div> */}
          <div className="banner-cta">Shop Now</div>
        </div>
            </div>
        </div>
    )
}

export default Serive;