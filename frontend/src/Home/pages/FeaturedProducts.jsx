import React from "react";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "New Featured MacBook Pro With Apple M1 Pro Chip",
    price: "$980 – $1,280",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
  {
    id: 2,
    title: "Apple Watch SE 44mm GPS+Cellular Gold",
    price: "$35 – $45",
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
  {
    id: 3,
    title: "APPLE New AirPods Max Bluetooth Headset",
    price: "$23",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
  {
    id: 4,
    title: "LG 8 kg Fully Automatic Top Load Washing Machine",
    price: "$230",
    oldPrice: "$240",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    discountBadge: "-4%",
    showCountdown: true,
  },
  {
    id: 5,
    title: "MOMENTUM 2K Indoor Security Camera for Home",
    price: "$190",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    rating: 5,
  },
];

const bottomBanners = [
  {
    id: 1,
    bg: "linear-gradient(135deg,#ec2f4b,#f96a40)",
    titleTop: "Save Up To 20% Off",
    titleMain: "Truly Wireless Audio Earbuds",
    buttonText: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    bg: "linear-gradient(135deg,#4ade80,#16a34a)",
    titleTop: "Save Up To 20% Off",
    titleMain: "Wireless Gaming Controller",
    buttonText: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleBuyNow = () => {
    navigate("/added-to-cart");
  };

  const handleBannerShopNow = () => {
    navigate("/checkout");
  };

  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        padding: "40px 0 70px 0",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* CHANGED: Match other components' container width and padding */}
      <div
        style={{
          maxWidth: "1400px", // Changed from "1200px"
          margin: "0 auto",
          padding: "0 30px", // Changed: Equal padding for grid alignment
          boxSizing: "border-box",
        }}
      >
        {/* Heading with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px", marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Featured Products
          </h2>
        </div>

        {/* Product cards row - Adjusted for new container width */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: "15px", // Reduced gap slightly
            marginBottom: "30px",
            paddingRight: "30px", // Added for asymmetric effect
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "16px 14px 16px",
                boxShadow: "0 10px 24px rgba(15,23,42,0.05)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "260px",
                minWidth: "0", // Added: Prevent overflow
              }}
            >
              {/* discount badge */}
              {p.discountBadge && (
                <div
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "12px",
                    backgroundColor: "#f97316",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: 600,
                    borderRadius: "4px",
                    padding: "2px 8px",
                  }}
                >
                  {p.discountBadge}
                </div>
              )}

              {/* image – click goes to product details */}
              <div
                style={{
                  width: "100%",
                  height: "130px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
                onClick={() => handleViewDetails(p.id)}
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

              {/* countdown for washing machine card */}
              {p.showCountdown && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,minmax(0,1fr))",
                    gap: "4px",
                    marginBottom: "8px",
                  }}
                >
                  {[
                    { label: "DAYS", value: "432" },
                    { label: "HRS", value: "15" },
                    { label: "MIN", value: "45" },
                    { label: "SEC", value: "51" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      style={{
                        backgroundColor: "#f3f4f6",
                        borderRadius: "3px",
                        textAlign: "center",
                        padding: "3px 0",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#111827",
                        }}
                      >
                        {c.value}
                      </div>
                      <div
                        style={{
                          fontSize: "8px",
                          color: "#6b7280",
                        }}
                      >
                        {c.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* title – click goes to product details */}
              <div
                style={{
                  fontSize: "12px",
                  color: "#111827",
                  lineHeight: 1.4,
                  marginBottom: "6px",
                  minHeight: "38px",
                  cursor: "pointer",
                }}
                onClick={() => handleViewDetails(p.id)}
              >
                {p.title}
              </div>

              {/* rating */}
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

              {/* price */}
              <div
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#2563eb",
                  }}
                >
                  {p.price}
                </span>
                {p.oldPrice && (
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#9ca3af",
                      textDecoration: "line-through",
                    }}
                  >
                    {p.oldPrice}
                  </span>
                )}
              </div>

              {/* button → BUY NOW → Add to Cart */}
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
                onClick={handleBuyNow}
              >
                BUY NOW
              </button>
            </div>
          ))}
        </div>

        {/* bottom banners - Adjusted for new container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "15px", // Reduced gap slightly
            paddingRight: "30px", // Added for asymmetric effect
          }}
        >
          {bottomBanners.map((b) => (
            <div
              key={b.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                background: b.bg,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "20px 24px", // Slightly reduced padding
                minHeight: "160px", // Slightly reduced height
                minWidth: "0", // Added: Prevent overflow
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                    opacity: 0.9,
                  }}
                >
                  {b.titleTop}
                </div>
                <div
                  style={{
                    fontSize: "20px", // Slightly smaller
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: "14px",
                  }}
                >
                  {b.titleMain}
                </div>
                <button
                  style={{
                    padding: "8px 20px",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: "#ffffff",
                    color: "#111827",
                    fontSize: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={handleBannerShopNow}
                >
                  {b.buttonText}
                </button>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src={b.image}
                  alt={b.titleMain}
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
