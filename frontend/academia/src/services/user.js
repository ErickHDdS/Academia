import api from "../config/api";
import jwt_decode from "jwt-decode";

export const login = async (body) => {
  const { data } = await api.post("/user/login", body);

  return jwt_decode(data.jwt);
};
