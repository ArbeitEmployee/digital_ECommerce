// routes/categoryRoutes.js
import express from "express";
import {
  createCategory,
  getCategories,
  getPublicCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// Public route - Get categories (no authentication required)
router.get("/public", getPublicCategories);

// All other routes are protected (Admin only)
router.use(protect);

router.route("/").post(createCategory).get(getCategories);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
