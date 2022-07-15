// Maybe RequestService have wrong responsibility here
import { JWTService, RequestService } from '../../services/index.js';

function verifyUserLogged(request, response, next) {
  const payload = JWTService.checkUserLogged(request.cookies.jwt);

  RequestService.addTokenPayloadToRequestParams(request, payload);

  next();
}

export default verifyUserLogged;
