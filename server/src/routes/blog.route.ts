import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Blog Get Route");
});
router.post("/create", (req, res) => {
  res.send("Blog Post Route");
});

export default router;
