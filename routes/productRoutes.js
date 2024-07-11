import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createProductController } from "../controller/productController.js";
const formidableMiddleware = require('express-formidable');

const router = express.Router();


router.post("/create-product",requireSignIn,isAdmin,formidableMiddleware(), createProductController)

export default router