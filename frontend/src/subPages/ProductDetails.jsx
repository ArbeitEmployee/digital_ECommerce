import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=400&q=80",
];

const colors = [
  {
    id: "pink",
    label: "Pink",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "blue",
    label: "Blue",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "midnight",
    label: "Midnight",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "starlight",
    label: "Starlight",
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=300&q=80",
  },
];

const rams = ["4GB", "6GB", "8GB"];
const storages = ["128GB", "256GB", "64GB"];

const ProductDetails = () => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [selectedRam, setSelectedRam] = useState(rams[1]);
  const [selectedStorage, setSelectedStorage] = useState(storages[0]);
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  const increaseQty = () => setQty((q) => q + 1);
  const decreaseQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

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
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1.4fr)",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT: IMAGE GALLERY */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px minmax(0, 1fr)",
              gap: "18px",
              marginBottom: "14px",
            }}
          >
            {/* Thumbnails column */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ▲
              </button>
              {images.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  style={{
                    width: "60px",
                    height: "70px",
                    borderRadius: "6px",
                    border:
                      activeImage === img
                        ? "2px solid #2563eb"
                        : "1px solid #e5e7eb",
                    padding: 0,
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <img
                    src={img}
                    alt="Thumbnail"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
              <button
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ▼
              </button>
            </div>

            {/* Main image */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                padding: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={activeImage}
                alt="Product"
                style={{
                  maxWidth: "100%",
                  maxHeight: "380px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* Under-image badges */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {["100% Original", "Lowest Price", "Free Shipping"].map((label) => (
              <div
                key={label}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  padding: "8px 10px",
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#4b5563",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div>
          {/* Title + price range */}
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "4px",
            }}
          >
            iPhone 13, 128GB, Pink - Unlocked Premium
          </h1>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#2563eb",
              marginBottom: "4px",
            }}
          >
            $200 – $800
          </div>

          {/* Rating */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
              color: "#f59e0b",
              marginBottom: "8px",
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} size={12} />
            ))}
            <span style={{ color: "#6b7280" }}>(1 review)</span>
          </div>

          {/* Selling fast note */}
          <div
            style={{
              fontSize: "12px",
              color: "#b91c1c",
              marginBottom: "14px",
            }}
          >
            Selling fast! Over 19 people have in their cart
          </div>

          {/* Short description */}
          <p
            style={{
              fontSize: "13px",
              color: "#4b5563",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Cinematic mode in 1080p at 30 fps. Dolby Vision HDR video recording
            up to 4K at 60 fps. 2x Optical zoom range. Water resistant up to a
            depth of 6 meters for up to 30 minutes. Compatible with MagSafe.
          </p>

          {/* Color options */}
          <div style={{ marginBottom: "14px" }}>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Color
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {colors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c.id)}
                  style={{
                    width: "44px",
                    height: "56px",
                    borderRadius: "6px",
                    border:
                      selectedColor === c.id
                        ? "2px solid #2563eb"
                        : "1px solid #e5e7eb",
                    padding: 0,
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={c.image}
                    alt={c.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RAM options */}
          <div style={{ marginBottom: "14px" }}>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              RAM
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {rams.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRam(r)}
                  style={{
                    padding: "4px 10px",
                    fontSize: "12px",
                    borderRadius: "4px",
                    border:
                      selectedRam === r
                        ? "1px solid #2563eb"
                        : "1px solid #e5e7eb",
                    backgroundColor: selectedRam === r ? "#e0ebff" : "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Storage options */}
          <div style={{ marginBottom: "14px" }}>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "6px",
              }}
            >
              Internal Storage
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {storages.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStorage(s)}
                  style={{
                    padding: "4px 10px",
                    fontSize: "12px",
                    borderRadius: "4px",
                    border:
                      selectedStorage === s
                        ? "1px solid #2563eb"
                        : "1px solid #e5e7eb",
                    backgroundColor:
                      selectedStorage === s ? "#e0ebff" : "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Price + stock */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#2563eb",
              marginTop: "10px",
              marginBottom: "4px",
            }}
          >
            $200
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "#16a34a",
              marginBottom: "14px",
            }}
          >
            229 in stock
          </div>

          {/* Quantity + Add to cart */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
                overflow: "hidden",
              }}
            >
              <button
                onClick={decreaseQty}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                −
              </button>
              <span
                style={{
                  width: "40px",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                {qty}
              </span>
              <button
                onClick={increaseQty}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                +
              </button>
            </div>

            <button
              style={{
                flex: 1,
                height: "38px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={() => navigate("/added-to-cart")}
            >
              ADD TO CART
            </button>
          </div>

          {/* Buy now */}
          <button
            style={{
              width: "100%",
              height: "38px",
              borderRadius: "4px",
              border: "1px solid #2563eb",
              backgroundColor: "#ffffff",
              color: "#2563eb",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "12px",
            }}
            onClick={() => navigate("/checkout")}
          >
            BUY NOW
          </button>

          {/* Icons row */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              fontSize: "11px",
              color: "#4b5563",
              marginBottom: "16px",
            }}
          >
            <span>COMPARE</span>
            <span>WISHLIST</span>
            <span>ASK US</span>
            <span>SHARE</span>
          </div>

          {/* Extra info bullets */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontSize: "12px",
              color: "#4b5563",
              lineHeight: 1.7,
            }}
          >
            <li>24 people are viewing this right now</li>
            <li>Estimated Delivery: 4 to 8 business days</li>
            <li>Free Shipping &amp; Returns: On all orders over $200</li>
          </ul>

          {/* Payment row */}
          <div
            style={{
              marginTop: "18px",
              paddingTop: "12px",
              borderTop: "1px solid #e5e7eb",
              fontSize: "11px",
              color: "#6b7280",
            }}
          >
            <div style={{ marginBottom: "6px" }}>
              Guaranteed Safe And Secure Checkout
            </div>
            <div style={{ display: "flex", gap: "8px", fontSize: "20px" }}>
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
