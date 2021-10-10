import express from "express";

import BoardRouter from "./BoardRouter";

export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    app.use(express.static('public'));

    app.use('/board', BoardRouter)

    //app.use(router);
}