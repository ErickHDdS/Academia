import api from "../config/api";

export const registerTraining = async (body, userId) => {
  let { data } = await api.post("training/" + userId, body);
  console.log(data);
  return data;
};
