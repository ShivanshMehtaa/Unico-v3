
import { Link } from "react-router-dom";
import "./Category3.scss";
// import choose1 from "../../../assets/category/choose-1.png"

const Category = () => {
    return <div  className="shop-category">
        <div className="categories">
            <Link to="/allProducts" className="category">
                <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/collections/ladoo-ratio.jpg?v=1665225450" alt="" />
            </Link>
            <Link to="Millet-Meusli" className="category">
                <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/collections/MS2_8399-800.jpg?v=1665225190" alt="" />
            </Link>
            <Link to="Millet-Laddo" className="category">
                <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/collections/jaggry-mini-cookies-collection--ratio.jpg?v=1665225137" alt="" />
            </Link>
            <Link to="Millet-Bar" className="category">
                <img src="https://cdn.shopify.com/s/files/1/0600/3680/8804/collections/Potter-1-100-1-edit.jpg?v=1665225079" alt="" />
            </Link>
        </div>
    </div>;
};

export default Category;