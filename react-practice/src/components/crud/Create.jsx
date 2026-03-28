import React, { useState } from "react";
import { useNavigate } from "react-router";

const Create = () => {
  const navigation = useNavigate();

  // Form ka state
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
  });

  // Jab bhi koi field change ho
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit hone par
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData); // baad mein yahan Axios call aayegi
  };

  // Reset button
  const handleReset = () => {
    setFormData({ name: "", age: "", city: "" });
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Back + Heading */}
        <div className="d-flex align-items-center gap-2 mb-4">
          <button
            onClick={() => navigation("/")}
            className="btn btn-light btn-sm border"
          >
            ← Back
          </button>
          <div>
            <h2 className="fw-bold mb-0">Add New User</h2>
            <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
              Fill in the details below to register a new user
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: "14px" }}
            >
              {/* Blue Header */}
              <div
                className="bg-primary p-4 text-white"
                style={{ borderRadius: "14px 14px 0 0" }}
              >
                <h5 className="fw-bold mb-1">User Registration</h5>
                <p className="mb-0" style={{ fontSize: "13px", opacity: 0.8 }}>
                  Enter user information
                </p>
              </div>

              {/* Form Body */}
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. Ali Mudasir"
                      required
                      style={{ borderRadius: "10px", padding: "10px 14px" }}
                    />
                    <div className="form-text" style={{ fontSize: "12px" }}>
                      Enter first and last name
                    </div>
                  </div>

                  {/* Age Field */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Age <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. 22"
                      min="1"
                      max="120"
                      required
                      style={{ borderRadius: "10px", padding: "10px 14px" }}
                    />
                    <div className="form-text" style={{ fontSize: "12px" }}>
                      Age must be between 1 and 120
                    </div>
                  </div>

                  {/* City Field */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      City <span className="text-danger">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-select"
                      required
                      style={{ borderRadius: "10px", padding: "10px 14px" }}
                    >
                      <option value="" disabled>
                        Select a city
                      </option>
                      <option>Karachi</option>
                      <option>Lahore</option>
                      <option>Islamabad</option>
                      <option>Rawalpindi</option>
                      <option>Peshawar</option>
                      <option>Quetta</option>
                      <option>Multan</option>
                      <option>Faisalabad</option>
                    </select>
                  </div>

                  {/* Note */}
                  <div
                    className="p-3 mb-4"
                    style={{
                      background: "#f0f7ff",
                      borderRadius: "10px",
                      borderLeft: "4px solid #0d6efd",
                    }}
                  >
                    <p
                      className="mb-0 text-primary"
                      style={{ fontSize: "13px" }}
                    >
                      <strong>Note:</strong> All fields marked with{" "}
                      <span className="text-danger">*</span> are required.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-3">
                    <button
                      type="submit"
                      className="btn btn-primary flex-fill py-2 fw-semibold"
                      style={{ borderRadius: "10px", fontSize: "15px" }}
                    >
                      Save User
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn btn-outline-secondary px-4 py-2"
                      style={{ borderRadius: "10px", fontSize: "15px" }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
