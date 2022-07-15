import api from "../config/api";

export const getIMC = async () => {
  const { data } = await api.get("/imc/");
  return data;
};
