import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import  { createCategoryController, categoryController, delecategoryController, singleCategoryController, updateCategoryController } from "../controller/categoryController.js";

const router = express.Router();

router.get("/get-category", categoryController)
router.post("/create-category", requireSignIn, isAdmin, createCategoryController)
router.put("/updte-category/:id", requireSignIn, isAdmin, updateCategoryController)
router.get("/single-category/:slug",singleCategoryController)
router.delete("/delete-category/:id",requireSignIn,isAdmin,delecategoryController);
export default router;
