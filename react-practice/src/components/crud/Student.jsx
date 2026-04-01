import { deleteStudent, getStudents } from "../../api/CRUD";
import { useState, useEffect } from "react";
import Loader from "../common/Loader";
import { useNavigate } from "react-router";

const UsersPage = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navgation = useNavigate();

  // Dummy data — baad mein yahan API se data aayega
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setusers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // ✅ hamesha chale ga
      }
    };
    fetchStudents();
  }, []);

  if (loading) return <Loader />;
   

  // Helper — naam ke pehle 2 letters nikalny ke liye avatar ke liye
  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  // Delete Api Call
  const deletehandel = (id) => {
    const confirm = window.confirm("Kya such m delete krna h");
    if (!confirm) return;
    try {
      deleteStudent(id); // ← API call

      // ── Table se bhi hatao ──
      setusers(users.filter((user) => user.id !== id));
    } catch (err) {
      alert(err.message); // ← Error dikhao
    }
  };

  const adduserpage = () => {
    navgation("/create");
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* ---- Header ---- */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-0">Users Management</h2>
            <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              Total {users.length} users registered
            </p>
          </div>
          <button onClick={adduserpage} className="btn btn-primary px-4">
            + Add User
          </button>
        </div>

        {/* ---- Stats Cards ---- */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-3">
              <p className="text-muted mb-1" style={{ fontSize: "13px" }}>
                Total Users
              </p>
              <h3 className="fw-bold text-primary mb-0">{users.length}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-3">
              <p className="text-muted mb-1" style={{ fontSize: "13px" }}>
                Cities Covered
              </p>
              <h3 className="fw-bold text-success mb-0">
                {new Set(users.map((u) => u.city)).size}
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center p-3">
              <p className="text-muted mb-1" style={{ fontSize: "13px" }}>
                Avg Age
              </p>
              <h3 className="fw-bold text-warning mb-0">
                {Math.round(
                  users.reduce((s, u) => s + u.age, 0) / users.length,
                )}
              </h3>
            </div>
          </div>
        </div>

        {/* ---- Table Card ---- */}
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            {/* Table Header */}
            <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
              <h6 className="fw-bold mb-0">All Users</h6>
              <input
                type="text"
                className="form-control w-auto"
                placeholder="Search users..."
                style={{ fontSize: "13px" }}
              />
            </div>

            {/* Table — baad mein yeh alag component banega */}
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="px-4">#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td className="px-4 text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          {/* Avatar circle */}
                          <div
                            className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center fw-bold text-primary"
                            style={{ width: 34, height: 34, fontSize: 13 }}
                          >
                            {getInitials(user.name)}
                          </div>
                          <span className="fw-semibold">{user.name}</span>
                        </div>
                      </td>
                      <td>{user.age}</td>
                      <td>{user.city}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-outline-primary me-1"
                          onClick={() => navgation(`/edit/${user.id}`)}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deletehandel(user.id)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
