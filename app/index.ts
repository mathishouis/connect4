import express from 'express';

import * as Routes from './routes';
import Grid from "./objects/Grid";

const app: express.Application = express();

Routes.init(app);

const grid: Grid = new Grid(7, 6);
console.log(grid.grid);
app.locals.grid = grid;
app.locals.round = 0;

app.listen(8081, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${8081}`);
});