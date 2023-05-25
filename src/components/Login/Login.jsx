import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="addjobbody">
      <div className="addjobwrapper">
        <div className="title">Login</div>
        <div className="form">
          <div className="inputfield">
            <label>Email ID/Username</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Password</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <input type="submit" value="Login" className="btn" />
          </div>
        </div>
        <span className="name"><Link className="link" to="/signup">Create Account</Link></span>
      </div>
    </div>
  );
};

export default Login;
