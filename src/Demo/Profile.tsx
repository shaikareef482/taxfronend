import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">Tax2win</h1>
      </div>

      {/* Profile Card */}
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-center p-4">
            <div className="rounded-circle bg-success text-white mx-auto" style={{ width: "80px", height: "80px", lineHeight: "80px", fontSize: "36px" }}>
              S
            </div>
            <h4 className="mt-3">shaik Afrid</h4>
            <button className="btn btn-outline-success mt-2">Change Password</button>
          </div>
        </div>

        {/* Profile Details */}
        <div className="col-md-6">
          <div className="card p-4">
            <h5 className="fw-bold">My Profile <FaEdit className="text-success ms-2" /></h5>
            <div className="mt-3">
              <p><strong>First Name:</strong> shaik</p>
              <p><strong>Last Name:</strong> Afrid</p>
              <p><strong>Whatsapp Update:</strong> Not subscribed <button className="btn btn-sm btn-outline-success ms-2">Subscribe Now</button></p>
              <p><strong>Email:</strong> afridshaik493@gmail.com</p>
              <p className="text-danger">
                <button className="btn btn-sm btn-outline-danger me-2">Update the Mobile No.</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Logins */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-10">
          <div className="card p-4">
            <h5 className="fw-bold">Recent Logins</h5>
            <p className="mt-3">
              01 Dec 2024, 3:42 PM — Chrome (Windows 10)
            </p>
          </div>
        </div>
      </div>

      {/* Billing Info */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-10">
          <div className="card p-4">
            <h5 className="fw-bold">Billing Info <FaEdit className="text-success ms-2" /></h5>
            {/* Add billing details here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
