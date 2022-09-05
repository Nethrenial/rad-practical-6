import express from "express";
import { homeController } from "../controllers/index.js";

const homeRouter = express.Router();

// index route
homeRouter.get("/", homeController.getHomePage);

export default homeRouter;
