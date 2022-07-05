import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

export default function SignUp() {
  return (
    <div className="col-12">
      <Header />
      <div className="col-12 col-lg-4 mx-auto border  p-5 mt-5">
        <p className="font-bold fs-1">Sign up</p>
        <form>
          <div className="mb-3">
            <label for="exampleInputNames" className="form-label">
              Full names
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputNames"
              aria-describedby="exampleInputNames"
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
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
            />
          </div>
          <button
            type="submit"
            className="btn bg-app-primary bg-text-color col-12"
          >
            Submit
          </button>
          <div className="d-flex flex-row justify-content-center gap-2 mt-2 ">
            <p>Already have an account ? </p>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
