import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Header/Header";


const Login = () => {
  const firstName = useRef("");
  
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();
  var id = 0 ;
  const allusers = async () => {
    try {
      console.log("hn hn chal rha hai ");
      axios.get("http://localhost:8080/api/v1/user/readAllUser").then((res) => {
        console.log(res.data.data);
        var result = res.data.data;

        id = result.length +1 ;
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allusers();
  }, []);

  const clickHandler = async (event) => {
    event.preventDefault();
    // navigate("/login");
    const data = {
      userId : id ,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);

    try {
      axios
        .post("http://localhost:8080/api/v1/user/createUser", { data: data })
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          // idhar abhi condition lgani hai
          if (res.data.message === "User created successfully")
            navigate("/login");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="addjobbody">
       {/* <Header /> */}
      <div className="addjobwrapper">
        <div className="title">Create Account</div>
        <div className="form">
          <div className="inputfield">
            <label>First Name</label>
            <input ref={firstName} type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Last Name</label>
            <input ref={lastName} type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Email</label>
            <input ref={email} type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input ref={password} type="text" className="input" />
          </div>
          <div className="inputfield">
            <input type="submit" value="Register" className="btn" onClick={clickHandler} />
          </div>
        </div>
        <span className="name"><Link className="link" to="/login">Login</Link></span>
      </div>
    </div>
  );
};

export default Login;