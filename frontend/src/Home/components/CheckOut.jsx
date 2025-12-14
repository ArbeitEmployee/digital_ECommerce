// CheckOut.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const subtotal = 29.9;
  const total = subtotal;
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // after processing order, go to thank you page
    navigate("/thank-you");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f8",
        fontFamily: "Roboto, system-ui, sans-serif",
        padding: "40px 0 60px 0",
      }}
    >
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "8px", fontWeight: 700 }}>Logo</div>

        {/* Title + subtitle */}
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            marginBottom: "6px",
            color: "#111827",
          }}
        >
          You are almost there
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "14px",
          }}
        >
          Adipisicing bibendum id a condimentum risus nec sed malesuada at etiam
          egestas.
        </p>

        {/* small trust badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            fontSize: "11px",
            color: "#9ca3af",
            marginBottom: "22px",
          }}
        >
          <span>🔒 SSL secured checkout</span>
          <span>🕑 24/7 support available</span>
          <span>💳 Payment options</span>
        </div>

        {/* Main white card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            boxShadow: "0 20px 45px rgba(15,23,42,0.12)",
            padding: "22px 26px 26px",
            textAlign: "left",
          }}
        >
          {/* Steps */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              fontSize: "12px",
              marginBottom: "22px",
              color: "#6b7280",
            }}
          >
            {[
              { label: "Cart", active: false, completed: true },
              { label: "Information", active: true },
              { label: "Finish", active: false },
            ].map((step) => (
              <div
                key={step.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "999px",
                    border: step.active
                      ? "4px solid #8b5cf6"
                      : "1px solid #d1d5db",
                    backgroundColor: step.completed ? "#8b5cf6" : "#ffffff",
                  }}
                />
                <span
                  style={{
                    fontWeight: step.active ? 600 : 400,
                    color: step.active ? "#111827" : "#9ca3af",
                  }}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
              gap: "26px",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT FORM */}
            <div>
              {/* Customer information */}
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                Customer information
              </h3>
              <input
                type="email"
                placeholder="Email address *"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  fontSize: "12px",
                  padding: "0 10px",
                  marginBottom: "16px",
                  outline: "none",
                }}
              />

              {/* Billing details */}
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                Billing details
              </h3>

              {/* First / Last */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <input
                  placeholder="First name *"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
                <input
                  placeholder="Last name *"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Company */}
              <input
                placeholder="Company name"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  fontSize: "12px",
                  padding: "0 10px",
                  marginBottom: "10px",
                  outline: "none",
                }}
              />

              {/* Country */}
              <input
                placeholder="Country / Region *"
                defaultValue="Bangladesh"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  fontSize: "12px",
                  padding: "0 10px",
                  marginBottom: "10px",
                  outline: "none",
                }}
              />

              {/* Address line 1 + 2 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <input
                  placeholder="House number and street name *"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
                <input
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
              </div>

              {/* City / District / Postal */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <input
                  placeholder="Town / City *"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
                <input
                  placeholder="District *"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
                <input
                  placeholder="Postcode / ZIP *"
                  style={{
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
              </div>

              {/* Phone */}
              <input
                placeholder="Phone *"
                style={{
                  width: "100%",
                  height: "38px",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  fontSize: "12px",
                  padding: "0 10px",
                  marginBottom: "12px",
                  outline: "none",
                }}
              />

              {/* Ship to different address */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "#4b5563",
                  marginBottom: "8px",
                }}
              >
                <input type="checkbox" /> Ship to a different address?
              </label>

              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery."
                rows={3}
                style={{
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  fontSize: "12px",
                  padding: "8px 10px",
                  resize: "vertical",
                  marginBottom: "14px",
                  outline: "none",
                }}
              />

              {/* Shipping */}
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                Shipping
              </h3>
              <div
                style={{
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  padding: "8px 10px",
                  fontSize: "12px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Flat rate</span>
                <span>$10.00</span>
              </div>

              {/* Payment */}
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                Payment
              </h3>
              <div
                style={{
                  borderRadius: "6px",
                  border: "1px solid #e5e7eb",
                  padding: "8px 10px",
                  fontSize: "12px",
                  marginBottom: "6px",
                }}
              >
                Cash on delivery
              </div>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  color: "#6b7280",
                  marginBottom: "18px",
                }}
              >
                <input type="checkbox" style={{ marginRight: "6px" }} />
                Pay with cash upon delivery.
              </label>

              {/* Privacy note */}
              <p
                style={{
                  fontSize: "10px",
                  color: "#9ca3af",
                  lineHeight: 1.6,
                  marginBottom: "12px",
                }}
              >
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>

              {/* Place order button */}
              <button
                onClick={handlePlaceOrder}
                style={{
                  width: "100%",
                  height: "42px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "#8b5cf6",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Place Order ${total.toFixed(2)}
              </button>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                padding: "14px 16px 16px",
                backgroundColor: "#fafafa",
              }}
            >
              <h3
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "10px",
                }}
              >
                Your order
              </h3>

              {/* Product row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr auto",
                  gap: "10px",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "#e5e7eb",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=200&q=80"
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
                      fontSize: "12px",
                      fontWeight: 500,
                      marginBottom: "3px",
                    }}
                  >
                    SEO Foundation E‑book
                  </div>
                  <div style={{ fontSize: "11px", color: "#9ca3af" }}>× 1</div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  ${subtotal.toFixed(2)}
                </div>
              </div>

              <hr style={{ borderColor: "#e5e7eb", margin: "10px 0" }} />

              {/* Subtotal */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "12px",
                  color: "#6b7280",
                  marginBottom: "6px",
                }}
              >
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {/* Total */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Coupon input */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginTop: "4px",
                }}
              >
                <input
                  placeholder="Coupon code"
                  style={{
                    flex: 1,
                    height: "34px",
                    borderRadius: "6px",
                    border: "1px solid #e5e7eb",
                    fontSize: "12px",
                    padding: "0 10px",
                    outline: "none",
                  }}
                />
                <button
                  style={{
                    width: "80px",
                    height: "34px",
                    borderRadius: "6px",
                    border: "none",
                    backgroundColor: "#8b5cf6",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
