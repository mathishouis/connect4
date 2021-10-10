"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = exports.index = void 0;
const canvas_1 = require("canvas");
function draw(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const canvas = (0, canvas_1.createCanvas)(417, 402);
        const context = canvas.getContext("2d");
        const image = yield (0, canvas_1.loadImage)("https://kozennnn-connect-four.herokuapp.com/images/grid.png");
        context.drawImage(image, 0, 0);
        let grid = [[]];
        for (let y = 0; y < req.app.locals.grid.grid.length; y++) {
            grid[y] = req.app.locals.grid.grid[y];
            for (let x = 0; x < req.app.locals.grid.grid[y].length; x++) {
                // @ts-ignore
                grid[y][x] = req.app.locals.grid.grid[y][x];
                if (grid[y][x] != undefined) {
                    if (grid[y][x])
                        switch (grid[y][x].color) {
                            case 0:
                                context.drawImage(yield (0, canvas_1.loadImage)("https://kozennnn-connect-four.herokuapp.com/images/red.png"), 5 + (x * 58), 48 + (y * 58));
                                break;
                            case 1:
                                context.drawImage(yield (0, canvas_1.loadImage)("https://kozennnn-connect-four.herokuapp.com/images/yellow.png"), 5 + (x * 58), 48 + (y * 58));
                                break;
                        }
                }
            }
        }
        return canvas.toBuffer();
    });
}
function index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const image = yield draw(req);
        const headers = { "Content-Type": "image/png" };
        res.writeHead(200, headers);
        res.end(image);
    });
}
exports.index = index;
function play(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const column = parseInt(req.params.column);
        console.log(column);
        if (column >= 0 && column <= (req.app.locals.grid.grid[0].length - 1)) {
            if (req.app.locals.round == 0) {
                req.app.locals.grid.addPawn(column, req.app.locals.round);
                req.app.locals.round = 1;
            }
            else {
                req.app.locals.grid.addPawn(column, req.app.locals.round);
                req.app.locals.round = 0;
            }
            res.send('Express Server: ' + column + ' boardX: ' + req.app.locals.grid.grid[0].length);
        }
        else {
            res.send('Unknow column');
        }
    });
}
exports.play = play;
