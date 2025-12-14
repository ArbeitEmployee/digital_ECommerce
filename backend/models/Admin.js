import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "super-admin"],
    default: "admin",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  passwordResetOtp: String,
  passwordResetOtpExpires: Date,
  passwordChangedAt: Date,
  loginAttempts: {
    type: Number,
    default: 0,
  },
  lockUntil: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// COMPLETELY REMOVE ALL PRE-SAVE HOOKS - NO MORE MIDDLEWARE FUNCTIONS HERE

// Generate password reset OTP
adminSchema.methods.generatePasswordResetOtp = function () {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  this.passwordResetOtp = crypto.createHash("sha256").update(otp).digest("hex");

  this.passwordResetOtpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

  return otp;
};

// Check if OTP is valid
adminSchema.methods.isValidOtp = function (otp) {
  const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

  return (
    this.passwordResetOtp === hashedOtp &&
    this.passwordResetOtpExpires > Date.now()
  );
};

// Check if password was changed after token was issued
adminSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// Increment login attempts
adminSchema.methods.incrementLoginAttempts = function () {
  if (this.lockUntil && this.lockUntil > Date.now()) {
    return { locked: true, message: "Account is temporarily locked" };
  }

  this.loginAttempts += 1;

  if (this.loginAttempts >= 5) {
    this.lockUntil = Date.now() + 15 * 60 * 1000; // Lock for 15 minutes
    this.loginAttempts = 0;
    return { locked: true, message: "Account locked for 15 minutes" };
  }

  return { locked: false };
};

// Reset login attempts on successful login
adminSchema.methods.resetLoginAttempts = function () {
  this.loginAttempts = 0;
  this.lockUntil = undefined;
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
