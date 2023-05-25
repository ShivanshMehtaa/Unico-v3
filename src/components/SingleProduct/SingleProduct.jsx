import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Product Price</span>
                    <span className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus dicta asperiores cupiditate magni repellendus, laudantium perferendis quae aliquam praesentium assumenda dignissimos alias nisi exercitationem similique quisquam? Natus culpa et consequuntur architecto atque amet reprehenderit placeat mollitia exercitationem illum, maxime repellat?</span>

                    <div className="cart-buttons">
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                            Add to Cart
                        </button>
                    </div>

                    <span className="divider" />

                    <div className="info-item">
                        
                        <span className="text-bold">Ingredients :
                            <span> Sample List of Ingredients </span>
                            <br />
                            <span> Sample List of Ingredients 2 </span>
                        </span>
                        <span className="text-bold">Additional Information :
                            <span> Info 1</span>
                            <br />
                            <span> Info 2</span>
                        </span>
                        <br />
                        <span className="text-bold">Share :
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16} />
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;
