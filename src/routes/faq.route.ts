import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("FAQ Get Route");
});

router.post("/create", (req, res) => {
  res.send("FAQ Post Route");
});

export default router;
