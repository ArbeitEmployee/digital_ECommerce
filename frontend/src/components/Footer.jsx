import React from "react";
import {
  FaTruckFast,
  FaArrowRotateLeft,
  FaGift,
  FaHeadset,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcPaypal,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "Roboto, sans-serif",
        color: "#333",
        borderTop: "1px solid #f1f1f1",
        marginTop: "40px",
      }}
    >
      {/* TOP FEATURE BAR */}
      <div
        style={{
          borderBottom: "1px solid #f1f1f1",
          padding: "26px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {[
            {
              icon: <FaTruckFast size={26} />,
              title: "Worldwide Shipping",
              text: "Order Above $100",
            },
            {
              icon: <FaArrowRotateLeft size={26} />,
              title: "Money Back Guarantee",
              text: "Guarantee With In 30 Days",
            },
            {
              icon: <FaGift size={26} />,
              title: "Offers And Discounts",
              text: "Back Returns In 7 Days",
            },
            {
              icon: <FaHeadset size={26} />,
              title: "24/7 Support Services",
              text: "Any Time Support",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                minWidth: "230px",
                flex: "1 1 0",
              }}
            >
              <div style={{ color: "#111827" }}>{item.icon}</div>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "2px",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 15px 26px 15px",
          display: "grid",
          gridTemplateColumns: "2.1fr 1.2fr 1.2fr 1.4fr 2.1fr",
          columnGap: "60px",
        }}
      >
        {/* Contact Us */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "22px",
            }}
          >
            Contact Us
          </h4>
          <p
            style={{
              fontSize: "13px",
              lineHeight: 1.9,
              color: "#555",
              margin: 0,
            }}
          >
            60 29th Street San Francisco,
            <br />
            507-Union Trade Center,
            <br />
            United States America - 94110
          </p>

          <div style={{ marginTop: "16px", fontSize: "13px", color: "#555" }}>
            <p style={{ margin: "2px 0" }}>(+00) 123-456-7890</p>
            <p style={{ margin: "2px 0" }}>(+91) 987-654-3210</p>
            <p style={{ margin: "2px 0" }}>support@demo.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "22px",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Contact Us",
              "Shipping",
              "Sitemap",
              "FAQs",
              "Store Us",
              "About Us",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: "#555",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "22px",
            }}
          >
            Help
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Term & Policy",
              "Press",
              "Careers",
              "Delivery",
              "Service",
              "Sitemap",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: "#555",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "22px",
            }}
          >
            Services
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Order Status",
              "Terms Conditions",
              "Policy For Sellers",
              "Policy For Buyers",
              "Shipping & Refund",
              "Wholesale Policy",
            ].map((item) => (
              <li key={item} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    fontSize: "13px",
                    color: "#555",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Get Our Latest Update !
          </h4>
          <p
            style={{
              fontSize: "13px",
              color: "#555",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            Subscribe to latest newsletter to get news about special discounts.
          </p>
          <div
            style={{
              display: "flex",
              maxWidth: "330px",
              marginBottom: "16px",
            }}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              style={{
                flex: 1,
                height: "42px",
                border: "1px solid #e5e5e5",
                borderRight: "none",
                padding: "0 12px",
                fontSize: "13px",
                outline: "none",
              }}
            />
            <button
              style={{
                height: "42px",
                padding: "0 18px",
                border: "none",
                backgroundColor: "#0063d1",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          borderTop: "1px solid #f1f1f1",
          padding: "16px 0 20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#666",
            }}
          >
            © 2025 Ellomart Demo - WordPress Theme by Avanam
          </div>

          {/* SOCIAL ICONS */}
          <div>
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 15px",
                display: "flex",
                justifyContent: "center",
                gap: "18px",
                fontSize: "16px",
              }}
            >
              {/* Facebook */}
              <button
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  color: "#1877f2", // Facebook blue
                }}
              >
                <FaFacebookF size={14} />
              </button>

              {/* X / Twitter */}
              <button
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  color: "#000000", // X black
                }}
              >
                <FaXTwitter size={14} />
              </button>

              {/* Instagram */}
              <button
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    "radial-gradient(circle at 30% 30%, #feda75, #d62976, #962fbf, #4f5bd5)",
                  cursor: "pointer",
                  color: "#962fbf",
                }}
              >
                <FaInstagram size={14} />
              </button>

              {/* YouTube */}
              <button
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF0000",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
              >
                <FaYoutube size={14} />
              </button>

              {/* Google */}
              <button
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  color: "#4285F4", // Google blue
                }}
              >
                <FaGoogle size={14} />
              </button>
            </div>
          </div>

          {/* PAYMENT ICONS */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "24px",
            }}
          >
            <FaCcVisa style={{ color: "#1434CB" }} />
            <FaCcMastercard style={{ color: "#EB001B" }} />
            <FaCcAmex style={{ color: "#016FD0" }} />
            <FaCcDiscover style={{ color: "#FF6000" }} />
            <FaCcPaypal style={{ color: "#003087" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
