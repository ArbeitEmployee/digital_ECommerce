/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHome,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/admin/login`,
          {
            email,
            password,
          }
        );

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("admin", JSON.stringify(response.data.admin));
          toast.success("Login successful!");
          navigate("/admin/dashboard");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00000010_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl p-10 border border-gray-100"
      >
        <div className="flex justify-center mb-4">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center gap-2 backdrop-blur-md rounded-xl px-4 py-2 shadow-md transition-all group"
          >
            <div className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center transform group-hover:-translate-x-0.5 transition-transform">
              <AiOutlineHome className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium text-black">Back to Home</span>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Admin Login
          </h1>
          <p className="text-gray-600 text-lg">
            Secure access to your dashboard
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 uppercase tracking-wide"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <AiOutlineMail size={20} />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="admin@example.com"
                className={`w-full bg-gray-50 border ${
                  errors.email ? "border-red-300" : "border-gray-200"
                } rounded-xl px-4 pl-12 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all duration-200`}
                autoComplete="off"
              />
            </div>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-500 mt-1 ml-1"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 uppercase tracking-wide"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <AiOutlineLock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className={`w-full bg-gray-50 border ${
                  errors.password ? "border-red-300" : "border-gray-200"
                } rounded-xl px-4 pl-12 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all duration-200`}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {showPassword ? (
                  <AiOutlineEye size={20} />
                ) : (
                  <AiOutlineEyeInvisible size={20} />
                )}
              </button>
            </div>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-500 mt-1 ml-1"
              >
                {errors.password}
              </motion.p>
            )}
          </motion.div>

          <div className="flex justify-between items-center pt-2">
            <Link
              to="/admin/forgot-password"
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
            >
              Forgot password?
            </Link>
            <Link
              to="/admin/signup"
              className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
            >
              Create account
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-black text-white font-medium rounded-xl py-4 px-6 flex items-center justify-center space-x-3 transition-all duration-300 hover:bg-gray-800 hover:shadow-md ${
                isSubmitting ? "opacity-80" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Logging In...</span>
                </>
              ) : (
                <span>Login</span>
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
