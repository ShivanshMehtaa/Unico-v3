import React from "react";
import './Shop.css';
import Category3 from "../Home/Category/Category-3"

function Serive ()  {
    return (
        <div>
            <div className="choose-container">
                <h3>Shop By Category</h3>
                <Category3/>
                <div className="ctas2">
          {/* <div className="banner-cta">About</div> */}
          <div className="banner-cta">View All</div>
        </div>
            </div>
        </div>
    )
}

export default Serive;