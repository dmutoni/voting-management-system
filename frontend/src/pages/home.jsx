import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Candidate from "../components/candidate";
import Header from "../components/header";
import { getCandidates } from "../services/candidate.service";

export default function Home() {
  const [candidates, setCandidates] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    getCandidates()
      .then((info) => {
        setCandidates(info.data);
        console.log(candidates);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="col-12">
      <Header />
      <div className="m-lg-4 p-2 p-md-2 p-sm-3 d-lg-flex d-md-block ">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p className="fw-bold fs-1 col-sm-12 ">
            Fast and secure Presidential Elections{" "}
          </p>
          <p className="fw-normal fs-6">
            For sure you have made a right choice
          </p>
          <Link to="/login">
            <button className="btn bg-text-color col-12 col-lg-6 h-25 bg-app-primary">
              JOIN NOW
            </button>
          </Link>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-none d-lg-block mt-md-6">
          <img
            className="w-50 d-block mx-auto"
            src={"../assets/images/phone.png"}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center mt-md-3 ">
        <p className="d-block mx-auto font-bold fs-4">All candidates</p>
      </div>
      <div className="row col-12 mx-0 px-0 col-lg-8  mx-lg-auto  ">
        {isLoading ? (
          <div className="d-flex justify-content-center align-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          candidates.map((candidate) => (
            <Candidate
              key={candidate._id}
              candidateName={candidate.candidateName}
              id={candidate.id}
              candidateImage={candidate.candidateImage}
            />
          ))
        )}
      </div>
    </div>
  );
}
