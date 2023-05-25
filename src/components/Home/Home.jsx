import "./Home.scss";
import "./Banner/Banner"
import Banner from "./Banner/Banner";
import ShopByCategory from "../ChooseUS/Shop-by-category";
import Products from "../Products/Products";
import Newsletter from "../Footer/Newsletter/Newsletter";
import AboutUS from "../AboutUS/AboutUs";
import ChooseUs from "../ChooseUS/ChooseUs"
const Home = () => {
    return (
    <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
            {/* <div className="cat-heading">Categories</div> */}
                {/* <SingleProduct/> */}
                <AboutUS/>
                {/* <Category/> */}
                <Products headingText = "It's Mini & Mind Boggling Delecious"/>
               
            </div>
            <ShopByCategory/>
            <ChooseUs />
        </div>
        <Newsletter/>
    </div>
    );
};

export default Home;
