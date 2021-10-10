import { Router } from "express";

import { BoardComponent } from './../components';

const router: Router = Router();

// @ts-ignore
router.get('/', BoardComponent.index);
router.get('/:column', BoardComponent.play);

export default router;