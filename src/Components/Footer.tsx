import React from "react";
import { Link } from "react-router-dom";
import { FaMoneyCheck } from "react-icons/fa";
import Logo from "./Logo";
// import {
//   footercompanyLinks,
//   footerProductLinks,
//   footerSupportLinks,
// } from "../../static/data";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white vh-20 py-4">
  <div className="container text-center text-md-start">
    {/* Subscribe Section */}
    <div className="row align-items-center">
      <div className="col-md-6 mb-3 mb-md-0">
        <h2 className="h5 mb-0">
          <span className="text-success">Subscribe</span> for tax filing notifications!
        </h2>
      </div>
      <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="form-control me-2"
          style={{ maxWidth: "250px", height: "40px" }}
        />
        <button className="btn btn-success px-4" style={{ height: "40px" }}>
          Submit
        </button>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="row mt-4">
      {/* Logo and Tagline */}
      <div className="col-lg-3 col-md-6 mb-3 mb-lg-0 text-center text-md-start">
        <Logo />
        <p className="mt-2 mb-0">Play tax and save the nation</p>
        <div className="d-flex justify-content-center justify-content-md-start mt-2">
          <FaMoneyCheck size={30} className="me-2" />
          {/* <FaChartBar size={30} /> */}
        </div>
      </div>

      {/* Company Links */}
      <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
        <h6 className="text-uppercase fw-bold">Company</h6>
        <ul className="list-unstyled mb-0">
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Support Links */}
      <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
        <h6 className="text-uppercase fw-bold">Support</h6>
        <ul className="list-unstyled mb-0">
          <li>FAQs</li>
          <li>Help Center</li>
          <li>Tax Resources</li>
        </ul>
      </div>

      {/* Legal Links */}
      <div className="col-lg-3 col-md-6">
        <h6 className="text-uppercase fw-bold">Legal</h6>
        <ul className="list-unstyled mb-0">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="text-center py-3 mt-3 border-top">
      <small>© 2024 TaxTracker. All rights reserved.</small>
    </div>
  </div>
</footer>
  );
};

export default Footer;
