import React, { useState } from "react";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isShopByCategoriesOpen, setIsShopByCategoriesOpen] = useState(false);

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
    <nav
      style={{
        fontFamily: "Roboto, sans-serif",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          backgroundColor: "#f8f8f8",
          fontSize: "13px",
          color: "#555",
          borderBottom: "1px solid #eee",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "8px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "30px" }}>
            <span>(+91) 9876-543-210</span>
            <span>support@demo.com</span>
          </div>

          <div style={{ display: "flex", gap: "25px" }}>
            {["About Us", "Blog", "Contact Us", "FAQs"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#555",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Middle bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "15px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ fontSize: "30px", fontWeight: 700 }}>
            <span style={{ color: "#007bff" }}>E-Commerce</span>
          </div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#666",
              marginLeft: "10px",
            }}
          >
            DIGITAL STORE
          </div>
        </div>

        {/* Center: category + search */}
        <div
          style={{
            display: "flex",
            flex: 1,
            maxWidth: "650px",
            margin: "0 40px",
          }}
        >
          {/* Category select */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <select
              style={{
                height: "44px",
                border: "1px solid #e5e7eb",
                borderRight: "none",
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                padding: "0 38px 0 14px",
                fontSize: "13px",
                color: "#555",
                outline: "none",
                appearance: "none",
                backgroundColor: "white",
                width: "180px",
              }}
            >
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Garden</option>
              <option>Sports</option>
            </select>
            <span
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "10px",
                color: "#999",
                pointerEvents: "none",
              }}
            >
              ▼
            </span>
          </div>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search products..."
            style={{
              flex: 1,
              height: "44px",
              border: "1px solid #e5e7eb",
              borderLeft: "none",
              borderRight: "none",
              padding: "0 14px",
              fontSize: "13px",
              color: "#444",
              outline: "none",
              minWidth: "0",
            }}
          />
          <button
            style={{
              height: "44px",
              padding: "0 26px",
              border: "none",
              backgroundColor: "#0063d1",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              cursor: "pointer",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              whiteSpace: "nowrap",
            }}
          >
            SEARCH
          </button>
        </div>

        {/* Right: login, wishlist, cart */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <button
            style={{
              border: "none",
              background: "none",
              fontSize: "14px",
              color: "#222",
              cursor: "pointer",
              padding: "0",
            }}
          >
            Login
          </button>

          {/* Wishlist icon with badge */}
          <button
            style={{
              position: "relative",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "20px", color: "#555" }}>♡</span>
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "#0063d1",
                color: "#fff",
                fontSize: "10px",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              2
            </span>
          </button>

          {/* Cart icon with badge */}
          <button
            style={{
              position: "relative",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "20px", color: "#555" }}>🛒</span>
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "#0063d1",
                color: "#fff",
                fontSize: "10px",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              0
            </span>
          </button>
        </div>
      </div>

      {/* Bottom blue menu bar */}
      <div style={{ backgroundColor: "#0063d1", position: "relative" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: "50px",
            color: "#fff",
            padding: "0 20px",
          }}
        >
          {/* Left: hamburger + text with dropdown */}
          <div
            style={{
              position: "relative",
              height: "100%",
            }}
            onMouseEnter={() => setIsShopByCategoriesOpen(true)}
            onMouseLeave={() => setIsShopByCategoriesOpen(false)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 24px",
                height: "100%",
                backgroundColor: "#0056b3",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              {/* Hamburger icon */}
              <div
                style={{ position: "relative", width: "16px", height: "14px" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#fff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "6px",
                    left: "0",
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#fff",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "0",
                    width: "16px",
                    height: "2px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
              <span>SHOP BY CATEGORIES</span>
            </button>

            {/* Categories Dropdown */}
            {isShopByCategoriesOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "240px",
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderTop: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                }}
              >
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      color: "#333",
                      textDecoration: "none",
                      fontSize: "14px",
                      borderBottom: "1px solid #f0f0f0",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#f5f5f5";
                      e.target.style.color = "#0063d1";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "white";
                      e.target.style.color = "#333";
                    }}
                  >
                    {category}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Main nav links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
              gap: "30px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {[
              "Home",
              "Shop",
              "Categories",
              "Products",
              "Top Deals",
              "Elements",
            ].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 0",
                  position: "relative",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
