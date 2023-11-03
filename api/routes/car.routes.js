import express from "express";
import formidable from "express-formidable";
import { createCar } from "../controller/car.controller";
import { handleimage } from "../controller/imageUpload.controller";

const router = express.Router();

router.post("/createCar", createCar);
router.post(
  "/image/upload",
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  handleimage
);

export default router;
