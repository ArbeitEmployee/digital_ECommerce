import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaHeart,
  FaCartPlus,
  FaEye,
} from "react-icons/fa6";

const products = [
  {
    id: 1,
    title: "Apple MacBook Pro M3 Chip 14-inch",
    description: "Supercharged by M3 Pro or M3 Max chip",
    price: "$1,299",
    originalPrice: "$1,499",
    discount: "13% OFF",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    rating: 5,
    reviews: "128",
    category: "Laptops",
  },
  {
    id: 2,
    title: "Sony PlayStation 5 Console",
    description: "4K gaming & ultra-fast SSD",
    price: "$499",
    originalPrice: "$549",
    discount: "9% OFF",
    buttonText: "ADD TO CART",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    reviews: "256",
    category: "Gaming",
  },
  {
    id: 3,
    title: "Apple Watch Series 9 GPS",
    description: "Advanced health monitoring features",
    price: "$399",
    originalPrice: "$429",
    discount: "7% OFF",
    buttonText: "VIEW DETAILS",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop",
    rating: 4,
    reviews: "89",
    category: "Wearables",
  },
  {
    id: 4,
    title: 'Samsung 65" 4K QLED Smart TV',
    description: "Quantum HDR, Alexa Built-in",
    price: "$899",
    originalPrice: "$1,099",
    discount: "18% OFF",
    buttonText: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    reviews: "312",
    category: "Televisions",
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise cancellation",
    price: "$329",
    originalPrice: "$399",
    discount: "17% OFF",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    reviews: "421",
    category: "Audio",
  },
  {
    id: 6,
    title: "Canon EOS R5 Mirrorless Camera",
    description: "45MP Full Frame, 8K Video",
    price: "$3,899",
    originalPrice: "$4,299",
    discount: "9% OFF",
    buttonText: "PRE-ORDER",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2053&auto=format&fit=crop",
    rating: 5,
    reviews: "67",
    category: "Cameras",
  },
  {
    id: 7,
    title: "iPhone 15 Pro Max",
    description: "Titanium design, A17 Pro chip",
    price: "$1,199",
    originalPrice: "$1,399",
    discount: "14% OFF",
    buttonText: "ADD TO CART",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    reviews: "512",
    category: "Smartphones",
  },
  {
    id: 8,
    title: "iPad Pro M2 12.9-inch",
    description: "Liquid Retina XDR display",
    price: "$1,099",
    originalPrice: "$1,299",
    discount: "15% OFF",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    reviews: "189",
    category: "Tablets",
  },
];

const LatestProducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [wishlist, setWishlist] = useState({});
  const visibleCards = 4;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCards < products.length;

  const handlePrev = () => {
    if (canPrev) setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setStartIndex((prev) => prev + 1);
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleProducts = products.slice(startIndex, startIndex + visibleCards);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "60px 0 80px 0",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Latest Products
            </h2>
            <p style={{ color: "#6b7280", fontSize: "16px" }}>
              Discover our newest arrivals with exclusive discounts
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => setStartIndex(0)}
              style={{
                padding: "10px 24px",
                borderRadius: "6px",
                border: "1px solid #e5e7eb",
                backgroundColor: "#ffffff",
                color: "#374151",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "#3b82f6";
                e.target.style.color = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.color = "#374151";
              }}
            >
              View All
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div style={{ position: "relative" }}>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: canPrev ? "#3b82f6" : "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canPrev ? "pointer" : "not-allowed",
              color: "#ffffff",
              zIndex: 10,
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (canPrev) {
                e.target.style.transform = "translateY(-50%) scale(1.1)";
                e.target.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (canPrev) {
                e.target.style.transform = "translateY(-50%)";
                e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
              }
            }}
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={handleNext}
            disabled={!canNext}
            style={{
              position: "absolute",
              right: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: canNext ? "#3b82f6" : "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canNext ? "pointer" : "not-allowed",
              color: "#ffffff",
              zIndex: 10,
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (canNext) {
                e.target.style.transform = "translateY(-50%) scale(1.1)";
                e.target.style.boxShadow = "0 6px 20px rgba(59, 130, 246, 0.4)";
              }
            }}
            onMouseLeave={(e) => {
              if (canNext) {
                e.target.style.transform = "translateY(-50%)";
                e.target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
              }
            }}
          >
            <FaChevronRight size={18} />
          </button>

          {/* Products Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px",
            }}
          >
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #f1f5f9",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = "#f1f5f9";
                }}
              >
                {/* Discount Badge */}
                {product.discount && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      backgroundColor: "#ef4444",
                      color: "#ffffff",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    {product.discount}
                  </div>
                )}

                {/* Action Buttons */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    zIndex: 2,
                  }}
                >
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: wishlist[product.id]
                        ? "#ef4444"
                        : "#ffffff",
                      color: wishlist[product.id] ? "#ffffff" : "#374151",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaHeart size={14} />
                  </button>
                  <button
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: "#ffffff",
                      color: "#374151",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaEye size={14} />
                  </button>
                </div>

                {/* Product Image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                </div>

                {/* Category */}
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "8px",
                  }}
                >
                  {product.category}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1f2937",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                    height: "44px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    lineHeight: 1.5,
                    marginBottom: "16px",
                    height: "42px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.description}
                </p>

                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <div style={{ display: "flex", gap: "2px" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={12}
                        color={i < product.rating ? "#fbbf24" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1f2937",
                    }}
                  >
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#9ca3af",
                        textDecoration: "line-through",
                      }}
                    >
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    style={{
                      flex: 1,
                      padding: "12px 0",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#3b82f6",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2563eb";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#3b82f6";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <FaCartPlus size={14} />
                    {product.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "40px",
            }}
          >
            {Array.from({
              length: Math.ceil(products.length / visibleCards),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * visibleCards)}
                style={{
                  width: startIndex === index * visibleCards ? "24px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor:
                    startIndex === index * visibleCards ? "#3b82f6" : "#d1d5db",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
