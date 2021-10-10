"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pawn {
    constructor(x, y, color) {
        this.__x = x;
        this.__y = y;
        this.__color = color;
    }
    get x() {
        return this.__x;
    }
    get y() {
        return this.__y;
    }
    get color() {
        return this.__color;
    }
}
exports.default = Pawn;
