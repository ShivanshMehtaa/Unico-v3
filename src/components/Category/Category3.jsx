import "./Category.scss";
import Products from "../Products/Products"
import SingleStatic from "../SingleProduct/SingleStatic";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Category3 = () => {
    return <>
    <Header/>
    <div className="category-main-content">
        <div className="layout">
            <Products headingText="Millet-Bar" productCategory={ "c3"}/>
        </div>
        <SingleStatic/>
    </div>
    <Footer/>
    </>
};

export default Category3;