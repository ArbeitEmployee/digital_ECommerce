import React from "react";

const Signup = ({ onGoToLogin }) => {
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
        {/* Heading */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          Register
        </h1>

        {/* Card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            border: "1px solid #e5e7eb",
            padding: "22px 22px 24px",
          }}
        >
          {/* Username */}
          <div style={{ marginBottom: "14px" }}>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Username *
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

          {/* Email */}
          <div style={{ marginBottom: "14px" }}>
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Email address *
            </label>
            <input
              type="email"
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

          {/* Password with eye button placeholder */}
          <div style={{ marginBottom: "12px" }}>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="password"
                style={{
                  flex: 1,
                  height: "40px",
                  borderRadius: "4px 0 0 4px",
                  border: "1px solid #d1d5db",
                  borderRight: "none",
                  padding: "0 10px",
                  fontSize: "13px",
                }}
              />
              <button
                type="button"
                style={{
                  width: "46px",
                  height: "40px",
                  borderRadius: "0 4px 4px 0",
                  border: "1px solid #2563eb",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                👁
              </button>
            </div>
          </div>

          {/* Privacy text */}
          <p
            style={{
              fontSize: "12px",
              color: "#6b7280",
              lineHeight: 1.7,
              marginTop: "8px",
              marginBottom: "16px",
            }}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <a
              href="#"
              style={{
                color: "#2563eb",
                textDecoration: "none",
              }}
            >
              privacy policy
            </a>
            .
          </p>

          {/* Register button */}
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
            Register
          </button>

          {/* Login link */}
          <div
            style={{
              marginTop: "18px",
              fontSize: "12px",
              color: "#4b5563",
            }}
          >
            Already have an account?{" "}
            <button
              type="button"
              onClick={onGoToLogin}
              style={{
                border: "none",
                background: "none",
                padding: 0,
                margin: 0,
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: 500,
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
