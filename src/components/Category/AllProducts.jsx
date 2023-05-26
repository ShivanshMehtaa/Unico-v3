import "./Category.scss";
import Products from "../Products/Products"
import SingleProduct from "../SingleProduct/SingleProduct";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SingleStatic from "../SingleProduct/SingleStatic";

const Category3 = () => {
    return <>
    <Header/>
    <div className="category-main-content">
        
        <div className="layout">
            <Products headingText="All Products"  productCategory={ "all"}/>
        </div>
        <SingleStatic/>
        
    </div>;
    <Footer/>
    </>
};

export default Category3;