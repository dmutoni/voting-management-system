import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function AddCandidate() {
  return (
    <div className="d-flex flex-row gap-4">
      <div className="col-2 ">
        <Sidebar />
      </div>
      <div className="col-12 col-lg-4 mt-5">
        <h3>Add Candidate</h3>
        <form>
          <div className="mb-3">
            <label for="fullname" className="form-label">
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              aria-describedby="fullnameHelp"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              I agree to
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <Link to={"/dashboard"}>
            <button
              type="submit"
              className="btn bg-app-primary bg-text-color col-12"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
