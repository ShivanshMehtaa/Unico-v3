import "./Category.scss";
import Products from "../Products/Products"

const Category2 = () => {
    return <div className="category-main-content">
        <div className="layout">
            <Products headingText="Millet-Laddo" productCategory={ "c2"}/>
        </div>
    </div>;
};

export default Category2;