import React from "react";
import { FaStar } from "react-icons/fa6";

const filters = {
  categories: [
    "Smart TV",
    "Smart Watch",
    "Smart Phone",
    "Smart Headphone",
    "Smart Camera",
    "Smart Speaker",
  ],
  highlights: ["New", "On Sale", "Featured", "Top Rated"],
  colors: [
    "#000000",
    "#ff0000",
    "#00b894",
    "#0984e3",
    "#ffeaa7",
    "#e84393",
    "#6c5ce7",
  ],
  ram: ["4 GB", "6 GB", "8 GB", "12 GB"],
  storage: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"],
  brands: ["Apple", "Samsung", "Sony", "LG", "Lenovo", "Xiaomi"],
};

const products = [
  {
    id: 1,
    title: "Mijia Smart Home Security Camera",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    rating: 4,
    buttonText: "ADD TO CART",
  },
  {
    id: 2,
    title: 'Apple iPad Mini 6th Gen 8.3" 64 GB',
    price: "$499",
    image:
      "https://images.unsplash.com/photo-1557825835-70d97c4aa06a?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    buttonText: "SELECT OPTIONS",
  },
  {
    id: 3,
    title: 'Apple MacBook Air 13" M1 8GB 256GB',
    price: "$999",
    image:
      "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    buttonText: "SELECT OPTIONS",
  },
  {
    id: 4,
    title: "APPLE AirPods Max Bluetooth Headset",
    price: "$549",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    rating: 5,
    buttonText: "SELECT OPTIONS",
  },
  // add more items as needed...
];

const ProductGrid = () => {
  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        padding: "30px 0 60px 0",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "260px minmax(0, 1fr)",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDEBAR FILTERS */}
        <aside
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
            padding: "16px 14px 18px",
            position: "sticky",
            top: "20px",
          }}
        >
          {/* Categories */}
          <div style={{ marginBottom: "18px" }}>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Shop By Categories
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {filters.categories.map((c) => (
                <li
                  key={c}
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    marginBottom: "4px",
                    cursor: "pointer",
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Highlight */}
          <div
            style={{
              marginBottom: "18px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "14px",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Highlight
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {filters.highlights.map((h) => (
                <li
                  key={h}
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    marginBottom: "4px",
                    cursor: "pointer",
                  }}
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Colors */}
          <div
            style={{
              marginBottom: "18px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "14px",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Filter By Color
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {filters.colors.map((color) => (
                <button
                  key={color}
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "999px",
                    border: "2px solid #e5e7eb",
                    backgroundColor: color,
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RAM */}
          <div
            style={{
              marginBottom: "18px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "14px",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Filter By RAM
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {filters.ram.map((r) => (
                <button
                  key={r}
                  style={{
                    padding: "4px 8px",
                    fontSize: "11px",
                    borderRadius: "999px",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div
            style={{
              marginBottom: "18px",
              borderTop: "1px solid #e5e7eb",
              paddingTop: "14px",
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Filter By Internal Storage
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {filters.storage.map((s) => (
                <button
                  key={s}
                  style={{
                    padding: "4px 8px",
                    fontSize: "11px",
                    borderRadius: "999px",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "14px" }}>
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#111827",
              }}
            >
              Brands
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                maxHeight: "140px",
                overflowY: "auto",
              }}
            >
              {filters.brands.map((b) => (
                <li
                  key={b}
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    marginBottom: "4px",
                    cursor: "pointer",
                  }}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT PRODUCT GRID */}
        <main>
          {/* Top bar: showing / sort (static) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
              fontSize: "12px",
              color: "#6b7280",
            }}
          >
            <span>Showing 1–12 of 25 results</span>
            <span>Default sorting</span>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {products.map((p) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px 12px 14px",
                  boxShadow: "0 10px 24px rgba(15,23,42,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "260px",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: "12px",
                    color: "#111827",
                    lineHeight: 1.4,
                    marginBottom: "6px",
                    minHeight: "36px",
                  }}
                >
                  {p.title}
                </div>

                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "11px",
                    color: "#facc15",
                    marginBottom: "6px",
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      size={11}
                      color={i < p.rating ? "#facc15" : "#e5e7eb"}
                    />
                  ))}
                </div>

                {/* Price */}
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#2563eb",
                    marginBottom: "10px",
                  }}
                >
                  {p.price}
                </div>

                {/* Button */}
                <button
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    padding: "8px 0",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {p.buttonText}
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default ProductGrid;
