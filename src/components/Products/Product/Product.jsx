import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product-card">
      <Link className="link" to="product/1">
        <div className="thumbnail">
          <img
            src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360"
            alt=""
          />
        </div>

        <div className="product-details">
          <span className="name">Product Name</span>
          <span className="price">₹ Product Price</span>
          <div className="cart-buttons">
            <button className="add-to-cart-button">
              <FaCartPlus size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
