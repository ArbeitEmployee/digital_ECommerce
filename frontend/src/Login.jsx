import React from "react";

const Login = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "360px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 20px 45px rgba(15,23,42,0.35)",
          padding: "26px 26px 20px",
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
            Username or email *
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              height: "38px",
              borderRadius: "4px",
              border: "1px solid #e5e7eb",
              padding: "0 10px",
              fontSize: "13px",
              outline: "none",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "10px" }}>
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
              height: "38px",
              borderRadius: "4px",
              border: "1px solid #e5e7eb",
              padding: "0 10px",
              fontSize: "13px",
              outline: "none",
            }}
          />
        </div>

        {/* Remember me */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#4b5563",
            marginBottom: "14px",
          }}
        >
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Login button */}
        <button
          style={{
            width: "100%",
            height: "40px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            marginBottom: "14px",
          }}
        >
          LOGIN
        </button>

        {/* Forgot password */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "14px",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "12px",
              color: "#2563eb",
              textDecoration: "none",
            }}
          >
            Lost your password?
          </a>
        </div>

        <hr style={{ borderColor: "#e5e7eb", marginBottom: "12px" }} />

        {/* Sign up link */}
        <div
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#4b5563",
          }}
        >
          Don&apos;t have an account yet?{" "}
          <a
            href="#"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
