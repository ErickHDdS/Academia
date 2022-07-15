import jwt from 'jsonwebtoken';
import ErrorAPI from '../error/ErrorAPI.js';

export const generateJwtToken = (data) => {
  if (process.env.SECRET === undefined || process.env.EXPIRES_TOKEN_SECONDS === undefined) {
    throw new ErrorAPI(500);
  }

  return jwt.sign(
    data,
    process.env.SECRET,
    {
      expiresIn: parseInt(process.env.EXPIRES_TOKEN_SECONDS, 10),
    },
  );
};

function authenticateUser(token) {
  try {
    return jwt.verify(token, process.env.SECRET);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) throw new ErrorAPI(401, 'Expired token');

    throw new ErrorAPI(401, 'Problem found in token verify');
  }
}

export function checkUserLogged(token) {
  if (!token) throw new ErrorAPI(401, 'Token is missing in cookies of request');

  return authenticateUser(token);
}
