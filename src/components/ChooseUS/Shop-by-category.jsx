import React from "react";
import './Shop.css';
import Category3 from "../Home/Category/Category-3"
import { useNavigate } from "react-router-dom";

function Serive ()  {
    const Navigate = useNavigate();
    return (
        <div>
            <div className="choose-container">
                <h3>Shop By Category</h3>
                <Category3/>
                <div className="ctas2">
          {/* <div className="banner-cta">About</div> */}
          <div className="banner-cta" onClick={()=>{
            Navigate('/allProducts')
          }}>View All</div>
        </div>
            </div>
        </div>
    )
}

export default Serive;