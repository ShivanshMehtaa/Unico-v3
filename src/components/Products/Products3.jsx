import "./Products3.scss";
import Product2 from "./Product/Product2";
const Products = ({headingText}) => {
    return <div className="products-container">
        <div className="sec2-heading">
            {headingText}    
        </div>
        {/* <span> Bite-sized, incredibly delicious gluten-free millet cookies. </span> */}
        
        <div className="products">
            <Product2/>
            <Product2/>
            <Product2/>
        </div>
    </div>;
};

export default Products;