// src/components/Navbar/Navbar.jsx
import React, { useContext, useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaTags,
  FaSearch,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { cartItems, wishlistItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Failed to load products.json", err);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
      setShowResults(true);
    } else {
      setFilteredProducts([]);
      setShowResults(false);
    }
  };

  return (
    <Fragment>
      {/* Top Bar */}
      <div className="bg-dark text-white small py-2 px-3 d-flex justify-content-between align-items-center">
        <div>
          <FaEnvelope className="me-2" />
          support@d-themes.com
          <FaClock className="ms-4 me-2" />
          Mon - Sat 8:00 - 18:00, Sunday Closed
        </div>
        <div className="d-flex align-items-center gap-3">
          <span>USD ▾</span>
          <span>ENG ▾</span>
          <Link to="/login" className="text-white text-decoration-none">
            <FaUser className="me-1" /> Sign In / Register
          </Link>
          <FaFacebookF className="text-white" />
          <FaLinkedinIn className="text-white" />
        </div>
      </div>

      {/* Main Header */}
      <div className="d-flex align-items-center justify-content-between px-4 py-3 bg-white shadow-sm">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://d-themes.com/wordpress/udesign/electronics/wp-content/uploads/sites/37/2024/10/logo-header-1.png"
            alt="UDesign Logo"
            height="40"
          />
        </Link>

        {/* Search Bar */}
        <form className="d-flex w-50 mx-4 position-relative" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="form-control rounded-pill px-4"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="btn btn-link position-absolute end-0 top-0 mt-1 me-2 text-primary"
          >
            <FaSearch size={20} />
          </button>
        </form>

        {/* Contact & Icons */}
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center">
            <FaPhoneAlt className="text-primary me-2" />
            <div>
              <small className="text-muted">Call Us Now:</small>
              <div className="fw-bold">0(800) 123-456</div>
            </div>
          </div>

          <Link to="/wishlist" className="text-dark fs-5 position-relative">
            <FaHeart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {wishlistItems.length}
            </span>
          </Link>

          <Link to="/cart" className="text-dark fs-5 position-relative">
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-primary px-4 py-2 d-flex justify-content-between align-items-center">
        <ul className="navbar-nav flex-row align-items-center gap-4 m-0">
          <li className="nav-item dropdown all-categories-dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle text-dark bg-white rounded-pill px-3 py-2 d-flex align-items-center"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-bars me-2"></i> All Categories
            </Link>
            <ul className="dropdown-menu show-dropdown">
              <li><Link to="#" className="dropdown-item"><i className="fas fa-headphones-alt me-2"></i> HeadPhone</Link></li>
              <li><Link to="#" className="dropdown-item"><i className="fas fa-laptop me-2"></i> Laptops <span className="float-end">&#8250;</span></Link></li>
              <li><Link to="#" className="dropdown-item"><i className="fas fa-plug me-2"></i> Accessories <span className="float-end">&#8250;</span></Link></li>
            </ul>
          </li>

          {/* Other Navigation Links */}
          <li><Link to="/" className="nav-link text-white">Home</Link></li>
          <li><Link to="/about" className="nav-link text-white">About Us</Link></li>
          <li><Link to="/shop" className="nav-link text-white">Shop</Link></li>
          <li><Link to="/news" className="nav-link text-white">News</Link></li>
          <li><Link to="/contact" className="nav-link text-white">Contact Us</Link></li>
          <li><Link to="/track" className="nav-link text-white d-flex align-items-center"><FaMapMarkerAlt className="me-1" /> Track Order</Link></li>
          <li><Link to="/deals" className="nav-link text-white d-flex align-items-center"><FaTags className="me-1" /> Daily Deals</Link></li>
        </ul>

        {/* Login Button */}
        <Link to="/login" className="btn btn-outline-light rounded-pill">
          <FaUser className="me-2" /> Login
        </Link>
      </nav>

      {/* Filtered Products Section */}
      {showResults && (
        <div className="container py-4">
          <h4>Search Results:</h4>
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="text-primary fw-bold">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No products found.</div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
