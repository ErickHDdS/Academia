import api from "../config/api";
import jwt_decode from "jwt-decode";

export const login = async (body) => {
  const { data } = await api.post("/user/login", body);
  console.log(jwt_decode(data.jwt));
  return jwt_decode(data.jwt);
};
