import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">BlogING. </Link> {/* Logo */}
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/myblog">My Blog</Link>
        </li>
        <li>
          <Link to="/blog-read">Blog Read</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
