import "./Products3.scss";
import Product2 from "./Product/Product2";
import { useNavigate } from "react-router-dom";
const Products = ({headingText}) => {
    const Navigate = useNavigate();
    return <div className="products-container">
        <div className="sec2-heading">
            {headingText}    
        </div>
        {/* <span> Bite-sized, incredibly delicious gluten-free millet cookies. </span> */}
        
        <div className="products" >
            <Product2 li ={'/Millet-Meusli'}/>
            <Product2 li = {'/Millet-Laddo'}/>
            <Product2 li = {'/Millet-Bar'}/>
        </div>
    </div>;
};

export default Products;