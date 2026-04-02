import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../api/userAuth";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setError(null);
    setLoading(true);

    try {
      const res = await loginUser(data);
      localStorage.setItem("token", res.token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div
        className="card shadow-sm mx-auto"
        style={{ maxWidth: "520px", borderRadius: "16px", overflow: "hidden" }}
      >
        {/* ===== HEADER ===== */}
        <div
          className="p-4 text-white"
          style={{ background: "linear-gradient(135deg, #0d6efd, #0a58ca)" }}
        >
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="fw-semibold mb-1">Login User</h5>
              <small style={{ opacity: 0.85 }}>
                login now end get best things for you
              </small>
            </div>
            <span className="badge bg-success-subtle text-success rounded-2">
              🔒 privaticy importance
            </span>
          </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="card-body p-4">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              {/* Email */}
              <div className="col-12">
                <label className="form-label fw-semibold small">
                  Email Address
                </label>
                <div className="input-group">
                  <span className="input-group-text">✉</span>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                    placeholder="ali@example.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="col-12">
                <label className="form-label fw-semibold small">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="form-control"
                  placeholder="Min. 8 characters"
                />
                <div className="form-text">
                  Use letters, numbers &amp; symbols for a strong password.
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 mt-4">
                <button
                  disabled={loading}
                  className="btn btn-primary w-100 fw-semibold py-2"
                >
                  {loading ? "Login..." : "Login"}
                </button>
              </div>

              {/* Divider */}
              <div className="col-12 text-center">
                <hr className="text-muted" />
                <small className="text-muted">
                  Already have NO account?{" "}
                  <a
                    href="/auth/register"
                    className="text-primary fw-semibold text-decoration-none"
                  >
                    Register acc
                  </a>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
