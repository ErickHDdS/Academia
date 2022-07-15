import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:" + process.env.REACT_APP_API_ENDPOINT + "/api/",
});

export const setApiToken = (token) => {
  axiosInstance.defaults.headers.token = token;
};

export const removeApiToken = () => {
  delete axiosInstance.defaults.headers.token;
};

export default axiosInstance;
