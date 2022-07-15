import ErrorAPI from '../../error/ErrorAPI.js';

function verifyUserType(request, next, typeUser) {
  return verifyUserTypeIn(request, next, [typeUser]);
}

function verifyUserTypeIn(request, next, typesUser) {
  const { userType } = request.params;

  if (typesUser.includes(userType)) {
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

export function verifyIsntPerson(req, res, next) {
  return verifyUserTypeIn(req, next, ["DOCTOR", "PROFESSOR", "SECRETARY"]);
}
