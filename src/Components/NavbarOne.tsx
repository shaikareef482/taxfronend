import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import Logo from "./Logo";
const NavbarOne = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container">
          <Link className="navbar-brand ml-6" to={"/"}>
            <div className="d-flex align-items-center">
              <Logo />
              <h5 className="ms-4 tax-tracker-brand">Taxtracker</h5>
            </div>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link btn  btn-outline-light" to={""}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn  btn-outline-light" to={""}>
                  SignUp
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      {/* Background Section */}
      <section className="background-radial-gradient flex-grow-1">
        <div className="container py-5">
          <div
            className="row gx-lg-5 align-items-center justify-content-center"
            style={{ minHeight: "calc(100vh - 56px)" }}
          >
            {/* Content Section */}
            <div
              className="col-lg-6 col-md-12 mb-0 text-center text-lg-start"
              style={{ zIndex: 10 }}
            >
              <h1
                className="display-5 fw-bold mb-4"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                E-filing <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>Tax Tracker</span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                File your taxes securely and accurately. Maximize your refunds
                with advanced deductions. Get real-time updates on your filing
                status. 24/7 customer support for any tax-related queries.
              </p>
              <div className="btn-group btn-group-lg">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2024 Tax E-Filing. All rights reserved.
      </footer>
    </div>
  );
};

export default NavbarOne;
