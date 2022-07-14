import ErrorAPI from './ErrorAPI.js';

function errorHandler(error, request, response, next) {
  if (error instanceof ErrorAPI) {
    response.status(error.code).json({
      message: error.message,
    });
  } else {
    console.error({ error });
    response.sendStatus(500);
  }
}

export default errorHandler;
