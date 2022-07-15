import api from "../config/api";

export const register = (body) => {
  console.log(body);
  api.post("/user", body);
};
