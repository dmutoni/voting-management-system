import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";

export default function Details({ candidate }) {
  let { id } = useParams();
  return (
    <div className="col-12">
      <Header />
      <div className="row mx-0 px-0 my-3 mx-lg-auto mt-lg-5 ">
        <img className="col-12 col-lg-3" src={"../assets/images/barack.png"} />
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-row ">
            <p className="fw-bold fs-2 me-1 ">Names: </p>
            <p className="fw-bold fs-2">Barack Obama</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Gender: </p>
            <p className="">Male</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Gender: </p>
            <p className="">Male</p>
          </div>
          <div className="d-flex flex-row ">
            <p className="">Location: </p>
            <p className="">New york</p>
          </div>
          <div className="d-flex flex-column ">
            <p className="fw-bold">I agree to: </p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              saepe, inventore adipisci dolorum facere quidem aspernatur
              quibusdam optio placeat exercitationem dolores hic quasi, sit
              magnam eum nihil illum laborum labore.
            </p>
          </div>
          <button className="btn col-12 bg-app-primary bg-text-color me-2">
            {" "}
            Vote{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
