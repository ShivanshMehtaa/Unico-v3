import "./Home.scss";
import "./Banner/Banner"
import Banner from "./Banner/Banner";
import ShopByCategory from "../ChooseUS/Shop-by-category";
// import Products from "../Products/Products"
import Products3 from "../Products/Products3";
import Newsletter from "../Footer/Newsletter/Newsletter";
import AboutUS from "../AboutUS/AboutUs";
import ChooseUs from "../ChooseUS/ChooseUs"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaOtter } from "react-icons/fa";
const Home = () => {
    return (
    <div><Header/>
        <Banner/>
        <div className="main-content">
            <div className="layout">
            {/* <div className="cat-heading">Categories</div> */}
                {/* <SingleProduct/> */}
                <AboutUS/>
                {/* <Category/> */}
                <Products3 headingText = "It's Mini & Mind Boggling Delecious"/>
               
            </div>
            <ShopByCategory/>
            <ChooseUs />
        </div>
        <Newsletter/>
        <Footer/>
    </div>
    );
};

export default Home;
