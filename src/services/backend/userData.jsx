import axios from "axios";
import { sha256 } from "../../utils/encryption";

export const getAllUsers = async () => {
  const response = await axios.get(`http://localhost:4000/userData`);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`http://localhost:4000/userData/${id}`);
  return response.data;
};

export const createUser = async (userData) => {
  try {
    userData.password = await sha256(userData.password);
    const response = await axios.post(
      `http://localhost:4000/userData`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    if (userData.password === "") {
      delete userData.password;
    }
    const response = await axios.put(
      `http://localhost:4000/userData/${id}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:4000/userData/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
