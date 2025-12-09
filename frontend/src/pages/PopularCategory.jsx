import React from "react";

const categories = [
  {
    id: 1,
    name: "Headphones",
    products: "24 Products",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Laptops",
    products: "26 Products",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Gaming",
    products: "15 Products",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2058&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Smart Watches",
    products: "28 Products",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Tablets",
    products: "12 Products",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Cameras",
    products: "20 Products",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2053&auto=format&fit=crop",
  },
];

const banners = [
  {
    id: 1,
    titleTop: "New Generation",
    titleMain: "Gaming Laptops",
    price: "From $999",
    buttonText: "SHOP NOW",
    bg: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop",
  },
  {
    id: 2,
    titleTop: "Biggest Deals",
    titleMain: "DSLR Cameras",
    price: "Up to 40% OFF",
    buttonText: "SHOP NOW",
    bg: "linear-gradient(135deg, #dc2626, #f97316)",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    titleTop: "Best Quality",
    titleMain: "Smartphones",
    price: "From $299",
    buttonText: "SHOP NOW",
    bg: "linear-gradient(135deg, #7c3aed, #06b6d4)",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
  },
];

const PopularCategory = () => {
  return (
    <section
      style={{
        backgroundColor: "#f8fafc",
        padding: "60px 0",
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
        {/* Title with description */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Popular Categories
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6b7280",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Discover our most sought-after electronics categories with the
            latest gadgets and accessories
          </p>
        </div>

        {/* Category cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #f1f5f9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.borderColor = "#f1f5f9";
              }}
            >
              {/* Image container */}
              <div
                style={{
                  width: "100%",
                  height: "140px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "16px",
                  backgroundColor: "#f8fafc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Category name */}
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1f2937",
                  marginBottom: "6px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {cat.name}
              </div>

              {/* Product count */}
              <div
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                {cat.products}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Banners */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "8px",
            }}
          >
            Hot Deals
          </h3>
          <p style={{ fontSize: "15px", color: "#6b7280" }}>
            Don't miss out on these exclusive offers
          </p>
        </div>

        {/* Bottom banners row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {banners.map((b) => (
            <div
              key={b.id}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                background: b.bg,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                padding: "30px",
                minHeight: "220px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
                transition: "all 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(0, 0, 0, 0.12)";
              }}
            >
              {/* Content */}
              <div style={{ flex: 1, zIndex: 2, position: "relative" }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    marginBottom: "8px",
                    opacity: 0.9,
                  }}
                >
                  {b.titleTop}
                </div>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: "12px",
                  }}
                >
                  {b.titleMain}
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "20px",
                    color: "#ffd700",
                  }}
                >
                  {b.price}
                </div>
                <button
                  style={{
                    padding: "12px 28px",
                    borderRadius: "50px",
                    border: "2px solid rgba(255, 255, 255, 0.9)",
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.15)";
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {b.buttonText}
                </button>
              </div>

              {/* Image */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={b.image}
                    alt={b.titleMain}
                    style={{
                      width: "90%",
                      height: "90%",
                      objectFit: "cover",
                      borderRadius: "50%",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1) rotate(5deg)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1) rotate(0deg)";
                    }}
                  />
                </div>
              </div>

              {/* Background pattern */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 60%)",
                  zIndex: 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
