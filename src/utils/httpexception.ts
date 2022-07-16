class HttpException extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    Object.setPrototypeOf(this, HttpException.prototype);
    this.status = status;
  }
}

export default HttpException;
