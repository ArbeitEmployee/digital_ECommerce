// Simple validation functions without joi

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateName = (name) => {
  return name && name.trim().length >= 3;
};

// Validation middleware for login
export const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) errors.push("Email is required");
  else if (!validateEmail(email)) errors.push("Please enter a valid email");

  if (!password) errors.push("Password is required");
  else if (!validatePassword(password))
    errors.push("Password must be at least 6 characters");

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
};

// Validation middleware for signup
export const validateSignup = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  const errors = [];

  if (!name) errors.push("Name is required");
  else if (!validateName(name))
    errors.push("Name must be at least 3 characters");

  if (!email) errors.push("Email is required");
  else if (!validateEmail(email)) errors.push("Please enter a valid email");

  if (!password) errors.push("Password is required");
  else if (!validatePassword(password))
    errors.push("Password must be at least 6 characters");

  if (!confirmPassword) errors.push("Confirm password is required");
  else if (password !== confirmPassword) errors.push("Passwords do not match");

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
};

// Validation middleware for forgot password
export const validateForgotPassword = (req, res, next) => {
  const { email } = req.body;
  const errors = [];

  if (!email) errors.push("Email is required");
  else if (!validateEmail(email)) errors.push("Please enter a valid email");

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
};

// Validation middleware for reset password
export const validateResetPassword = (req, res, next) => {
  const { email, otp, password, confirmPassword } = req.body;
  const errors = [];

  if (!email) errors.push("Email is required");
  else if (!validateEmail(email)) errors.push("Please enter a valid email");

  if (!otp) errors.push("OTP is required");
  else if (otp.length !== 4 || !/^\d+$/.test(otp))
    errors.push("OTP must be 4 digits");

  if (!password) errors.push("Password is required");
  else if (!validatePassword(password))
    errors.push("Password must be at least 6 characters");

  if (!confirmPassword) errors.push("Confirm password is required");
  else if (password !== confirmPassword) errors.push("Passwords do not match");

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
};
