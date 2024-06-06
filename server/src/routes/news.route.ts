import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("News Get Route");
});
router.post("/create", (req, res) => {
  res.send("News Post Route");
});

export default router;
