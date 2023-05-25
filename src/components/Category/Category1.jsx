import "./Category.scss";
import Products from "../Products/Products"
import SingleProduct from "../SingleProduct/SingleProduct";

const Category1 = () => {
    return <div className="category-main-content">
        <div className="layout">
            <Products headingText="Millet-Meusli" productCategory={ "c1"}/>
        </div>
        <SingleProduct/>
    </div>;
};

export default Category1;
