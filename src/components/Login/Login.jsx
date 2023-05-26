import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {

  

   const email = useRef("");

  const password = useRef("");
  const Navigate = useNavigate();

  const clickHandler = async (e) => {
    e.preventDefault();

    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);

    try {
      axios
        .post("http://localhost:8080/api/v1/user/login", { data: data })
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          // idhar bhi condition lgani hai
          // Navigate("/admin");
          if (res.data.message === "Login successful") {
            console.log(res.data.data) ;
            // localStorage.clear();
            let u = JSON.stringify(res.data.data) ;
            localStorage.setItem("user" , JSON.stringify(u))
            console.log(localStorage.user) ;
            
            if(res.data.data.isAdmin){
              Navigate("/admin")
            }
            else{
            Navigate('/');
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addjobbody">
       <Header />
      <div className="addjobwrapper">
        <div className="title">Login</div>
        <div className="form">
          <div className="inputfield">
            <label>Email ID/Username</label>
            <input ref={email}type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input ref={password} type="text" className="input" />
          </div>
          <div className="inputfield">
            <input type="submit" value="Login" className="btn" onClick={clickHandler}/>
          </div>
        </div>
        <span className="name"><Link className="link" to="/signup">Create Account</Link></span>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
