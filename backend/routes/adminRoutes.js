import express from "express";
import {
  registerAdmin,
  loginAdmin,
  forgotPassword,
  verifyOtp,
  resetPassword,
  getProfile,
} from "../controllers/adminController.js";
import { protect } from "../middlewares/auth.js";
import {
  validateLogin,
  validateForgotPassword,
  validateResetPassword,
} from "../middlewares/validation.js";

const router = express.Router();

// Public routes with validation
router.post("/signup", registerAdmin); // Remove validateSignup
router.post("/login", validateLogin, loginAdmin);
router.post("/forgot-password", validateForgotPassword, forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", validateResetPassword, resetPassword);

// Protected routes
router.get("/profile", protect, getProfile);

export default router;
