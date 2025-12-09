// ForgetPassword.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
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
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {/* Description */}
        <p
          style={{
            fontSize: "13px",
            color: "#4b5563",
            marginBottom: "18px",
          }}
        >
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>

        {/* Card */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            border: "1px solid #e5e7eb",
            padding: "22px 22px 26px",
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "24px",
              height: "24px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            ×
          </button>

          <div style={{ marginBottom: "14px", marginTop: "8px" }}>
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
                height: "40px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                padding: "0 10px",
                fontSize: "13px",
              }}
            />
          </div>

          <button
            style={{
              padding: "10px 28px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
