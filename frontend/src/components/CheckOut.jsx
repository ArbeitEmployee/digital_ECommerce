import React, { useState } from "react";

const CheckOut = () => {
  const basePrice = 67;
  const items = [
    { id: 1, title: "Installation & Setup", price: 49 },
    { id: 2, title: "Must-Have Plugins", price: 49 },
  ];
  const handlingFee = 2;
  const total =
    basePrice + handlingFee + items.reduce((sum, item) => sum + item.price, 0);

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        minHeight: "100vh",
        padding: "30px 0 50px",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.6fr) minmax(0, 0.9fr)",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT: contact + payment */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            padding: "18px 20px 22px",
          }}
        >
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            Secure Checkout
          </h1>

          {/* 1. Contact details */}
          <div style={{ marginBottom: "20px" }}>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              1. Contact Details
            </h2>
            <p
              style={{
                fontSize: "12px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              To use saved payment methods or bonuses, please{" "}
              <span
                style={{
                  color: "#2563eb",
                  cursor: "pointer",
                }}
              >
                Sign In
              </span>
              .
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
                gap: "14px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 500,
                    marginBottom: "4px",
                  }}
                >
                  Your email
                </label>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    height: "36px",
                    borderRadius: "4px",
                    border: "1px solid #d1d5db",
                    padding: "0 10px",
                    fontSize: "13px",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 500,
                    marginBottom: "4px",
                  }}
                >
                  Your phone number
                </label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "90px minmax(0, 1fr)",
                    gap: "6px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "4px",
                      border: "1px solid #d1d5db",
                      padding: "0 8px",
                      fontSize: "12px",
                      gap: "4px",
                    }}
                  >
                    <span>🇧🇩</span>
                    <select
                      style={{
                        border: "none",
                        outline: "none",
                        fontSize: "12px",
                        background: "transparent",
                        width: "100%",
                      }}
                      defaultValue="+880"
                    >
                      <option value="+880">+880</option>
                      <option value="+1">+1</option>
                      <option value="+91">+91</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    style={{
                      width: "100%",
                      height: "36px",
                      borderRadius: "4px",
                      border: "1px solid #d1d5db",
                      padding: "0 10px",
                      fontSize: "13px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Payment method */}
          <div>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              2. Select your payment method
            </h2>

            {/* Tabs */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginBottom: "16px",
              }}
            >
              <button
                onClick={() => setPaymentMethod("card")}
                style={{
                  padding: "10px 0",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: 0,
                  borderBottom:
                    paymentMethod === "card" ? "none" : "1px solid #e5e7eb",
                  borderTop: "2px solid #22c55e",
                  borderLeft: "2px solid #22c55e",
                  borderRight: "2px solid #22c55e",
                  backgroundColor:
                    paymentMethod === "card" ? "#f0fdf4" : "#f9fafb",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                    marginBottom: "2px",
                  }}
                >
                  stripe
                </div>
                <div>Card</div>
              </button>
              <button
                onClick={() => setPaymentMethod("paypal")}
                style={{
                  padding: "10px 0",
                  borderTopRightRadius: "4px",
                  borderTopLeftRadius: 0,
                  border: "1px solid #e5e7eb",
                  backgroundColor:
                    paymentMethod === "paypal" ? "#e0f2fe" : "#f9fafb",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  PayPal
                </div>
              </button>
            </div>

            {/* Card form */}
            {paymentMethod === "card" && (
              <div
                style={{
                  border: "1px solid #22c55e",
                  borderRadius: "0 4px 4px 4px",
                  padding: "14px 14px 16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "minmax(0, 1.6fr) minmax(0, 0.9fr) minmax(0, 0.9fr)",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "4px",
                      }}
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "34px",
                        borderRadius: "4px",
                        border: "1px solid #d1d5db",
                        padding: "0 8px",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "4px",
                      }}
                    >
                      MM/YY
                    </label>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "34px",
                        borderRadius: "4px",
                        border: "1px solid #d1d5db",
                        padding: "0 8px",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "4px",
                      }}
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "34px",
                        borderRadius: "4px",
                        border: "1px solid #d1d5db",
                        padding: "0 8px",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0, 1.6fr) auto",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        marginBottom: "4px",
                      }}
                    >
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "34px",
                        borderRadius: "4px",
                        border: "1px solid #d1d5db",
                        padding: "0 8px",
                        fontSize: "13px",
                      }}
                    />
                  </div>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: "#6b7280",
                      marginTop: "18px",
                    }}
                  >
                    <input type="checkbox" />
                    Save card
                  </label>
                </div>
              </div>
            )}

            {/* Accepted cards text */}
            <div
              style={{
                fontSize: "12px",
                color: "#6b7280",
                marginBottom: "12px",
              }}
            >
              We accept: VISA, MasterCard, American Express, Discover and more.
              Stripe is a trustful and secure gateway which accepts most popular
              credit and debit cards.
            </div>

            {/* Policy checkbox */}
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#4b5563",
                marginBottom: "14px",
              }}
            >
              <input type="checkbox" style={{ marginTop: "3px" }} />
              <span>
                I agree that my data will be stored and handled according to the{" "}
                <a
                  href="#"
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  Terms of Use
                </a>
                .
              </span>
            </label>

            {/* Pay now button (disabled style) */}
            <button
              style={{
                width: "100%",
                height: "42px",
                borderRadius: "4px",
                border: "1px solid #d1d5db",
                backgroundColor: "#e5e7eb",
                color: "#9ca3af",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "not-allowed",
              }}
            >
              Pay Now
            </button>
          </div>
        </div>

        {/* RIGHT: order summary */}
        <aside>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              padding: "14px 14px 16px",
              marginBottom: "14px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              Order Summary
            </h3>

            {/* Product info */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "70px minmax(0, 1fr)",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
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
              <div style={{ fontSize: "12px", color: "#4b5563" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  Ellomart – Electronics and Digital Store Elementor WooCommerce
                  Responsive Theme
                </div>
                <div>
                  License type{" "}
                  <span style={{ fontWeight: 600 }}>Personal license</span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "13px",
                marginBottom: "8px",
              }}
            >
              <span>Base product</span>
              <span style={{ fontWeight: 700 }}>${basePrice}</span>
            </div>

            {/* Services */}
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "12px",
                  padding: "4px 0",
                }}
              >
                <span>✔ {item.title}</span>
                <span style={{ fontWeight: 700, color: "#f97316" }}>
                  ${item.price}
                </span>
              </div>
            ))}

            <button
              style={{
                marginTop: "10px",
                border: "none",
                background: "none",
                color: "#2563eb",
                fontSize: "12px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Have a promocode?
            </button>

            <div
              style={{
                marginTop: "10px",
                fontSize: "12px",
                color: "#6b7280",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                Handling fee <span style={{ fontSize: "11px" }}>ⓘ</span>
              </span>
              <span>${handlingFee}</span>
            </div>

            <div
              style={{
                marginTop: "8px",
                paddingTop: "8px",
                borderTop: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CheckOut;
