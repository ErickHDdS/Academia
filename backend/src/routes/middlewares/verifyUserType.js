import ErrorAPI from '../../error/ErrorAPI.js';

function verifyUserType(request, next, typeUser) {
  const { userType } = request.params;

  if (userType === typeUser) {
    next();
  } else {
    throw new ErrorAPI(401, 'Unauthorized user');
  }
}

export function verifyIsSecretary(req, res, next) {
  return verifyUserType(req, next, "SECRETARY");
}

export function verifyIsProfessor(req, res, next) {
  return verifyUserType(req, next, "PROFESSOR");
}

export function verifyIsDoctor(req, res, next) {
  return verifyUserType(req, next, "DOCTOR");
}
