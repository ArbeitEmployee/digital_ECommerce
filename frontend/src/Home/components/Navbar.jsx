/* eslint-disable no-unused-vars */
// components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = import.meta.env.VITE_API_URL;

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isShopByCategoriesOpen, setIsShopByCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Refs for dropdown containers
  const categoriesRef = useRef(null);
  const shopByCategoriesRef = useRef(null);
  const categoriesTimeoutRef = useRef(null);
  const shopByCategoriesTimeoutRef = useRef(null);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError("");

      // Use the public endpoint
      const response = await axios.get(`${baseUrl}/categories/public`);

      if (response.data.success) {
        setCategories(response.data.categories);
      } else {
        setError("Failed to load categories");
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Unable to load categories");
      // Don't show toast for navbar errors to avoid spam
    } finally {
      setLoading(false);
    }
  };

  // Listen for category updates from admin components
  useEffect(() => {
    const handleCategoryUpdate = () => {
      fetchCategories();
    };

    window.addEventListener("categoryCreated", handleCategoryUpdate);
    window.addEventListener("categoryUpdated", handleCategoryUpdate);
    window.addEventListener("categoryDeleted", handleCategoryUpdate);

    return () => {
      window.removeEventListener("categoryCreated", handleCategoryUpdate);
      window.removeEventListener("categoryUpdated", handleCategoryUpdate);
      window.removeEventListener("categoryDeleted", handleCategoryUpdate);

      // Clear timeouts on unmount
      if (categoriesTimeoutRef.current) {
        clearTimeout(categoriesTimeoutRef.current);
      }
      if (shopByCategoriesTimeoutRef.current) {
        clearTimeout(shopByCategoriesTimeoutRef.current);
      }
    };
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle category click
  const handleCategoryClick = (categoryName) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
    setIsCategoriesOpen(false);
    setIsShopByCategoriesOpen(false);
  };

  // Handle categories mouse enter
  const handleCategoriesMouseEnter = () => {
    if (categoriesTimeoutRef.current) {
      clearTimeout(categoriesTimeoutRef.current);
    }
    setIsCategoriesOpen(true);
  };

  // Handle categories mouse leave with delay
  const handleCategoriesMouseLeave = () => {
    categoriesTimeoutRef.current = setTimeout(() => {
      setIsCategoriesOpen(false);
    }, 150); // Small delay to allow clicking
  };

  // Handle shop by categories mouse enter
  const handleShopByCategoriesMouseEnter = () => {
    if (shopByCategoriesTimeoutRef.current) {
      clearTimeout(shopByCategoriesTimeoutRef.current);
    }
    setIsShopByCategoriesOpen(true);
  };

  // Handle shop by categories mouse leave with delay
  const handleShopByCategoriesMouseLeave = () => {
    shopByCategoriesTimeoutRef.current = setTimeout(() => {
      setIsShopByCategoriesOpen(false);
    }, 150); // Small delay to allow clicking
  };

  // Handle dropdown mouse enter to cancel timeout
  const handleDropdownMouseEnter = (type) => {
    if (type === "categories" && categoriesTimeoutRef.current) {
      clearTimeout(categoriesTimeoutRef.current);
    }
    if (type === "shop" && shopByCategoriesTimeoutRef.current) {
      clearTimeout(shopByCategoriesTimeoutRef.current);
    }
  };

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
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px 0 30px",
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
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px 0 30px",
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
            <div
              ref={categoriesRef}
              style={{ position: "relative" }}
              onMouseEnter={handleCategoriesMouseEnter}
              onMouseLeave={handleCategoriesMouseLeave}
            >
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
                    maxHeight: "400px",
                    overflowY: "auto",
                  }}
                  onMouseEnter={() => handleDropdownMouseEnter("categories")}
                  onMouseLeave={handleCategoriesMouseLeave}
                >
                  {loading ? (
                    <div
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        color: "#6b7280",
                        fontSize: "13px",
                      }}
                    >
                      Loading categories...
                    </div>
                  ) : error ? (
                    <div
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        color: "#ef4444",
                        fontSize: "13px",
                      }}
                    >
                      {error}
                    </div>
                  ) : categories.length === 0 ? (
                    <div
                      style={{
                        padding: "12px",
                        textAlign: "center",
                        color: "#6b7280",
                        fontSize: "13px",
                      }}
                    >
                      No categories available
                    </div>
                  ) : (
                    <>
                      {/* Show ALL categories */}
                      {categories.map((category) => (
                        <button
                          key={category._id}
                          type="button"
                          style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "8px 12px",
                            fontSize: "13px",
                            border: "none",
                            borderBottom: "1px solid #f3f4f6",
                            backgroundColor: "#ffffff",
                            color: "#111827",
                            cursor: "pointer",
                            transition: "background-color 0.1s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f3f4f6";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff";
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCategoryClick(category.name);
                          }}
                        >
                          {category.name}
                        </button>
                      ))}
                      {/* Show count if many categories */}
                      {categories.length > 10 && (
                        <div
                          style={{
                            padding: "8px 12px",
                            fontSize: "11px",
                            color: "#6b7280",
                            borderTop: "1px solid #f3f4f6",
                            backgroundColor: "#f9fafb",
                          }}
                        >
                          Showing all {categories.length} categories
                        </div>
                      )}
                    </>
                  )}
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
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 60px 0 30px",
            display: "flex",
            alignItems: "center",
            height: "44px",
          }}
        >
          {/* Shop by categories trigger */}
          <div
            ref={shopByCategoriesRef}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              paddingRight: "18px",
              marginRight: "18px",
              borderRight: "1px solid rgba(255,255,255,0.2)",
            }}
            onMouseEnter={handleShopByCategoriesMouseEnter}
            onMouseLeave={handleShopByCategoriesMouseLeave}
          >
            <div
              onClick={() => setIsShopByCategoriesOpen((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
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
                  maxHeight: "400px",
                  overflowY: "auto",
                  zIndex: 20,
                }}
                onMouseEnter={() => handleDropdownMouseEnter("shop")}
                onMouseLeave={handleShopByCategoriesMouseLeave}
              >
                {loading ? (
                  <div
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    Loading categories...
                  </div>
                ) : error ? (
                  <div
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      color: "#ef4444",
                      fontSize: "13px",
                    }}
                  >
                    {error}
                  </div>
                ) : categories.length === 0 ? (
                  <div
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      color: "#6b7280",
                      fontSize: "13px",
                    }}
                  >
                    No categories available
                  </div>
                ) : (
                  <>
                    {/* Show ALL categories */}
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        style={{
                          padding: "8px 14px",
                          fontSize: "13px",
                          borderBottom: "1px solid #f5f5f5",
                          cursor: "pointer",
                          transition: "all 0.1s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#f5f5f5";
                          e.target.style.color = "#0063d1";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "white";
                          e.target.style.color = "#333";
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleCategoryClick(category.name);
                        }}
                      >
                        {category.name}
                      </div>
                    ))}
                    {/* Show count if many categories */}
                    {categories.length > 10 && (
                      <div
                        style={{
                          padding: "8px 12px",
                          fontSize: "11px",
                          color: "#6b7280",
                          borderTop: "1px solid #f5f5f5",
                          backgroundColor: "#f9fafb",
                          textAlign: "center",
                        }}
                      >
                        Showing all {categories.length} categories
                      </div>
                    )}
                  </>
                )}
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
