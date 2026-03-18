import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UserEdit = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");
  const { id } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    editapi();
  }, []);

  const editapi = async () => {
    let url = `http://localhost:5126/api/Student/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setname(data.name);
    setage(data.age);
    setcity(data.city);
  };

  const formhandeler = async (event) => {
    event.preventDefault();

    let url = `http://localhost:5126/api/Student/${id}`;

    let res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, city, id: parseInt(id) }),
    });

    if (res.ok) {
      alert("user successfully edited");
      navigation("/")
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-center mb-4">User Edit</h3>

            <form onSubmit={formhandeler}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  value={name}
                  onChange={(event) => setname(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  value={age}
                  onChange={(event) => setage(event.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Enter your age"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  value={city}
                  onChange={(event) => setcity(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your city"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
