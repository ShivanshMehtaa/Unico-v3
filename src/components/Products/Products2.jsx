import "./Products.scss";
import Product from "./Product/Product";
const Products2 = () => {
    return <div className="products-container">
        {/* <span> Bite-sized, incredibly delicious gluten-free millet cookies. </span> */}
        
        <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>;
};

export default Products2;