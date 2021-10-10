"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pawn_1 = __importDefault(require("./Pawn"));
class Grid {
    constructor(width, height) {
        this.__width = width;
        this.__height = height;
        this.__grid = this.__createGrid();
    }
    __createGrid() {
        let grid = [];
        for (let y = 0; y < this.__height; y++) {
            grid[y] = [];
            for (let x = 0; x < this.__width; x++) {
                // @ts-ignore
                grid[y][x] = undefined;
            }
        }
        return grid;
    }
    __check(pawn) {
        // check horizontally
        let count = 0;
        for (let x = 0; x < this.__width; x++) {
            if (x - 1 in this.__grid[pawn.y]) {
                if (this.__grid[pawn.y][x - 1] != undefined) {
                    if (this.__grid[pawn.y][x - 1].color == pawn.color) {
                        count++;
                        if (count >= 4)
                            return true;
                    }
                    else {
                        count = 0;
                    }
                }
                else {
                    count = 0;
                }
            }
        }
        // check vertically
        count = 0;
        for (let y = 0; y < this.__height; y++) {
            if (y + 1 in this.__grid) {
                if (this.__grid[y + 1] != undefined && this.__grid[y + 1][pawn.x] != undefined) {
                    if (this.__grid[y + 1][pawn.x].color == pawn.color) {
                        count++;
                        if (count >= 4)
                            return true;
                    }
                    else {
                        count = 0;
                    }
                }
                else {
                    count = 0;
                }
            }
        }
        // check diagonally (top left to bottom right);
        count = 0;
        let y = 0;
        for (let x = pawn.x - pawn.y; x <= this.__width - pawn.x - pawn.y; x++) {
            if (Math.sign(x) != -1) {
                if (this.__grid[y - 1] != undefined && this.__grid[y - 1][x - 1] != undefined) {
                    if (this.__grid[y - 1][x - 1].color == pawn.color) {
                        count++;
                        console.log("count: " + count);
                        if (count >= 4)
                            return true;
                    }
                    else {
                        count = 0;
                    }
                }
                else {
                    count = 0;
                }
            }
            y++;
        }
        // check diagonally (top right to bottom left);
        count = 0;
        y = 0;
        for (let x = pawn.x + pawn.y; x > 0; x--) {
            if (x <= this.__width) {
                if (this.__grid[y - 1] != undefined && this.__grid[y - 1][x + 1] != undefined) {
                    if (this.__grid[y - 1][x + 1].color == pawn.color) {
                        count++;
                        if (count >= 4)
                            return true;
                    }
                    else {
                        count = 0;
                    }
                }
                else {
                    count = 0;
                }
            }
            console.log("x: " + x + " y: " + y);
            y++;
        }
        return false;
    }
    addPawn(column, color) {
        for (let y = 0; y < this.__height; y++) {
            for (let x = 0; x < this.__width; x++) {
                if (x == column) {
                    if (this.__grid[y][x] == undefined) {
                        if ((y + 1) in this.__grid) {
                            if (this.__grid[y + 1][x] == undefined) {
                            }
                            else {
                                this.__grid[y][x] = new Pawn_1.default(x, y, color);
                                if (this.__check(this.__grid[y][x])) {
                                    this.clear();
                                }
                            }
                        }
                        else {
                            this.__grid[y][x] = new Pawn_1.default(x, y, color);
                            if (this.__check(this.__grid[y][x])) {
                                this.clear();
                            }
                        }
                    }
                }
            }
        }
    }
    clear() {
        this.__grid = this.__createGrid();
    }
    get grid() {
        return this.__grid;
    }
    get width() {
        return this.__width;
    }
    get height() {
        return this.__height;
    }
}
exports.default = Grid;
