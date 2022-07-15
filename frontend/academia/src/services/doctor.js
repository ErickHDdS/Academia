import api from "../config/api";

export const registerExam = async (body, userId) => {
  let { data } = await api.post("user/exam/" + userId, body);
  return data;
};
