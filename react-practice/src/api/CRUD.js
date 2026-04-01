import apiClint from "./axiosInstance";

export const getStudents = async () => {
  try {
    const res = await apiClint.get("/Student");
    return res.data;
  } catch (error) {
    // Server ne error diya — jaise 404, 500
    if (error.response) {
      console.error("Server Error:", error.response.status);
      throw new Error(`Server Error: ${error.response.status}`);
    }

    // Internet nahi ya server band hai
    if (error.request) {
      console.error("Network Error: Server se connection nahi hua");
      throw new Error("Network Error: Server se connection nahi hua");
    }

    // Koi aur error
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await apiClint.delete(`/Student/${id}`);
    return res.data;
  } catch (error) {
    // Server ne error diya — jaise 404, 500
    if (error.response) {
      console.error("Server Error:", error.response.status);
      throw new Error(`Server Error: ${error.response.status}`);
    }

    // Internet nahi ya server band hai
    if (error.request) {
      console.error("Network Error: Server se connection nahi hua");
      throw new Error("Network Error: Server se connection nahi hua");
    }

    // Koi aur error
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};

export const createStudent = async (data) => {
  try {
    const res = await apiClint.post("/Student", data);
    return res.data;
  } catch (error) {
    // Server ne error diya — jaise 404, 500
    if (error.response) {
      console.error("Server Error:", error.response.status);
      throw new Error(`Server Error: ${error.response.status}`);
    }

    // Internet nahi ya server band hai
    if (error.request) {
      console.error("Network Error: Server se connection nahi hua");
      throw new Error("Network Error: Server se connection nahi hua");
    }

    // Koi aur error
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};

export const editStudent = async (id) => {
  try {
    const res = await apiClint.get(`/Student/${id}`);
    return res.data;
  } catch (error) {
    // Server ne error diya — jaise 404, 500
    if (error.response) {
      console.error("Server Error:", error.response.status);
      throw new Error(`Server Error: ${error.response.status}`);
    }

    // Internet nahi ya server band hai
    if (error.request) {
      console.error("Network Error: Server se connection nahi hua");
      throw new Error("Network Error: Server se connection nahi hua");
    }

    // Koi aur error
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};

export const putStudent = async (id, data) => {
  try {
    const res = await apiClint.put(`/Student/${id}`, {
      id: parseInt(id),
      ...data,
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      console.error("Server Error:", error.response.status);
      throw new Error(`Server Error: ${error.response.status}`);
    }
    if (error.request) {
      console.error("Network Error: Server se connection nahi hua");
      throw new Error("Network Error: Server se connection nahi hua");
    }
    console.error("Error:", error.message);
    throw new Error(error.message);
  }
};
