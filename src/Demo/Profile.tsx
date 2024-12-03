import React from "react";
import { FaEdit } from "react-icons/fa";
import "./Demo.css";
const Profile = () => {
  return (
    <div className="container-fuild background-radial-gradient py-5">
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">Tax2win</h1>
      </div>

      {/* Profile Section */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-10 d-flex flex-wrap justify-content-center gap-4">
          {/* Profile Card */}
          <div className="col-md-4">
            <div className="card glass-card text-center p-4">
              <div
                className="rounded-circle bg-success text-white mx-auto mb-3 d-flex justify-content-center align-items-center"
                style={{ width: "80px", height: "80px", fontSize: "36px" }}
              >
                S
              </div>
              <h4 className="mt-3">Shaik Afrid</h4>
              <button className="btn btn-outline-success mt-2">Change Password</button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="col-md-6">
            <div className="card glass-card p-4">
              <h5 className="fw-bold">
                My Profile <FaEdit className="text-success ms-2" />
              </h5>
              <div className="mt-3">
                <p>
                  <strong>First Name:</strong> Shaik
                </p>
                <p>
                  <strong>Last Name:</strong> Afrid
                </p>
                <p>
                  <strong>WhatsApp Update:</strong> Not subscribed{" "}
                  <button className="btn btn-sm btn-outline-success ms-2">Subscribe Now</button>
                </p>
                <p>
                  <strong>Email:</strong> afridshaik493@gmail.com
                </p>
                <p className="text-danger">
                  <button className="btn btn-sm btn-outline-danger me-2">Update Mobile No.</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Logins */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-10">
          <div className="card glass-card p-4">
            <h5 className="fw-bold">Recent Logins</h5>
            <p className="mt-3">01 Dec 2024, 3:42 PM — Chrome (Windows 10)</p>
          </div>
        </div>
      </div>

      {/* Billing Info */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card glass-card p-4">
            <h5 className="fw-bold">
              <button className="btn btn-primary">LogOut</button><FaEdit className="text-success ms-2" />
            </h5>
            {/* Add billing details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;