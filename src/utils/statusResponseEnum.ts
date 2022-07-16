export enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export enum StatusResponse {
  BAD_REQUEST = 'Bad Request',
  NOT_FOUND = 'Not found',
  CONFLICT = 'Conflict',
  CREATED = 'Created',
  UNAUTHORIZED = 'Unauthorized',
  UNPROCESSABLE_ENTITY = 'Unprocessable Entity',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
}
