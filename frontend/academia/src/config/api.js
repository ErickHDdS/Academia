import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:" + process.env.REACT_APP_API_ENDPOINT + "/api/",
  withCredentials: true,
});

export default axiosInstance;
