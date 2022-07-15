import axiosClient from "./axios.js";

const getUserCPF = ({
  cpf,
  setError,
  setSuccess,
  setNotFound,
  setUser,
  setLoadng,
}) => {
  const custonFetch = () => {
    axiosClient
      .post(`/api/user/${cpf}/`)
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
};

export default getUserCPF;