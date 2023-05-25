import React from "react";
import "./Admin.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
export const Dashboard = () => {
  const [productNo, setproductNo] = useState("");
  const [userNo, setuserNo] = useState("");
  const [customerNo, setcustomerNo] = useState("");
  const [page, setPage] = useState("");

  const ALluser = async () => {
    // console.log("hn hn chal rha hai ");
    axios.get("http://localhost:8080/api/v1/user/readAllUser").then((res) => {
      // console.log(res.data.data);
      var result = res.data.data.length;
      setuserNo(result);
      // console.log(employeeNo);
      // const j = res.data.data;
    });
  };
  const ALlproducts = async () => {
    // console.log("hn hn chal rha hai ");
    axios
      .get("http://localhost:8080/api/v1/admin/readAllProduct")
      .then((res) => {
        // console.log(res.data.data);
        var result = res.data.data.length;
        setproductNo(result);
        // console.log(employeeNo);
        // const j = res.data.data;
      });
  };
  const ALLcustomer = async () => {
    // console.log("hn hn chal rha hai ");
    axios
      .get("http://localhost:8080/api/v1/customer/readAllCustomer")
      .then((res) => {
        // console.log(res.data.data);
        var result = res.data.data.length;
        setcustomerNo(result);
        // console.log(employeeNo);
        // const j = res.data.data;
      });
  };

  const clickHander = (event) => {
    console.log(event);

    setPage(event);

    console.log(page);
  };

  useEffect(() => {
    ALluser();
    ALlproducts();
    ALLcustomer();
    // ALlapplicant();
    // setemployeeNo(employeeNo);
  }, []);
  return (
    <div>
      <div class="cards">
        <div class="card">
          <div class="box">
            <h3>Users</h3>

            <h1>{userNo}</h1>
          </div>
          <div class="icon-case">{/* <img src="students.png" alt="" /> */}</div>
        </div>
        <div class="card">
          <div class="box">
            <h3>Products</h3>

            <h1>{productNo}</h1>
          </div>
          <div class="icon-case">{/* <img src="teachers.png" alt="" /> */}</div>
        </div>
        <div class="card">
          <div class="box">
            <h3>Customers</h3>
            <h1>{customerNo}</h1>
          </div>
          <div class="icon-case">{/* <img src="schools.png" alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};
