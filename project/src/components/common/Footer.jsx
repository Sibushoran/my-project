import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";
import "./Footer.css"; // Optional for custom styles

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-md-3">
            <img
              src="https://d-themes.com/wordpress/udesign/electronics/wp-content/uploads/sites/37/2023/10/logo-footer.png"
              alt="logo"
              className="mb-3"
            />
            <p><strong>Address:</strong> 123 Street Name, City Name</p>
            <p><strong>Email:</strong> support@d-themes.com</p>
            <p><strong>Working Days / Hours:</strong> Mon-Sat / 8:00-18:00</p>
            <p><strong>Phone Number:</strong> (0)123-456-7890</p>
          </div>

          {/* Account Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">My Account</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Cart</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Wishlist</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Product Compare</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">My Orders</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-md-2">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50 text-decoration-none">Television</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Speakers</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Camera</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Headphone</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Smartphone</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-5">
            <h6 className="fw-bold">Subscribe to Our Newsletter</h6>
            <p className="text-white-50">Subscribe to receive updates, access to exclusive Sale.</p>
            <form className="d-flex mb-3">
              <input
                type="email"
                placeholder="Your e-mail..."
                className="form-control rounded-pill me-2"
              />
              <button type="submit" className="btn btn-primary rounded-pill px-4">
                JOIN
              </button>
            </form>
            <div className="d-flex gap-2">
              <button className="btn btn-dark rounded-circle"><FaFacebookF /></button>
              <button className="btn btn-dark rounded-circle"><FaXTwitter /></button>
              <button className="btn btn-dark rounded-circle"><FaPinterestP /></button>
              <button className="btn btn-dark rounded-circle"><FaLinkedinIn /></button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="border-secondary mt-5" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3">
          <p className="mb-2 mb-md-0 text-white-50">
            UDesign WordPress © 2025. All Rights Reserved
          </p>
          <ul className="list-inline mb-2 mb-md-0">
            <li className="list-inline-item"><a href="#" className="text-white-50 text-decoration-none">Terms of Use</a></li>
            <li className="list-inline-item"><a href="#" className="text-white-50 text-decoration-none">Affiliate Program</a></li>
            <li className="list-inline-item"><a href="#" className="text-white-50 text-decoration-none">Accessibility</a></li>
          </ul>
          <div className="d-flex gap-1">
            <img src="https://img.icons8.com/color/36/000000/paypal.png" alt="paypal" />
            <img src="https://img.icons8.com/color/36/000000/mastercard-logo.png" alt="mastercard" />
            <img src="https://img.icons8.com/color/36/000000/visa.png" alt="visa" />
            <img src="https://img.icons8.com/color/36/000000/apple-pay.png" alt="apple-pay" />
            <img src="https://img.icons8.com/color/36/000000/google-pay.png" alt="google-pay" />
            <img src="https://img.icons8.com/color/36/000000/stripe.png" alt="stripe" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
