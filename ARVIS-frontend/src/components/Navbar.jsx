import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFile } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">ARVIS</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            <AiOutlineHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/response" className="nav-link">
            <AiOutlineFile className="nav-icon" /> Response
          </Link>
        </li>
        <li>
          <a href="/visualization" className="nav-link">
            <BsGraphUp className="nav-icon" /> Visualization
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
