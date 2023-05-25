import "./Category.scss";
import cat5 from "../../../assets/category/cat-5.png"
import catA from "../../../assets/category/cat-all.png"
import cat7 from "../../../assets/category/cat-7.png"
import cat8 from "../../../assets/category/cat-8.png"
const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
                <img src={catA} alt="" />
            </div>
            <div className="category">
                <img src={cat5} alt="" />
            </div>
            <div className="category">
                <img src={cat7} alt="" />
            </div>
            <div className="category">
                <img src={cat8} alt="" />
            </div>
        </div>
    </div>;
};

export default Category;
