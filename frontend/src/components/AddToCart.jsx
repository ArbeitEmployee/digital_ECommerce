import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Captcha Integration",
    provider: "TemplateMonster Web Studio",
    price: 59,
    oldPrice: 74,
  },
  {
    id: 2,
    title: "Installation & Setup",
    provider: "TemplateMonster Web Studio",
    price: 49,
    oldPrice: 59,
  },
  {
    id: 3,
    title: "On‑Page SEO Optimization",
    provider: "Web Studio SEO Team",
    price: 299,
    oldPrice: 329,
  },
  {
    id: 4,
    title: "Unique Logo Creation",
    provider: "TemplateMonster Web Studio",
    price: 249,
  },
  {
    id: 5,
    title: "Website Maintenance Pack",
    provider: "TemplateMonster Web Studio",
    price: 399,
  },
  {
    id: 6,
    title: "Hire a Developer (10 hours)",
    provider: "TemplateMonster Web Studio",
    price: 249,
    oldPrice: 299,
  },
  {
    id: 7,
    title: "Installation & Customization Package",
    provider: "TemplateMonster Web Studio",
    price: 259,
    oldPrice: 369,
    recommended: true,
  },
];

const AddToCart = ({ onClose }) => {
  const [selectedIds, setSelectedIds] = useState([2]);

  const toggleService = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const basePrice = 67;
  const selectedTotal = services
    .filter((s) => selectedIds.includes(s.id))
    .reduce((sum, s) => sum + s.price, 0);
  const subtotal = basePrice + selectedTotal;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
        zIndex: 50,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "1100px",
          maxHeight: "85vh",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
        }}
      >
        {/* LEFT - services list */}
        <div
          style={{
            padding: "20px 18px 18px",
            borderRight: "1px solid #e5e7eb",
            overflowY: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            Recommended Customization Services for This Product
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {services.map((service) => {
              const selected = selectedIds.includes(service.id);
              const rowBorderColor = service.recommended
                ? "#22c55e"
                : "#e5e7eb";

              return (
                <div
                  key={service.id}
                  style={{
                    borderRadius: "8px",
                    border: `1px solid ${rowBorderColor}`,
                    padding: "12px 14px",
                    display: "grid",
                    gridTemplateColumns: "60px minmax(0, 1fr) auto auto",
                    alignItems: "center",
                    columnGap: "14px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* icon placeholder */}
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "10px",
                      backgroundColor: "#f3f4f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                    }}
                  >
                    🛠
                  </div>

                  {/* text */}
                  <div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        marginBottom: "3px",
                      }}
                    >
                      {service.title}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                      }}
                    >
                      Provided by {service.provider} ·{" "}
                      <span style={{ color: "#2563eb", cursor: "pointer" }}>
                        Details
                      </span>
                    </div>
                    {service.recommended && (
                      <span
                        style={{
                          display: "inline-block",
                          marginTop: "6px",
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          backgroundColor: "#22c55e",
                          color: "#ffffff",
                        }}
                      >
                        Recommended
                      </span>
                    )}
                  </div>

                  {/* price */}
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "13px",
                      marginRight: "6px",
                    }}
                  >
                    {service.oldPrice && (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#9ca3af",
                          textDecoration: "line-through",
                        }}
                      >
                        ${service.oldPrice}
                      </div>
                    )}
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#f97316",
                      }}
                    >
                      ${service.price}
                    </div>
                  </div>

                  {/* add/tick button */}
                  <button
                    onClick={() => toggleService(service.id)}
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "6px",
                      border: "none",
                      backgroundColor: selected ? "#22c55e" : "#22c55e",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontSize: "18px",
                    }}
                  >
                    {selected ? "✓" : "+"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT - cart summary */}
        <div
          style={{
            padding: "18px 18px 20px",
            backgroundColor: "#f9fafb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* header row with close */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                margin: 0,
              }}
            >
              You added to cart
            </h3>
            <button
              onClick={onClose}
              style={{
                width: "28px",
                height: "28px",
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

          {/* product info */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#ffffff",
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
                Theme
              </div>
              <div style={{ marginBottom: "4px" }}>
                <span style={{ fontWeight: 600 }}>License type</span>: Personal
                license
              </div>
              <div style={{ fontWeight: 700 }}>${basePrice}</div>
            </div>
          </div>

          {/* selected services summary */}
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              marginTop: "10px",
              paddingTop: "10px",
              flexGrow: 1,
            }}
          >
            {services
              .filter((s) => selectedIds.includes(s.id))
              .map((s) => (
                <div
                  key={s.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "12px",
                    padding: "6px 0",
                  }}
                >
                  <span>{s.title}</span>
                  <span style={{ fontWeight: 600, color: "#f97316" }}>
                    ${s.price}
                  </span>
                </div>
              ))}
          </div>

          {/* subtotal */}
          <div
            style={{
              padding: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          {/* buttons */}
          <button
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#f97316",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Go To Cart
          </button>
          <button
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "4px",
              border: "1px solid #2563eb",
              backgroundColor: "#ffffff",
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
