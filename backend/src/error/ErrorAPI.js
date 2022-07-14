class ErrorAPI extends Error {
    code;

    constructor(
      status,
      message,
    ) {
      super(message);
      this.code = status;
    }
}

export default ErrorAPI;
export const defaultError = new ErrorAPI(500, 'Erro inesperado no servidor');
