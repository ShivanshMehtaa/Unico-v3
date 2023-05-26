import "./Category.scss";
import Products from "../Products/Products"
import SingleStatic from "../SingleProduct/SingleStatic";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Category2 = () => {
    return <>
    <Header/>
    <div className="category-main-content">
        <div className="layout">
            <Products headingText="Millet-Laddo" productCategory={ "c2"}/>
        </div>
        <SingleStatic/>
    </div>;
    <Footer/>
    </>
};

export default Category2;