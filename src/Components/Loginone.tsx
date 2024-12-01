import React from "react";
import "./Style.css";
import FooterOne from "../Demo/FooterOne";
const Loginone = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <section className="background-radial-gradient flex-grow-1">
        <div className="container py-5">
          <div className="row gx-lg-5 align-items-center">
            {/* Content Section */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center text-lg-start" style={{ zIndex: 10 }}>
              <h1 className="display-5 fw-bold mb-4" style={{ color: "hsl(218, 81%, 95%)" }}>
                E-filing <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>Tax Tracker</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                File your taxes securely and accurately. Maximize your refunds with advanced deductions. 
                Get real-time updates on your filing status. 24/7 customer support for any tax-related queries.
              </p>
            </div>

            {/* Form Section */}
            <div className="col-lg-6 col-md-12 position-relative">
              <div className="card bg-glass shadow">
                <div className="card-body px-4 py-5">
                  {/* Form */}
                  <form>
                    {/* First Name and Last Name Fields */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="firstName" className="form-control" />
                          <label className="form-label" htmlFor="firstName">First Name</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input type="text" id="lastName" className="form-control" />
                          <label className="form-label" htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                    </div>

                    {/* Email and Password Fields */}
                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control" />
                      <label className="form-label" htmlFor="email">Email Address</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="password" className="form-control" />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    {/* Newsletter Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" id="subscribe" />
                      <label className="form-check-label" htmlFor="subscribe">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>

                    {/* Social Media Links */}
                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className=" text-center py-3">
          <FooterOne/>
      </footer>
    </div>
  );
};

export default Loginone;
