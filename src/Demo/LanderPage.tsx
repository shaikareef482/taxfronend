import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

const LanderPage = () => {
  return (
    <div>
      {/* Top Notification Bar */}
      <div className="bg-info text-white text-center py-2">
        <span>
          ITR Filing Deadline Missed? Last chance to claim your tax refund.
        </span>
        <button className="btn btn-dark btn-sm ms-3">File Belated Return</button>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">
            <img
              src="logo-placeholder.png"
              alt="Tax2Win Logo"
              style={{ height: "30px", marginRight: "8px" }}
            />
            Tax2win
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tools
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Knowledge Center
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Guides
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white ms-2" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <span className="badge bg-success text-white mb-3">ITR Filing</span>
            <h1 className="fw-bold">
              Easiest Way of Income Tax eFiling in{" "}
              <span className="text-success">India</span>
            </h1>
            <div className="mt-3 d-flex align-items-center">
              <div className="me-4">
                <i className="bi bi-star-fill text-warning"></i>{" "}
                <strong>4.8</strong> Google Rating
              </div>
              <div>
                <i className="bi bi-shield-fill-check text-success"></i> 1+
                Million Trusted Users
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 d-flex justify-content-end">
            <div className="d-flex gap-3">
              {/* Card 1 */}
              <div className="card p-3 shadow" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">File ITR Yourself</h5>
                  <p className="card-text">
                    It's quick, easy, and takes only 4 minutes to file your
                    income tax return. ITR filing plans start at just ₹49.
                  </p>
                  <a href="#" className="btn btn-primary">
                    File ITR Now
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card p-3 shadow bg-success text-white" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Get eCA for ITR Filing</h5>
                  <p className="card-text">
                    Hire personal eCA to do Income Tax Filing for you. It is
                    convenient & fast with maximum refund calculated for you.
                  </p>
                  <a href="#" className="btn btn-light">
                    Book eCA Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanderPage;
