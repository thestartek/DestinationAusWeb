import { Router } from "express";
import { blogRoutes, faqRoutes, newsRoutes, uploadRoutes } from ".";

const router = Router();

router.use("/blog", blogRoutes);
router.use("/news", newsRoutes);
router.use("/upload", uploadRoutes);
router.use("/faq", faqRoutes);

export default router;
