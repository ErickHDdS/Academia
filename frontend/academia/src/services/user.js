import api, { setApiToken, removeApiToken } from "../config/api";
import jwt_decode from "jwt-decode";

export const setUserToken = (jwtToken, setUser) => {
  setApiToken(jwtToken);

  setUser(jwt_decode(jwtToken));

  window.localStorage.setItem("@academia-mfal/user-token", jwtToken);
};

export const login = async (body, setUser) => {
  const { data } = await api.post("/user/login", body);

  setUserToken(data.jwt, setUser);
};

// export const logout = (setUser) => {
//   setUser(null);
// };
