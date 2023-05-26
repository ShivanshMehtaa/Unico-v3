import "./Category.scss";
import Products from "../Products/Products"
import SingleProduct from "../SingleProduct/SingleProduct";
const Category2 = () => {
    return <div className="category-main-content">
        <div className="layout">
            <Products headingText="Millet-Laddo" productCategory={ "c2"}/>
        </div>
        <SingleProduct/>
    </div>;
};

export default Category2;