import { useEffect, useState } from "react";

const Show = () => {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    getapi();
  }, []);

  const getapi = async () => {
    let url = "http://localhost:5126/api/Student";
    let respons = await fetch(url);
    let data = await respons.json();
    setuserdata(data);
  };

  const userdel = async (id) => {
    console.log(id);

    let url = `http://localhost:5126/api/Student/${id}`;

    const res = await fetch(url, {
      method: "DELETE",
    });
    let user = userdata.find((user) => user.id == id);
    if (res.ok) {
      alert("User was deleted " + user.name);
      setuserdata(userdata.filter((user) => user.id !== id));
    }
  };

  // Ye bahar component se pehle likho:
  const thStyle = {
    padding: "10px 1.25rem",
    textAlign: "left",
    fontSize: 12,
    color: "#888",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    borderBottom: "0.5px solid #e5e5e5",
    fontWeight: 500,
  };

  return (
    <>
      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            background: "white",
            border: "0.5px solid #e5e5e5",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "1rem 1.25rem",
              borderBottom: "0.5px solid #e5e5e5",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1D9E75",
              }}
            ></div>
            <span style={{ fontWeight: 500 }}>Student Records</span>
            <span
              style={{
                marginLeft: "auto",
                fontSize: 12,
                background: "#f5f5f5",
                padding: "3px 10px",
                borderRadius: 8,
                color: "#888",
              }}
            >
              {userdata.length} students
            </span>
          </div>

          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}
          >
            <thead>
              <tr style={{ background: "#fafafa" }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>City</th>
                <th style={thStyle}>Age</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((user, ind) => (
                <tr key={ind} style={{ borderBottom: "0.5px solid #e5e5e5" }}>
                  <td
                    style={{
                      padding: "11px 1.25rem",
                      color: "#888",
                      fontSize: 13,
                    }}
                  >
                    {String(user.id).padStart(2, "0")}
                  </td>
                  <td style={{ padding: "11px 1.25rem", fontWeight: 500 }}>
                    {user.name}
                  </td>
                  <td style={{ padding: "11px 1.25rem" }}>
                    <span
                      style={{
                        background: "#e6f1fb",
                        color: "#185FA5",
                        fontSize: 12,
                        padding: "2px 10px",
                        borderRadius: 99,
                      }}
                    >
                      {user.city}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "11px 1.25rem",
                      color: "#888",
                      fontSize: 13,
                    }}
                  >
                    {user.age}
                  </td>
                  <td
                    style={{
                      padding: "11px 1.25rem",
                      color: "#888",
                      fontSize: 13,
                    }}
                  >
                    <button
                      className="btn btn-danger"
                      onClick={() => userdel(user.id)}
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
    </>
  );
};

export default Show;
