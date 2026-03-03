import React from "react";
import { FaList, FaUsers } from "react-icons/fa";

const AdminGridboxes = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4">

        {/* Users */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">

                {/* Icon */}
                <div className="bg-primary text-white rounded p-3 d-flex align-items-center justify-content-center">
                  <FaUsers size={24} />
                </div>

                {/* Content */}
                <div className="ms-3">
                  <h6 className="mb-1 text-muted">Users</h6>
                  <h4 className="mb-0">203</h4>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* LOB Categories */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">

                <div className="bg-warning text-white rounded p-3 d-flex align-items-center justify-content-center">
                  <FaList size={24} />
                </div>

                <div className="ms-3">
                  <h6 className="mb-1 text-muted">LOB Categories</h6>
                  <h4 className="mb-0">203</h4>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">

                <div className="bg-info text-white rounded p-3 d-flex align-items-center justify-content-center">
                  <FaList size={24} />
                </div>

                <div className="ms-3">
                  <h6 className="mb-1 text-muted">Categories</h6>
                  <h4 className="mb-0">203</h4>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">

                <div className="bg-success text-white rounded p-3 d-flex align-items-center justify-content-center">
                  <FaList size={24} />
                </div>

                <div className="ms-3">
                  <h6 className="mb-1 text-muted">Articles</h6>
                  <h4 className="mb-0">203</h4>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminGridboxes;