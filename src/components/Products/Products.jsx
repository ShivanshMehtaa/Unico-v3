import "./Products.scss";
import Product from "./Product/Product";
const Products = ({headingText}) => {
    return <div className="products-container">
        <div className="sec-heading">
            {headingText}    
        </div>
        {/* <span> Bite-sized, incredibly delicious gluten-free millet cookies. </span> */}
        
        <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>;
};

export default Products;
