import React from "react";
import "./Style.css";
const Register = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <section className="h-custom background-radial-gradient flex-grow-1">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div
                className="card bg-glass"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    {/* Left Side */}
                    <div className="col-lg-6 p-5">
                      <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                        General Information
                      </h3>

                      <div className="form-outline mb-4">
                        <input type="text" id="username" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="username">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="email" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="email">Email Address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="password" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="mobile" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="mobile">Mobile Number</label>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-lg-6 p-5">
                      <h3 className="fw-normal mb-5">Contact Details</h3>

                      <div className="form-outline mb-4">
                        <input type="text" id="street" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="street">Street + Nr</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="additional" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="additional">Additional Information</label>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="zip" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="zip">Zip Code</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input type="text" id="place" className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="place">Place</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="country" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="country">Country</label>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="form-check d-flex justify-content-start mb-4">
                        <input className="form-check-input me-3" type="checkbox" id="terms" />
                        <label className="form-check-label" htmlFor="terms">
                          I accept the <a href="#!" className="text-primary"><u>Terms and Conditions</u></a>
                        </label>
                      </div>

                      {/* Register Button */}
                      <button type="button" className="btn btn-primary btn-lg w-100">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Optional Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © 2024 Tax E-Filing. All rights reserved.
      </footer>
    </div>
  );
};

export default Register;