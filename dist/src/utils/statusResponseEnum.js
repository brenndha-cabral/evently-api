"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusResponse = exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["CREATED"] = 201] = "CREATED";
    StatusCode[StatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCode[StatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["CONFLICT"] = 409] = "CONFLICT";
    StatusCode[StatusCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    StatusCode[StatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var StatusResponse;
(function (StatusResponse) {
    StatusResponse["BAD_REQUEST"] = "Bad Request";
    StatusResponse["NOT_FOUND"] = "Not found";
    StatusResponse["CONFLICT"] = "Conflict";
    StatusResponse["CREATED"] = "Created";
    StatusResponse["UNAUTHORIZED"] = "Unauthorized";
    StatusResponse["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity";
    StatusResponse["INTERNAL_SERVER_ERROR"] = "Internal Server Error";
})(StatusResponse = exports.StatusResponse || (exports.StatusResponse = {}));
