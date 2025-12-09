// components/GoToCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const GoToCart = () => {
  const basePrice = 67;
  const items = [
    {
      id: 1,
      title: "Installation & Setup",
      oldPrice: 59,
      price: 49,
    },
    {
      id: 2,
      title: "Must-Have Plugins",
      oldPrice: 89,
      price: 49,
    },
  ];
  const handlingFee = 2;
  const total =
    basePrice + handlingFee + items.reduce((sum, item) => sum + item.price, 0);

  const navigate = useNavigate();

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
          width: "830px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 20px 45px rgba(15,23,42,0.35)",
          padding: "20px 22px 22px",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "22px" }}>🛒</span>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              fontSize: "18px",
            }}
          >
            ×
          </button>
        </div>

        {/* Product row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80px minmax(0, 1fr) auto",
            columnGap: "14px",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#f3f4f6",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
              alt="Product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ fontSize: "13px", color: "#4b5563" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              Ellomart – Electronics and Digital Store Elementor WooCommerce
              Responsive Theme
            </div>
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontWeight: 600 }}>License type:</span> Personal
              license
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              ${basePrice}
            </div>
          </div>
        </div>

        {/* Services list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginBottom: "18px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
                padding: "8px 10px",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto auto",
                alignItems: "center",
                columnGap: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#111827",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "999px",
                    border: "2px solid #22c55e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "#22c55e",
                  }}
                >
                  ✓
                </span>
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#9ca3af",
                  textDecoration: "line-through",
                  textAlign: "right",
                }}
              >
                ${item.oldPrice}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#f97316",
                  textAlign: "right",
                }}
              >
                ${item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Handling + total */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            alignItems: "center",
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f3f4f6",
              borderRadius: "4px",
              height: "40px",
            }}
          />
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "4px" }}>
              Handling fee{" "}
              <span style={{ fontWeight: 600, color: "#111827" }}>
                ${handlingFee}
              </span>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              Total: <span style={{ color: "#111827" }}>${total}</span>
            </div>
          </div>
        </div>

        {/* Checkout button */}
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              padding: "10px 40px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#f97316",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={() => navigate("/checkout")}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoToCart;
