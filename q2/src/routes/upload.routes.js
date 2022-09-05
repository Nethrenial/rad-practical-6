import express from "express";
import multer from "multer";

const upload = multer();

import { uploadController } from "../controllers/index.js";

const uploadRouter = express.Router();

// index route
uploadRouter.get("/", uploadController.getUploadPage);
uploadRouter.post("/", upload.single("photo"), uploadController.upload);

export default uploadRouter;
