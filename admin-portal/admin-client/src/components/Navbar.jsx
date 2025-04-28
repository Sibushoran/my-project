import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Admin Dashboard</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
          Add Product
        </Link>
        <Link to="/products" className={`nav-link ${pathname === "/products" ? "active" : ""}`}>
          Product List
        </Link>
        <Link to="/users" className={`nav-link ${pathname === "/users" ? "active" : ""}`}>
          User List
        </Link>

        <div className="dropdown">
          <button 
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            Admin Settings
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/settings" className="dropdown-item">
                Settings
              </Link>
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
