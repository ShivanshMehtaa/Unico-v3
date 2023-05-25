import React, { useEffect, useState } from "react";
import "./UserTable.css";
import Table from "./Table";
import axios from "axios";

const Allcustomer = () => {
  const [users, setUsers] = useState([]);

  const allcustomer = async () => {
    try {
      // console.log("hn hn chal rha hai ");
      axios
        .get("http://localhost:8080/api/v1/customer/readAllCustomer")
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
    allcustomer();
  }, []);

  return (
    <div>
      <div className="head">
        <h1>All Customers</h1>
      </div>
      <table>
        <div className="thead">
          <th>Customer_id</th>
          <th>firstName</th>
          <th>LastName</th>
          <th>phone</th>
          <th>productHistory</th>
        </div>
        <tbody>
          <div className="Table">
            {users.map((allcustomer) => {
              const { firstName, lastName, phone, productHistory, customerId } =
                allcustomer;
              return (
                <tr>
                  <td>{customerId}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{phone}</td>
                  <td>{productHistory}</td>
                </tr>
              );
            })}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Allcustomer;
