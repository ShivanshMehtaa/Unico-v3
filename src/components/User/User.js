import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const User = () => {
  const Navigate = useNavigate();
  const clickHandler = () => {
    localStorage.clear();
    Navigate("/");
  };
  return (
    <div>
      <button onClick={clickHandler}>logout</button>
    </div>
  );
};

export default User;
