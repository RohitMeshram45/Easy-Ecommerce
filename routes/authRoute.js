import express from "express"

import { registerController, loginController, testController, forgetPasswordController } from "../controller/authController.js"
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js"
const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginController)
//  Forget Password || Post method
router.post("/forget-password", forgetPasswordController)

// Test Routes
router.get("/test", requireSignIn, testController)

//  Protected Route auth

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

// Protect Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true })
})

export default router;