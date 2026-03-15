import { useState } from "react";

const Create = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [city, setcity] = useState("");

  const formhandeler = async (event) => {
    event.preventDefault();

    let url = "http://localhost:5126/api/Student";

    let form = {
      name,
      age,
      city,
    };

    let respons = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    let data = await respons.json();
    console.log("saved", data);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="text-center mb-4">Simple Form</h3>

            <form onSubmit={formhandeler}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  onChange={(event) => setname(event.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  onChange={(event) => setage(event.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Enter your age"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <input
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

export default Create;
