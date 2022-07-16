import axiosInstance from "../config/api";

const GetUserCPF = ({
  cpf,
  setSuccess,
  setNotFound,
  setUser,
  setLoadng,
  setSearch,
  search,
}) => {
  const custonFetch = () => {
    axiosInstance
      .get(`user/${cpf}/`)
      .then((res) => {
        if (res.data.message) {
          setNotFound(true);
        } else {
          setSuccess(true);
          setUser(res.data);
        }
      })
      .catch((err) => {
        setNotFound(true);
      })
      .finally(() => {
        setLoadng(false);
      });
  };

  if (search) {
    setSearch(false);
    custonFetch();
  }
};

export default GetUserCPF;
