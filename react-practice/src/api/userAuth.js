import apiClint from "./axiosInstance";

export const registerUser = async (data) => {
  try {
    const res = await apiClint.post("/Auth/register", {
      name: data.name,
      email: data.email,
      passwordHash: data.password,
    });
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error("Email pehle se exist karta hai!");
    }
    if (error.request) {
      throw new Error("Network Error: Server se connection nahi hua");
    }
    throw new Error(error.message);
  }
};

export const loginUser = async (data) => {
  try {
    const res = await apiClint.post("/Auth/login", {
      email: data.email,
      passwordHash: data.password,
    });
    return res.data; // ← token aayga
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error("Email ya password galat hai!");
    }

    if (error.request) {
      throw new Error("Network Error: Server se connection nahi hua");
    }
    throw new Error(error.message);
  }
};
