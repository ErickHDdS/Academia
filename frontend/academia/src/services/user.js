import api from "../config/api";
import jwt_decode from "jwt-decode";

export const login = async (body) => {
  const { data } = await api.post("/user/login", body);

  return jwt_decode(data.jwt);
};

export const logout = async () => {
  await api.post("/user/logout");
};

export const getWorkouts = async () => {
  let { data } = await api.get("/user/training");
  return data;
};

export const getExam = async () => {
  let { data } = await api.get("/user/exam");
  return data;
};
