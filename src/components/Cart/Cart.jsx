import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem"

import "./Cart.scss";
import { Link } from "react-router-dom";
const Cart = ({setShowCart}) => {
    return (
    <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={()=>setShowCart(false)}>
                    <MdClose/>
                    <span  className="closetext">Close</span>
                </span>
            </div>

            {/* <div className="empty-cart">
                <BsCartX/>
                <span>No Products in The Cart</span>
                <Link to="/"><button className="return-cta">Return</button></Link>
            </div> */}

            <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="totaltext">SubTotal : </span>
                        <span className="totaltext total">₹ Total Price</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">CheckOut</button>
                    </div>
                </div>
            </>

        </div>
    </div>
    );
};

export default Cart;
