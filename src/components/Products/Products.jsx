import "./Products.scss";
import Product from "./Product/Product";
import axios from "axios"
import React, { useEffect, useState } from "react";
// import "./Product.scss";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Products = ({headingText , productCategory}) => {
    const [users, setUsers] = useState([]);
    
    const allEmploye = async () => {
    try {
      // console.log("hn hn chal rha hai ");
      axios
        .get("http://localhost:8080/api/v1/admin/readAllProduct")
        .then((res) => {
          console.log(res.data.data);
          var result = res.data.data;

          if (result.length > 0) {
            setUsers(result);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const proByid = async () => {
   const data = {
      productCategory : productCategory
    }
    console.log(data) ;
    try {
      // console.log("hn hn chal rha hai ");
      axios
        .post("http://localhost:8080/api/v1/admin/readProductByCategory" , {data:data})
        .then((res) => {
          console.log(res.data.data);
          var result = res.data.data;

          if (result.length > 0) {
            setUsers(result);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };



  if(headingText==="All Products"){
      allEmploye();
    }
    else {
      // proByid();
      if(productCategory==="c1"||productCategory==="c2"||productCategory==="c3"){
        proByid();
      }
      
    }

  //   useEffect(() => {
  //   allEmploye(); 
  //   proByid();
  // }, []);

 


    return <div className="products-container">
        <div className="sec-heading">{headingText}</div>
        {/* <div className="products">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div> */}

        
          <div className="products">
            {users.map((curUser) => {
              const {
               price ,
               productName
              } = curUser;
              return (
                // <Product name = {productName} price ={price}/>
                <div className="product-card">
      <Link className="link" to="product/1">
        <div className="thumbnail">
          <img
            src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360"
            alt=""
          />
        </div>

        <div className="product-details">
          <span className="name">{productName}</span>
          <span className="price">{price}</span>
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
            })}
          </div>
      


    </div>;
};

export default Products;
