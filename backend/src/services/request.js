export const addTokenPayloadToRequestParams = (req, payload) => {
  req.params = {
    ...req.params,
    ...payload,
  };
};
