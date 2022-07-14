import ErrorAPI from '../error/ErrorAPI.js';

function verifyUserAdmin(request, response, next) {
  const { userType } = request.params;

  if (userType === 'ADMIN') {
    next();
  } else {
    throw new ErrorAPI(401, 'unauthorized user');
  }
}

export default verifyUserAdmin;
