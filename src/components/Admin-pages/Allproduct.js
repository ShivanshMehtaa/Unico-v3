import React, { useEffect, useState } from "react";
import "./UserTable.css";
import Table from "./Table";
import axios from "axios";

const Allpro = () => {
  const [users, setUsers] = useState([]);

  const Allpro = async () => {
    try {
      console.log("hn hn chal rha hai ");
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

  useEffect(() => {
    Allpro();
  }, []);

  return (
    <div>
      <div className="head">
        <h1>All Products</h1>
      </div>
      <table>
        <div className="thead">
          <th>ProductId</th>
          <th>ProductName</th>
          <th>Price</th>
          <th>ProductStock</th>
          <th>ProductCategory</th>
          <th>ProductWeight</th>
        </div>
        <tbody>
          <div className="Table">
            {users.map((curUser) => {
              const {
                productId,
                productCategory,
                productName,
                price,
                productWeight,
                productStock,
              } = curUser;
              return (
                <tr>
                  <td>{productId}</td>
                  <td>{productName}</td>
                  <td>{price}</td>
                  <td>{productStock}</td>
                  <td>{productCategory}</td>
                  <td>{productWeight}</td>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Allpro;
