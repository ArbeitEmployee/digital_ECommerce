// pages/WishList.jsx
import React from "react";

const wishlistItems = [
  {
    id: 1,
    title: "Rumbloo Silicone Controller Grip Cover for Oculus Quest 2",
    priceRange: "$78 – $210",
    date: "May 7, 2025",
    image:
      "https://images.unsplash.com/photo-1603481546579-65d935ba9cbb?auto=format&fit=crop&w=400&q=80",
    cta: "VIEW PRODUCTS",
  },
  {
    id: 2,
    title: "Apple Watch SE 44mm GPS+Cellular Gold",
    priceRange: "$35 – $45",
    date: "July 12, 2024",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80",
    stock: "359 in stock",
    cta: "SELECT OPTIONS",
  },
];

const WishList = () => {
  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
        padding: "28px 0 40px",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {/* Header + breadcrumb */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Wishlist
          </h1>
          <div
            style={{
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            Home / Wishlist
          </div>
        </div>

        {/* Table‑like list */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 14px 30px rgba(15,23,42,0.06)",
            overflow: "hidden",
          }}
        >
          {wishlistItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "120px minmax(0, 1fr) 160px",
                alignItems: "center",
                padding: "14px 18px",
                backgroundColor: index === 1 ? "#f3f7ff" : "#ffffff",
                borderBottom:
                  index === wishlistItems.length - 1
                    ? "none"
                    : "1px solid #e5e7eb",
              }}
            >
              {/* image */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#f3f4f6",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* title + meta */}
              <div
                style={{
                  fontSize: "13px",
                  color: "#111827",
                }}
              >
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    color: "#2563eb",
                    fontWeight: 700,
                    marginBottom: "2px",
                  }}
                >
                  {item.priceRange}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  {item.date}
                </div>
              </div>

              {/* right column */}
              <div
                style={{
                  textAlign: "right",
                  fontSize: "12px",
                }}
              >
                {item.stock && (
                  <div
                    style={{
                      marginBottom: "6px",
                      color: "#6b7280",
                    }}
                  >
                    {item.stock}
                  </div>
                )}
                <button
                  style={{
                    minWidth: "140px",
                    height: "36px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wishlist link row */}
        <div
          style={{
            marginTop: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "13px",
            color: "#4b5563",
          }}
        >
          <span>Wishlist link:</span>
          <input
            type="text"
            readOnly
            value="https://demos.codezeel.com"
            style={{
              flex: 1,
              maxWidth: "320px",
              height: "36px",
              borderRadius: "4px",
              border: "1px solid #d1d5db",
              padding: "0 10px",
              fontSize: "13px",
              backgroundColor: "#ffffff",
            }}
          />
          <button
            style={{
              width: "90px",
              height: "36px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            COPY
          </button>
        </div>
      </div>
    </section>
  );
};

export default WishList;
