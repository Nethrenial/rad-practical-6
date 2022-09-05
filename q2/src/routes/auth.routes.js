import express from "express";
import passport from "passport";
import { authController } from "../controllers/index.js";

const authRouter = express.Router();

// index route
authRouter.get("/register", authController.getRegisterPage);
authRouter.post("/register", authController.register);
authRouter.get("/login", authController.getLoginPage);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authController.logout);

export default authRouter;
