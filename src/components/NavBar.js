import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : "collapsed"}`}>
      <div className="navbar-header">
        <button className="toggle-btn" onClick={toggleNavbar}>
          {isOpen ? "⮜" : "⮞"}
        </button>
        <Link to="/" className="brand">
          Sunset BlogSite
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? "visible" : "hidden"}`}>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
