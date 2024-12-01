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
    <footer className="bg-dark text-white pt-5">
      <div className="container text-center text-md-start">
        <div className="row py-4 align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="h3">
              <span className="text-success">Subscribe</span> to get tax filling notification!
            </h1>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <input
              type="email"
              required
              placeholder="Enter your email.."
              className="form-control me-2"
              style={{ maxWidth: "300px" }}
            />
            <button className="btn btn-success">Submit</button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
             <Logo/>
            <p>Play tax and save nation</p>
            <div className="d-flex justify-content-center">
              <FaMoneyCheck size={30} className="me-3" />
              
            </div>
          </div>

          {/* Company Links */}

          {/* Support Links */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5>Support</h5>
            
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-4 mt-4 border-top">
          <span>© 2024 TaxTracker. All rights reserved.</span>
          <span className="ms-3">Terms · Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
