import React from "react";
import { FaStar, FaFire } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Apple Watch Series 9 GPS Cellular",
    description: "Advanced health features with cellular connectivity",
    price: "$429",
    originalPrice: "$499",
    discountBadge: "14% OFF",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop",
    rating: 5,
    reviews: "234",
    category: "Wearables",
  },
  {
    id: 2,
    title: "LG AI DD Front Load Washing Machine",
    description: "8kg capacity with AI Direct Drive technology",
    price: "$799",
    originalPrice: "$899",
    discountBadge: "11% OFF",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop",
    rating: 5,
    reviews: "189",
    category: "Appliances",
  },
  {
    id: 3,
    title: "Sony WF-1000XM5 Wireless Earbuds",
    description: "Industry-leading noise cancellation with LDAC",
    price: "$299",
    originalPrice: "$349",
    discountBadge: "14% OFF",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
    reviews: "421",
    category: "Audio",
  },
];

const BestSellingProducts = () => {
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/added-to-cart");
  };

  const handleShopNow = () => {
    navigate("/checkout");
  };
  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <section
      style={{
        backgroundColor: "#f8fafc",
        padding: "60px 0",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* CHANGED: Match container width and padding */}
      <div
        style={{
          maxWidth: "1400px", // Changed from "1200px"
          margin: "0 auto",
          padding: "0 30px", // Changed: Equal padding
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "25px", // Reduced gap slightly
          alignItems: "stretch",
        }}
      >
        {/* Left Promo Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
            borderRadius: "20px",
            padding: "35px 25px", // Reduced padding slightly
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(245, 158, 11, 0.2)",
            minHeight: "380px",
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              background:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 60%)",
              zIndex: 1,
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "15px",
              }}
            >
              <FaFire size={20} color="#ffffff" />
              <div
                style={{
                  fontSize: "14px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                LIMITED TIME OFFER
              </div>
            </div>

            <div
              style={{
                fontSize: "32px", // Slightly smaller
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              FLAT 50% OFF
            </div>

            <div
              style={{
                fontSize: "24px", // Slightly smaller
                fontWeight: 700,
                color: "#ffffff",
                opacity: 0.9,
                marginBottom: "25px",
              }}
            >
              Premium Wireless Headphones
            </div>

            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                padding: "10px 20px", // Reduced padding
                borderRadius: "50px",
                fontSize: "13px", // Slightly smaller
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "30px",
              }}
            >
              Use Code: AUDIO50
            </div>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "220px", // Slightly smaller
                height: "220px", // Slightly smaller
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
                alt="Wireless Headphone"
                style={{
                  width: "90%",
                  height: "90%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  transform: "rotate(10deg)",
                }}
              />
            </div>
          </div>

          <button
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: "20px",
              padding: "12px 28px", // Reduced padding
              borderRadius: "50px",
              border: "2px solid #ffffff",
              backgroundColor: "transparent",
              color: "#ffffff",
              fontSize: "13px", // Slightly smaller
              fontWeight: 700,
              letterSpacing: "1px",
              cursor: "pointer",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.color = "#f59e0b";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "#ffffff";
            }}
            onClick={handleShopNow}
          >
            SHOP NOW
          </button>
        </div>

        {/* Right Products Section */}
        <div>
          {/* Header section with right padding for asymmetric effect */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "30px",
              paddingRight: "30px", // Added for asymmetric effect
            }}
          >
            <div
              style={{
                width: "4px",
                height: "28px",
                backgroundColor: "#3b82f6",
                borderRadius: "2px",
              }}
            />
            <h2
              style={{
                fontSize: "28px", // Slightly smaller
                fontWeight: 700,
                color: "#111827",
                margin: 0,
              }}
            >
              Best Selling Products
            </h2>
            <div
              style={{
                marginLeft: "auto",
                padding: "8px 16px",
                backgroundColor: "#fef3c7",
                borderRadius: "20px",
                fontSize: "13px", // Slightly smaller
                fontWeight: 600,
                color: "#92400e",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaFire size={14} />
              <span>Hot This Week</span>
            </div>
          </div>

          {/* Products grid with right padding for asymmetric effect */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px", // Reduced gap
              paddingRight: "30px", // Added for asymmetric effect
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "16px",
                  padding: "18px", // Reduced padding
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #f1f5f9",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  minWidth: "0", // Added: Prevent overflow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = "#f1f5f9";
                }}
                onClick={() => handleCardClick(product.id)}
              >
                {/* Discount Badge */}
                {product.discountBadge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "14px", // Adjusted position
                      left: "14px", // Adjusted position
                      backgroundColor: "#ef4444",
                      color: "#ffffff",
                      padding: "5px 12px", // Reduced padding
                      borderRadius: "20px",
                      fontSize: "11px", // Slightly smaller
                      fontWeight: 700,
                      zIndex: 2,
                    }}
                  >
                    {product.discountBadge}
                  </div>
                )}

                {/* Category */}
                <div
                  style={{
                    fontSize: "11px", // Slightly smaller
                    color: "#6b7280",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "10px",
                  }}
                >
                  {product.category}
                </div>

                {/* Product Image */}
                <div
                  style={{
                    width: "100%",
                    height: "150px", // Reduced height
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
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

                {/* Title */}
                <h3
                  style={{
                    fontSize: "15px", // Slightly smaller
                    fontWeight: 600,
                    color: "#1f2937",
                    lineHeight: 1.4,
                    marginBottom: "8px",
                    height: "42px", // Adjusted height
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
                    fontSize: "13px", // Slightly smaller
                    color: "#6b7280",
                    lineHeight: 1.5,
                    marginBottom: "14px",
                    height: "40px", // Adjusted height
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.description}
                </p>

                {/* Countdown Timer for Middle Product */}
                {product.countdown && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "6px", // Reduced gap
                      marginBottom: "16px",
                      backgroundColor: "#f3f4f6",
                      borderRadius: "10px", // Slightly smaller
                      padding: "10px", // Reduced padding
                    }}
                  >
                    {[
                      { label: "Days", value: product.countdown.days },
                      { label: "Hours", value: product.countdown.hours },
                      { label: "Minutes", value: product.countdown.minutes },
                      { label: "Seconds", value: product.countdown.seconds },
                    ].map((item, index) => (
                      <div
                        key={index}
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "16px", // Slightly smaller
                            fontWeight: 700,
                            color: "#111827",
                            marginBottom: "4px",
                          }}
                        >
                          {item.value}
                        </div>
                        <div
                          style={{
                            fontSize: "10px", // Slightly smaller
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Rating */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px", // Reduced gap
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ display: "flex", gap: "2px" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={13} // Slightly smaller
                        color={i < product.rating ? "#fbbf24" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: "11px", color: "#6b7280" }}>
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px", // Reduced gap
                    marginBottom: "18px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px", // Slightly smaller
                      fontWeight: 700,
                      color: "#1f2937",
                    }}
                  >
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span
                      style={{
                        fontSize: "13px", // Slightly smaller
                        color: "#9ca3af",
                        textDecoration: "line-through",
                      }}
                    >
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  style={{
                    width: "100%",
                    padding: "11px 0", // Reduced padding
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#3b82f6",
                    color: "#ffffff",
                    fontSize: "13px", // Slightly smaller
                    fontWeight: 600,
                    cursor: "pointer",
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
                  onClick={handleBuyNow}
                >
                  {product.buttonText}
                </button>
              </div>
            ))}
          </div>

          {/* View All Button with right padding for asymmetric effect */}
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              paddingRight: "30px",
            }}
          >
            <button
              style={{
                padding: "12px 40px",
                borderRadius: "50px",
                border: "2px solid #3b82f6",
                backgroundColor: "transparent",
                color: "#3b82f6",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#3b82f6";
                e.target.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#3b82f6";
              }}
            >
              View All Best Sellers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
