import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <div className="col-12 d-flex flex-row gap-4">
      <div className="col-2 ">
        <Sidebar />
      </div>
      <div className="col-12 col-lg-8 mt-5">
        <div className="d-block d-lg-flex flex-row justify-content-between ">
          <h2>All candidates</h2>
          <Link to="/add-candidate">
            <button type="button" className="btn bg-app-primary bg-text-color ">
              Add candidate
            </button>
          </Link>
        </div>
        <table className="table table-hover table-bordered mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td className="d-flex fex-row gap-2">
                <button type="button" className="btn btn-primary">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
