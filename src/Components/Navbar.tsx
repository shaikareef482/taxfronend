import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to={""}>
            Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ maxHeight: "100px", overflowY: "auto" }}
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={""}>
                Transtractions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={""}>
                Fill Form 60
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link "  to={""}>
                Download Trantractions
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
