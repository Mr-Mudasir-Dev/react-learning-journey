import React, { useEffect, useState } from "react";
import { editStudent, putStudent } from "../../api/CRUD";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Loader from "../common/Loader";

const Edit = () => {
  const { id } = useParams();
  const [loader, setloader] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await editStudent(id);

        reset({
          name: data.name,
          age: data.age,
          city: data.city,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setloader(false); // ✅ finally mein band karo
      }
    };
    fetchStudent();
  }, []);

  // ✅ PUT API call add ki!
  const onSubmit = async (data) => {
    try {
      setloading(true);
      setError(null);
      await putStudent(id, data); // ✅ bas itna!
      alert("Student updated!");
      navigation("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setloading(false);
    }
  };

  if (loader) return <Loader />;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

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
            <h2 className="fw-bold mb-0">Edit Student Profile</h2>
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
                <h5 className="fw-bold mb-1">My Information</h5>
                <p className="mb-0" style={{ fontSize: "13px", opacity: 0.8 }}>
                  Update your details below
                </p>
              </div>

              {/* Form Body */}
              <div className="card-body p-4">
                {error && (
                  <div
                    className="alert alert-danger"
                    style={{ borderRadius: "10px" }}
                  >
                    ❌ {error}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Ali Mudasir"
                      style={{ borderRadius: "10px", padding: "10px 14px" }}
                      {...register("name", { required: "Name zaruri hai!" })}
                      // ✅ sirf register — defaultValue hata diya!
                    />
                    <div className="form-text" style={{ fontSize: "12px" }}>
                      Enter first and last name
                    </div>
                  </div>

                  {/* Age */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      Age <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="e.g. 22"
                      style={{ borderRadius: "10px", padding: "10px 14px" }}
                      {...register("age", { required: "Age zaruri hai!" })}
                      // ✅ sirf register!
                    />
                    <div className="form-text" style={{ fontSize: "12px" }}>
                      Age must be between 1 and 120
                    </div>
                  </div>

                  {/* City */}
                  <div className="mb-4">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      City <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      style={{ borderRadius: "10px", padding: "10px 14px" }}
                      {...register("city", { required: "City zaruri hai!" })}
                      // ✅ reset() se automatically select hogi!
                    >
                      <option value="">Select a city</option>
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
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save User"}
                    </button>
                    <button
                      type="button"
                      onClick={() => reset()}
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

export default Edit;
