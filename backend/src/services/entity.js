import ErrorAPI from '../error/ErrorAPI.js';

export const entityIfHeIsPresent = (entity, msg = '')=> {
  if (entity === null) throw new ErrorAPI(404, msg);

  return entity;
};
