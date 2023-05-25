import "./Category.scss";
import Products from "../Products/Products"
import SingleProduct from "../SingleProduct/SingleProduct";


const Category3 = () => {
    return <div className="category-main-content">
        <div className="layout">
            <Products headingText="All Products"  productCategory={ "all"}/>
        </div>
        <SingleProduct/>
    </div>;
};

export default Category3;