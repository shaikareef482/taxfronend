import React from "react";


const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Tax E-Filing
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex justify-content-Left align-items-center text-center">
        <div>
          <h1 className="mb-4">Welcome to Tax E-Filing</h1>
          <p className="mb-4">File your taxes securely and easily.</p>
          <div>
            <a href="/login" className="btn btn-primary me-3">
              Login
            </a>
            <a href="/register" className="btn btn-outline-primary">
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">© 2024 Tax E-Filing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

