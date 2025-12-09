// AddToCart.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    title: "Gradient Graphic T‑shirt",
    size: "Large",
    color: "White",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
    qty: 1,
  },
  {
    id: 2,
    title: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1521572163474-4f3c9c1e3fdc?auto=format&fit=crop&w=300&q=80",
    qty: 1,
  },
  {
    id: 3,
    title: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80",
    qty: 1,
  },
];

const AddToCart = () => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const discount = Math.round(subtotal * 0.2); // 20%
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <section
      style={{
        backgroundColor: "#f5f0e9",
        minHeight: "100vh",
        fontFamily: "Roboto, system-ui, sans-serif",
        paddingBottom: "40px",
      }}
    >
      {/* Page content */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "60px auto 0",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            fontSize: "11px",
            color: "#9ca3af",
            marginBottom: "8px",
          }}
        >
          Home &gt; Cart
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "26px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "24px",
            color: "#111827",
          }}
        >
          YOUR CART
        </h1>

        {/* Two columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.25fr)",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: cart list */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              padding: "18px 18px 6px",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr auto",
                  gap: "14px",
                  padding: "10px 0",
                  borderBottom: "1px solid #f3f4f6",
                  alignItems: "center",
                }}
              >
                {/* image */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "12px",
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

                {/* text */}
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "4px",
                      color: "#111827",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "2px",
                    }}
                  >
                    Size: {item.size}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "6px",
                    }}
                  >
                    Color: {item.color}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    ${item.price}
                  </div>
                </div>

                {/* qty + delete */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "10px",
                  }}
                >
                  {/* delete icon */}
                  <button
                    style={{
                      border: "none",
                      background: "none",
                      color: "#ef4444",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    aria-label="Remove item"
                  >
                    🗑
                  </button>

                  {/* qty control */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      borderRadius: "999px",
                      backgroundColor: "#f3f4f6",
                      padding: "4px 8px",
                      gap: "8px",
                    }}
                  >
                    <button
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "999px",
                        border: "none",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        fontSize: "13px",
                        minWidth: "18px",
                        textAlign: "center",
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "999px",
                        border: "none",
                        backgroundColor: "#ffffff",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: order summary */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              padding: "18px 20px 20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "14px",
                color: "#111827",
              }}
            >
              Order Summary
            </h3>

            <div
              style={{
                fontSize: "13px",
                color: "#4b5563",
                marginBottom: "6px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#b91c1c",
                marginBottom: "6px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Discount (-20%)</span>
              <span>- ${discount}</span>
            </div>

            <div
              style={{
                fontSize: "13px",
                color: "#4b5563",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>

            <hr style={{ borderColor: "#f3f4f6", margin: "10px 0" }} />

            <div
              style={{
                fontSize: "14px",
                fontWeight: 600,
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <span>Total</span>
              <span>${total}</span>
            </div>

            {/* promo code */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "999px",
                backgroundColor: "#f3f4f6",
                padding: "4px 4px 4px 12px",
                marginBottom: "14px",
              }}
            >
              <input
                placeholder="Add promo code"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "12px",
                }}
              />
              <button
                style={{
                  borderRadius: "999px",
                  border: "none",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  fontSize: "12px",
                  padding: "8px 18px",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
            </div>

            {/* checkout button */}
            <button
              style={{
                width: "100%",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#000000",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "10px 0",
                cursor: "pointer",
              }}
              onClick={() => navigate("/checkout")}
            >
              Go to Checkout →
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter strip */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto 0",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            backgroundColor: "#004b3b",
            borderRadius: "12px",
            padding: "26px 24px",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Stay connect about our latest offers
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#ffffff",
              borderRadius: "999px",
              overflow: "hidden",
              maxWidth: "360px",
              flex: 1,
            }}
          >
            <input
              placeholder="Enter your email address"
              style={{
                flex: 1,
                border: "none",
                padding: "0 14px",
                fontSize: "12px",
                outline: "none",
              }}
            />
            <button
              style={{
                border: "none",
                backgroundColor: "#000000",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                padding: "10px 18px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
