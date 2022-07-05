import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="col-12 py-3 bg-app-primary">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to={"/"} className="text-decoration-none">
            <span className="bg-text-color fw-bold fs-2">Vote pro</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
