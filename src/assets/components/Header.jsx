import React from "react";
import "./Header.css";
import { FaRegUserCircle, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>USERS</h1>
        <FaUser  id="usericon1" className="icons" size={100} />
      </div>
    </div>
  );
};

export default Header;
