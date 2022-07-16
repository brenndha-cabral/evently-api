"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        Object.setPrototypeOf(this, HttpException.prototype);
        this.status = status;
    }
}
exports.default = HttpException;
