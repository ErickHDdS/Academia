import api from "../config/api";

export const register = (body) => {
  console.log(body);
  api.post("/user", body);
};

export const getMatriculaInfos = async () => {
  const data = await api.get("/modalities");
  return data;
};

export const submmitMatricula = async (body) => {
  api.post("/registration", body)
}

