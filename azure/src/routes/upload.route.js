import { Router } from "express";
import { uploadHandler } from "../controllers/azure.controller.js";

const router = Router();

router.get("/upload", (req, res) => {
  res.send("Upload Route working");
});
router.post("/upload", uploadHandler);

export default router;
