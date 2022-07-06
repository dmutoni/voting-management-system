import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { AuthContext } from "../context/GlobalContext";
import { login } from "../services/authentication.service";

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password })
      .then((resp) => {
        setUser(resp.data.user);
        setIsLoggedIn(true);
        console.log(resp);
        setIsLoading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  return (
    <div className="col-12">
      <Header />
      <div className="d-block col-12 col-lg-4 mx-auto border  p-5 mt-5">
        <p className="font-bold fs-1">Login</p>
        <form
          onSubmit={
            handleSubmit

            // function to set token to localstorage
            // localStorage.setItem("token", data.token);
            // set user into global auth context
            // setAuth(data.user);
            // redirect to home page
            // navigate("/");
          }
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {/* <Link to={"/dashboard"}> */}
          <button
            type="submit"
            className="btn bg-app-primary bg-text-color col-12"
          >
            Submit
          </button>
          {/* </Link> */}
          <div className="d-flex flex-row justify-content-center gap-2 mt-2 ">
            <p>Don't have an account ? </p>
            <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
