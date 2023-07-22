import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../Redux/actions";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../img/logo2.jpg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/">
          <img className="logo" alt="" src={logo} />
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link to="/home">Home</Link>
        <Link to="/createDog">Create</Link>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
