import React from "react";
import { Link } from "react-router-dom";

export default function Candidate(props) {
  return (
    <div className="col-lg-3 col-md-12">
      <div className="border d-flex flex-column justify-content-center align-content-center p-2 m-2 ">
        <img src={"../assets/images/barack.png"} alt="president" />
        <p className="m-2 fw-bold fs-6">{props.candidateName}</p>
        <div className="row mx-1">
          <button className="btn col bg-app-primary bg-text-color me-2">
            {" "}
            Vote{" "}
          </button>
          <Link className="col" to="/details/{props.id}">
            <button className="btn btn-outline-success"> Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
