import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const FooterOne = () => {
  return (
    <footer className="bg-light py-4">
  <div className="container">
    <div className="row align-items-center">
      {/* Contact Info */}
      <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
        <p className="mb-1 fw-bold text-primary">
          <i className="bi bi-chat-dots-fill me-2"></i> +91 91166 84439
        </p>
        <div className="text-muted">support@tax2win.in</div>
      </div>

      {/* Social Media Links */}
      <div className="col-md-4 text-center mb-3 mb-md-0">
        <div className="d-flex justify-content-center gap-3">
          <div className="social-icon bg-dark text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
            <i className="bi bi-facebook"></i>
          </div>
          <div className="social-icon bg-dark text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
            <i className="bi bi-twitter"></i>
          </div>
          <div className="social-icon bg-dark text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
            <i className="bi bi-linkedin"></i>
          </div>
          <div className="social-icon bg-dark text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
            <i className="bi bi-youtube"></i>
          </div>
          <div className="social-icon bg-dark text-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </div>

      {/* Certification and Policies */}
      <div className="col-md-4 text-center text-md-end">
        <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-2 mb-2">
          <img
            src="iso-27001-placeholder.png"
            alt="ISO 27001 Certified"
            className="img-fluid"
            style={{ height: "30px" }}
          />
          <img
            src="iso-9001-placeholder.png"
            alt="ISO 9001 Certified"
            className="img-fluid"
            style={{ height: "30px" }}
          />
        </div>
        <div className="text-muted">
          <div className="d-inline-block me-2">Terms & Conditions</div>|
          <div className="d-inline-block ms-2">Privacy Policy</div>
        </div>
      </div>
    </div>

    {/* Copyright Text */}
    <div className="text-center mt-3">
      <small className="text-muted">© 2024 TAX2WIN. All Rights Reserved.</small>
    </div>
  </div>
</footer>
  );
};

export default FooterOne;
