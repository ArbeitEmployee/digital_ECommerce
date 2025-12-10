/* eslint-disable no-unused-vars */
// components/Navbar.jsx
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isShopByCategoriesOpen, setIsShopByCategoriesOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Books",
    "Toys",
    "Beauty",
    "Automotive",
    "Grocery",
    "Health",
    "Music",
    "Movies",
  ];

  return (
    <header style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Top bar */}
      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "6px 0",
          fontSize: "12px",
        }}
      >
        <div
          style={{
            /* CHANGED: Match Banner container width and padding */
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px 0 30px", // Changed: Match Banner horizontal padding
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#4b5563" }}>
            (+91) 9876-543-210 &nbsp; | &nbsp; support@demo.com
          </div>
          <div style={{ display: "flex", gap: "18px" }}>
            {["About Us", "Contact Us", "FAQs"].map((item) => {
              const to =
                item === "About Us"
                  ? "/about"
                  : item === "Contact Us"
                  ? "/contact"
                  : "/faqs";

              return (
                <Link
                  key={item}
                  to={to}
                  style={{
                    textDecoration: "none",
                    color: "#4b5563",
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "14px 0",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            /* CHANGED: Match Banner container width and padding */
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px 0 30px", // Changed: Match Banner horizontal padding
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", color: "#111827" }}>
            <div style={{ fontWeight: 800, fontSize: "20px" }}>E-Commerce</div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#6b7280",
              }}
            >
              DIGITAL STORE
            </div>
          </Link>

          {/* Category + search */}
          <div
            style={{
              flex: 1,
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {/* Category select with dropdown */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  minWidth: "150px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "4px",
                  padding: "0 10px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: "#374151",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                }}
                onClick={() => setIsCategoriesOpen((v) => !v)}
              >
                <span>All Categories</span>
                <span>▾</span>
              </div>

              {isCategoriesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "42px",
                    left: 0,
                    width: "220px",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 10px 25px rgba(15,23,42,0.16)",
                    zIndex: 30,
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 12px",
                        fontSize: "13px",
                        border: "none",
                        backgroundColor: "#ffffff",
                        color: "#111827",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f3f4f6";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffffff";
                      }}
                      onClick={() => {
                        // example: navigate to filtered shop page
                        // navigate(`/shop?category=${encodeURIComponent(category)}`);
                        setIsCategoriesOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
              }}
            >
              <input
                placeholder="Search products..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "0 10px",
                  height: "38px",
                  fontSize: "13px",
                }}
              />
              <button
                style={{
                  width: "90px",
                  height: "38px",
                  border: "none",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                SEARCH
              </button>
            </div>
          </div>

          {/* Right: login, wishlist, cart */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "13px",
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#111827" }}
            >
              Login
            </Link>

            {/* Wishlist icon → /wishlist */}
            <button
              type="button"
              onClick={() => navigate("/wishlist")}
              style={{
                position: "relative",
                width: "32px",
                height: "32px",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#ffffff",
              }}
            >
              ♥
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#ef4444",
                  color: "#ffffff",
                  borderRadius: "999px",
                  fontSize: "10px",
                  padding: "0 5px",
                }}
              >
                2
              </span>
            </button>

            {/* Cart icon → /added-to-cart */}
            <button
              type="button"
              onClick={() => navigate("/added-to-cart")}
              style={{
                position: "relative",
                width: "32px",
                height: "32px",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#ffffff",
              }}
            >
              🛒
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  backgroundColor: "#22c55e",
                  color: "#ffffff",
                  borderRadius: "999px",
                  fontSize: "10px",
                  padding: "0 5px",
                }}
              >
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom menu bar */}
      <div
        style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          fontSize: "13px",
        }}
      >
        <div
          style={{
            /* CHANGED: Match Banner container width and padding */
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px 0 30px", // Changed: Match Banner horizontal padding
            display: "flex",
            alignItems: "center",
            height: "44px",
          }}
        >
          {/* Shop by categories trigger */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingRight: "18px",
              marginRight: "18px",
              borderRight: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
            }}
          >
            <div
              onClick={() => setIsShopByCategoriesOpen((prev) => !prev)}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <span style={{ fontSize: "18px" }}>☰</span>
              <span style={{ fontWeight: 600 }}>SHOP BY CATEGORIES</span>
            </div>

            {isShopByCategoriesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "44px",
                  left: 0,
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  boxShadow: "0 10px 25px rgba(15,23,42,0.16)",
                  borderRadius: "4px",
                  padding: "8px 0",
                  width: "220px",
                  zIndex: 20,
                }}
                onMouseLeave={() => setIsShopByCategoriesOpen(false)}
              >
                {categories.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px 14px",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f5f5f5";
                      e.target.style.color = "#0063d1";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#333";
                    }}
                    onClick={() => {
                      // navigate(`/shop?category=${encodeURIComponent(category)}`);
                      setIsShopByCategoriesOpen(false);
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main nav links */}
          <nav style={{ display: "flex", gap: "18px" }}>
            {["Home", "Shop", "Products"].map((item) => {
              const to =
                item === "Home"
                  ? "/"
                  : item === "Shop"
                  ? "/shop"
                  : item === "Products"
                  ? "/product"
                  : "#";
              return (
                <NavLink
                  key={item}
                  to={to}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#ffffff" : "rgba(255,255,255,0.9)",
                    fontWeight: isActive ? 600 : 400,
                  })}
                >
                  {item}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
