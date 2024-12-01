import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterOne = () => {
  return (
    <footer className="bg-light py-4 ">
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          {/* Contact Info */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-1 fw-bold">
              <i className="bi bi-chat-dots-fill me-2"></i> +91 91166 84439
            </p>
            <a href="mailto:support@tax2win.in" className="text-decoration-none text-success">
              support@tax2win.in
            </a>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <a href="#" className="text-dark me-3">
              <FaFacebookF />
            </a>
            <a href="#" className="text-dark me-3">
              <FaTwitter />
            </a>
            <a href="#" className="text-dark me-3">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-dark me-3">
              <FaYoutube />
            </a>
            <a href="#" className="text-dark">
              <FaInstagram />
            </a>
          </div>

          {/* Certification and Policies */}
          <div className="col-md-4 text-center text-md-end">
            <img
              src="iso-27001-placeholder.png"
              alt="ISO 27001 Certified"
              className="img-fluid me-2"
              style={{ height: "30px" }}
            />
            <img
              src="iso-9001-placeholder.png"
              alt="ISO 9001 Certified"
              className="img-fluid"
              style={{ height: "30px" }}
            />
            <div className="mt-2">
              <a href="#" className="text-decoration-none text-muted me-2">
                Terms & Conditions
              </a>
              |
              <a href="#" className="text-decoration-none text-muted ms-2">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-3">
          <small>© 2024 TAX2WIN. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
