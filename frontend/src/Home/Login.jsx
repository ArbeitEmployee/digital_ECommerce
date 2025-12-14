// Login.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
        padding: "40px 0",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* CHANGED: Match container width and padding approach */}
      <div
        style={{
          maxWidth: "1400px", // Changed from "720px"
          margin: "0 auto",
          padding: "0 30px", // Changed from "0 15px"
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 80px)", // Account for padding
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            border: "1px solid #e5e7eb",
            padding: "24px 24px 28px", // Increased padding slightly
            maxWidth: "380px", // Slightly wider
            width: "100%",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => navigate(-1)}
            type="button"
            style={{
              position: "absolute",
              top: "12px", // Adjusted position
              right: "12px", // Adjusted position
              width: "26px", // Slightly larger
              height: "26px", // Slightly larger
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: "26px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#d1d5db";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#e5e7eb";
            }}
          >
            ×
          </button>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "20px", // Increased margin
              marginTop: "4px",
              textAlign: "left",
            }}
          >
            Login
          </h1>
          {/* Username */}
          <div style={{ marginBottom: "16px", marginTop: "4px" }}>
            {" "}
            {/* Increased margin */}
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Username or email *
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                height: "40px", // Slightly taller
                borderRadius: "6px", // Slightly rounder
                border: "1px solid #e5e7eb",
                padding: "0 12px", // Increased padding
                fontSize: "13px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#2563eb";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
              }}
            />
          </div>
          {/* Password */}
          <div style={{ marginBottom: "12px" }}>
            {" "}
            {/* Increased margin */}
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Password *
            </label>
            <input
              type="password"
              style={{
                width: "100%",
                height: "40px", // Slightly taller
                borderRadius: "6px", // Slightly rounder
                border: "1px solid #e5e7eb",
                padding: "0 12px", // Increased padding
                fontSize: "13px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#2563eb";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e7eb";
              }}
            />
          </div>
          {/* Remember me */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px", // Increased gap
              fontSize: "13px",
              color: "#4b5563",
              marginBottom: "16px", // Increased margin
            }}
          >
            <input
              type="checkbox"
              id="remember"
              style={{ cursor: "pointer" }}
            />
            <label htmlFor="remember" style={{ cursor: "pointer" }}>
              Remember me
            </label>
          </div>
          {/* Login button */}
          <button
            style={{
              width: "100%",
              height: "42px", // Slightly taller
              borderRadius: "6px", // Slightly rounder
              border: "none",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "16px", // Increased margin
              textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#1d4ed8";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.transform = "translateY(0)";
            }}
          >
            LOGIN
          </button>
          {/* Forgot password */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "16px", // Increased margin
            }}
          >
            <Link
              to="/forgot-password"
              style={{
                fontSize: "12px",
                color: "#2563eb",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#2563eb";
              }}
            >
              Forget your password?
            </Link>
          </div>
          <hr style={{ borderColor: "#e5e7eb", marginBottom: "14px" }} />{" "}
          {/* Increased margin */}
          {/* Sign up link */}
          <div
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#4b5563",
            }}
          >
            Don&apos;t have an account yet?{" "}
            <Link
              to="/register"
              style={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#2563eb";
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
