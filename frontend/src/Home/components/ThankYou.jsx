// ThankYou.jsx
import React from "react";

const ThankYou = () => {
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
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <div style={{ marginBottom: "8px", fontWeight: 700 }}>Logo</div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "6px",
            color: "#111827",
          }}
        >
          Thank you
        </h1>

        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginBottom: "24px",
          }}
        >
          Adipiscing bibendum id a condimentum risus nec sed malesuada at etiam
          egestas.
        </p>

        {/* Main card */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            boxShadow: "0 20px 45px rgba(15,23,42,0.12)",
            padding: "20px 24px 24px",
            textAlign: "left",
          }}
        >
          {/* Top message */}
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "14px",
            }}
          >
            Your order has been received.
          </div>

          {/* Order summary strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "14px",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              padding: "12px 14px",
              fontSize: "12px",
              marginBottom: "12px",
            }}
          >
            <div>
              <div style={{ color: "#9ca3af", marginBottom: "3px" }}>
                Order number:
              </div>
              <div style={{ fontWeight: 600 }}>72858</div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", marginBottom: "3px" }}>Date:</div>
              <div style={{ fontWeight: 600 }}>December 7, 2025</div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", marginBottom: "3px" }}>
                Total:
              </div>
              <div style={{ fontWeight: 600 }}>$35.00</div>
            </div>
            <div>
              <div style={{ color: "#9ca3af", marginBottom: "3px" }}>
                Payment method:
              </div>
              <div style={{ fontWeight: 600 }}>Cash on delivery</div>
            </div>
          </div>

          <p
            style={{
              fontSize: "12px",
              color: "#6b7280",
              marginBottom: "18px",
            }}
          >
            Pay with cash upon delivery.
          </p>

          {/* Order details box */}
          <div
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              padding: "14px 16px 16px",
              fontSize: "12px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              Order details
            </div>

            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              <span>Product</span>
              <span style={{ textAlign: "right" }}>Total</span>
            </div>

            <hr style={{ borderColor: "#e5e7eb", margin: "6px 0 8px" }} />

            {/* Product row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                marginBottom: "6px",
              }}
            >
              <span>Ship Your Idea – Black × 1</span>
              <span style={{ textAlign: "right" }}>$35.00</span>
            </div>

            <hr style={{ borderColor: "#e5e7eb", margin: "6px 0 8px" }} />

            {/* Subtotal */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                marginBottom: "4px",
              }}
            >
              <span>Subtotal:</span>
              <span style={{ textAlign: "right" }}>$35.00</span>
            </div>

            {/* Payment method */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                marginBottom: "4px",
              }}
            >
              <span>Payment method:</span>
              <span style={{ textAlign: "right" }}>Cash on delivery</span>
            </div>

            {/* Total */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                fontWeight: 600,
                marginTop: "4px",
              }}
            >
              <span>Total:</span>
              <span style={{ textAlign: "right" }}>$35.00</span>
            </div>
          </div>

          {/* Billing address */}
          <div
            style={{
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              padding: "14px 16px 18px",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              Billing address
            </div>
            <p
              style={{
                margin: 0,
                lineHeight: 1.7,
                whiteSpace: "pre-line",
                color: "#4b5563",
              }}
            >
              TechSolutions SARL{"\n"}
              Jean Dupont{"\n"}
              123 rue de la Paix{"\n"}
              Apt. 45{"\n"}
              84200 CARPENTRAS{"\n"}
              France{"\n"}
              0408634523{"\n"}
              test.utilisateur@example.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
