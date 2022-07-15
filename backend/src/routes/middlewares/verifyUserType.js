import ErrorAPI from '../../error/ErrorAPI.js';

function verifyUserType(request, next, typeUser) {
  const { userType } = request.params;

  if (userType === typeUser) {
    next();
  } else {
    throw new ErrorAPI(401, 'Unauthorized user');
  }
}

export default verifyUserType;
