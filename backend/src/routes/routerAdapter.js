export default (handlerFn ) =>
  (request, response, next) =>
    Promise
      .resolve(handlerFn(request, response, next))
      .catch((e) => next(e));
