"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const components_1 = require("./../components");
const router = (0, express_1.Router)();
// @ts-ignore
router.get('/', components_1.BoardComponent.index);
router.get('/:column', components_1.BoardComponent.play);
exports.default = router;
