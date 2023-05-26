import React, { useEffect, useState, useRef } from "react";
import "./UserTable.css";
import Table from "./Table";
import "./AddJob.css";

import axios from "axios";

const UpdatePro = () => {
  const [users, setUsers] = useState([]);

  const productId = useRef("");
  const productStock = useRef("");

  const clickHandler = async (bt) => {
    var data = {};
    if (bt === "remove") {
      data = {
        productId: productId.current.value,
        productStock: -Number(productStock.current.value),
      };
    } else {
      data = {
        productId: productId.current.value,
        productStock: Number(productStock.current.value),
      };
    }

    console.log(data);

    try {
      axios
        .put("http://localhost:8080/api/v1/admin/updateProductStock", {
          data: data,
        })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert(res.data.message);
        });
    } catch (error) {
      console.log(error);
      alert("There is something wrong ");
    }

    productId.current.value = "";
    productStock.current.value = "";
  };
  return (
    <div className="addjobbody">
      <div class="addjobwrapper">
        <div class="title">Update Product's Stock</div>
        <div class="form">
          <div class="inputfield">
            <label>ProductId</label>
            <input ref={productId} type="text" class="input" />
          </div>
          <div class="inputfield">
            <label>Amount to Add/Remove</label>
            <input ref={productStock} type="data" class="input" />
          </div>

          <div className="control-buttons">
            <div class="inputfield">
              <input
                type="submit"
                value="Remove Product"
                class="btn"
                onClick={() => {
                  clickHandler("remove");
                }}
              />
              <input
                type="submit"
                className="btn btn2"
                value="Add Product"
                onClick={() => {
                  clickHandler("add");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePro;
