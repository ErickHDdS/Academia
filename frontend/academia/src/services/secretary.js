import api from "../config/api";

export const register = (body) => {
  api.post("user/", body);
};
