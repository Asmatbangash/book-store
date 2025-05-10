class apiResponse {
  constructor(statusCode, data, msg) {
    this.statusCode = statusCode;
    this.msg = msg;
    this.data = data;
  }
}

export { apiResponse };
