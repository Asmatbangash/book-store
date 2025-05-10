class apiError extends Error {
  constructor(statusCode, msg, data, stack) {
    super(msg);
    this.statusCode = statusCode;
    this.msg = msg;
    this.data = data;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
