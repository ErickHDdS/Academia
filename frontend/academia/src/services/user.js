import api from "../config/api";

export const login = async (body) => {
  const { data } = await api.post("/user/login", body);
  console.log(data);
};

// export const logout = (setUser) => {
//   setUser(null);
// };
