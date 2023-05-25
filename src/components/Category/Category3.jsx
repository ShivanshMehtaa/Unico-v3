import "./Category.scss";
import Products from "../Products/Products"

const Category3 = () => {
    return <div className="category-main-content">
        <div className="layout">
            <Products headingText="Millet-Bar" productCategory={ "c3"}/>
        </div>
    </div>;
};

export default Category3;