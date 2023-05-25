import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="addjobbody">
      <div className="addjobwrapper">
        <div className="title">Create Account</div>
        <div className="form">
          <div className="inputfield">
            <label>First Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Last Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Email</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <input type="submit" value="Register" className="btn" />
          </div>
        </div>
        <span className="name"><Link className="link" to="/login">Login</Link></span>
      </div>
    </div>
  );
};

export default Login;