import { useState } from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

import "./Search.scss";

const Search = ({setShowSearch}) => {
    console.log("askldflasd")
    const [query , setQuery] = useState();

    const searchPost = (val)=>{
        console.log(val);
    }
    return(
         <div className="search-modal">
            <div className="form-field">
                <input type="text" placeholder="Search For Product" autoFocus name="" id="" value={query} onChange={(e)=>searchPost(e.target.value)}/>
                <MdClose className="close-btn" onClick={()=>setShowSearch(false)}/>
            </div>

            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product Name</span>
                            <span className="desc">product Desc</span>
                        </div>
                    </div>
                </div>
            </div>

         </div>
    );
};

export default Search;
