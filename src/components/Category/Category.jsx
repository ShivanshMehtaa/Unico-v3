import "./Category.scss";
import Products from "../Products/Products"

const Category = () => {
    return <div className="category-main-content">
        <div className="layout">
            <Products headingText="Category Name + Products"/>
        </div>
    </div>;
};

export default Category;
