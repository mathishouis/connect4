import {Request, Response} from "express";
import { createCanvas, loadImage } from "canvas";
import Pawn from "../../objects/Pawn";

async function draw(req: Request) {

    const canvas = createCanvas(417, 402);

    const context = canvas.getContext("2d");


    const image = await loadImage("http://localhost:3000/images/grid.png");


    context.drawImage(image, 0, 0);

    let grid: Pawn[][] = [[]]

    for(let y = 0; y < req.app.locals.grid.grid.length; y++) {
        grid[y] = req.app.locals.grid.grid[y];
        for(let x = 0; x < req.app.locals.grid.grid[y].length; x++) {
            // @ts-ignore
            grid[y][x] = req.app.locals.grid.grid[y][x];

            if(grid[y][x] != undefined) {
                if(grid[y][x])
                    switch (grid[y][x].color) {
                        case 0:
                            context.drawImage(await loadImage("http://localhost:3000/images/red.png"), 5 + (x * 58), 48 + (y * 58));
                            break;
                        case 1:
                            context.drawImage(await loadImage("http://localhost:3000/images/yellow.png"), 5 + (x * 58), 48 + (y * 58));
                            break;
                    }
            }
        }
    }

    return canvas.toBuffer()
}

export async function index(req: Request, res: Response): Promise<void> {


    const image = await draw(req);

    const headers = { "Content-Type": "image/png" };

    res.set('Cache-Control', 'public, max-age=-300');

    res.writeHead(200, headers);

    res.end(image);
}

export  async function play(req: Request, res: Response): Promise<void> {
    const column: number = parseInt(req.params.column);

    console.log(column);
    if(column >= 0 && column <= (req.app.locals.grid.grid[0].length - 1)) {
        if(req.app.locals.round == 0) {
            req.app.locals.grid.addPawn(column, req.app.locals.round);
            req.app.locals.round = 1
        } else {
            req.app.locals.grid.addPawn(column, req.app.locals.round);
            req.app.locals.round = 0
        }
        res.redirect('https://github.com/kozennnn');
    } else {
        res.redirect('https://github.com/kozennnn');
    }
}