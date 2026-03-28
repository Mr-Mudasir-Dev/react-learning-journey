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
