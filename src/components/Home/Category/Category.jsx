import "./Category.scss";
import cat5 from "../../../assets/category/cat-5.png"
import catA from "../../../assets/category/cat-all.png"
import cat7 from "../../../assets/category/cat-7.png"
import cat8 from "../../../assets/category/cat-8.png"
import { useNavigate } from "react-router-dom";
const   Category = () => {
    const Navigate = useNavigate() ;
    const HandelClick = (e)=>{
        Navigate(`/${e}`)
    }
    
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category" >
                <img src={catA} alt="" onClick = {()=>{
                    HandelClick("allProducts")
                }}/>
            </div>
            <div className="category">
                <img src={cat5} alt=""onClick = {()=>{
                    HandelClick("Millet")
                }} />
            </div>
            <div className="category">
                <img src={cat7} alt="" onClick = {()=>{
                    HandelClick("Jaggery")
                }}/>
            </div>
            <div className="category">
                <img src={cat8} alt="" onClick = {()=>{
                    HandelClick("combo")
                }}/>
            </div>
        </div>
    </div>;
};

export default Category;
