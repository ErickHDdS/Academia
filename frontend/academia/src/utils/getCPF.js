import axiosInstance from "../config/api.js";

const GetUserCPF = ({
  cpf,
  setError,
  setSuccess,
  setNotFound,
  setUser,
  setLoadng,
}) => {
  const custonFetch = () => {
    axiosInstance
      .get(`/api/user/${cpf}/`)
      .then((res) => {
        if (res.data.message) {
          setNotFound(true);
        } else {
          setSuccess(true);
          setUser(res.data);
        }
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoadng(false);
      });
  };
  custonFetch();
};

export default GetUserCPF;
