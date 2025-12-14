import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    titleTop: "FLASH SALE - 50% OFF",
    heading: "Apple iPhone 15 Pro\nMax Ultra Performance",
    buttonText: "BUY NOW",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2070&q=80",
    bgColor: "#000000",
    textColor: "#ffffff",
  },
  {
    id: 2,
    titleTop: "BEST DEAL OF THE DAY",
    heading: "Sony WH-1000XM5\nNoise Cancelling Headphones",
    buttonText: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=2070&q=80",
    bgColor: "#0a0a0a",
    textColor: "#ffffff",
  },
  {
    id: 3,
    titleTop: "LIMITED TIME OFFER",
    heading: "MacBook Pro M3\nSupercharged Performance",
    buttonText: "EXPLORE",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=2070&q=80",
    bgColor: "#111111",
    textColor: "#ffffff",
  },
  {
    id: 4,
    titleTop: "NEW ARRIVALS",
    heading: 'Samsung 65" 4K QLED\nSmart TV',
    buttonText: "VIEW DEAL",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=2070&q=80",
    bgColor: "#0f0f0f",
    textColor: "#ffffff",
  },
  {
    id: 5,
    titleTop: "GAMING ESSENTIALS",
    heading: "PlayStation 5 Console\nNext-Gen Gaming",
    buttonText: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=2070&q=80",
    bgColor: "#000000",
    textColor: "#ffffff",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[current];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: activeSlide.bgColor,
        backgroundImage: `linear-gradient(to right, ${activeSlide.bgColor} 30%, rgba(0,0,0,0.7)), url(${activeSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        position: "relative",
        transition: "all 0.8s ease-in-out",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          minHeight: "380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "40px 60px 40px 30px", // CHANGED: Same padding as Navbar
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left arrow (stays near text) */}
        <button
          onClick={prevSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            marginRight: "15px",
            transition: "all 0.3s ease",
            color: "#ffffff",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "scale(1)";
          }}
        >
          <FaChevronLeft style={{ fontSize: "14px" }} />
        </button>

        {/* Text content */}
        <div style={{ flex: 1, maxWidth: "500px", padding: "15px 0" }}>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "30px",
              marginBottom: "15px",
            }}
          >
            <p
              style={{
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                fontSize: "11px",
                fontWeight: "600",
                color: activeSlide.textColor,
                margin: 0,
              }}
            >
              {activeSlide.titleTop}
            </p>
          </div>

          <h1
            style={{
              fontSize: "36px",
              lineHeight: 1.1,
              fontWeight: "800",
              color: activeSlide.textColor,
              margin: "0 0 12px 0",
              whiteSpace: "pre-line",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {activeSlide.heading}
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "20px",
              maxWidth: "400px",
              lineHeight: 1.5,
            }}
          >
            Experience the ultimate in technology and innovation with our
            premium electronics collection.
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              style={{
                padding: "12px 28px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: "#ffffff",
                color: activeSlide.bgColor,
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f0f0f0";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
              }}
            >
              {activeSlide.buttonText}
            </button>
            <button
              style={{
                padding: "12px 24px",
                borderRadius: "6px",
                border: "2px solid #ffffff",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.color = activeSlide.bgColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ffffff";
              }}
            >
              Learn More
            </button>
          </div>

          {/* Product highlights */}
          <div style={{ display: "flex", gap: "20px", marginTop: "25px" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "2px",
                }}
              >
                2-Year
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)" }}>
                Warranty
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "2px",
                }}
              >
                Free
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)" }}>
                Shipping
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "2px",
                }}
              >
                24/7
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)" }}>
                Support
              </div>
            </div>
          </div>
        </div>

        {/* Right arrow absolutely positioned over product side */}
        <button
          onClick={nextSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: "#ffffff",
            position: "absolute",
            top: "50%", // vertically centered
            right: "60px", // move near the right edge (tweak if needed)
            transform: "translateY(-50%)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <FaChevronRight style={{ fontSize: "14px" }} />
        </button>
      </div>

      {/* Dots indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          paddingBottom: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            style={{
              width: current === index ? "30px" : "10px",
              height: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor:
                current === index ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              if (current !== index) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
                e.target.style.transform = "scale(1.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (current !== index) {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
                e.target.style.transform = "scale(1)";
              }
            }}
          >
            {current === index && (
              <span
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "9px",
                  color: "#ffffff",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                Slide {index + 1}
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
