// pages/AboutUs.jsx
import React, { useState } from "react";

const tabs = [
  {
    id: "development",
    label: "Development",
    content:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. This section talks about how our development team builds fast, reliable e‑commerce experiences with a focus on performance, UX, and conversion.",
  },
  {
    id: "team",
    label: "Qualified team",
    content:
      "Behind every successful store there is a qualified team. Designers, developers, marketers, and support engineers work together to deliver a seamless digital shopping journey. We combine years of experience in online retail with modern tools and workflows.",
  },
  {
    id: "strategy",
    label: "Strategy",
    content:
      "A great e‑commerce brand needs clear strategy. From audience research and content planning to data‑driven optimization, our approach helps businesses attract visitors, turn them into customers, and keep them coming back.",
  },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("development");

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        padding: "30px 0 60px 0",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* CHANGED: Match container width and padding */}
      <div
        style={{
          maxWidth: "1400px", // Changed from "1100px"
          margin: "0 auto",
          padding: "0 30px", // Changed from "0 15px"
          boxSizing: "border-box",
        }}
      >
        {/* Breadcrumb + title */}
        <div
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "8px",
            paddingRight: "30px", // Added for asymmetric effect
          }}
        >
          Home / About Us
        </div>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "18px",
            paddingRight: "30px", // Added for asymmetric effect
          }}
        >
          About Our Store
        </h1>

        {/* Main content with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px" }}>
          {/* Tabs header */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "6px 6px 0 0",
              border: "1px solid #e5e7eb",
              borderBottom: "none",
              display: "flex",
            }}
          >
            {tabs.map((tab) => {
              const active = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    flex: 1,
                    padding: "10px 0",
                    border: "none",
                    borderBottom: active
                      ? "2px solid #2563eb"
                      : "2px solid transparent",
                    backgroundColor: active ? "#f9fafb" : "#ffffff",
                    fontSize: "13px",
                    fontWeight: active ? 600 : 500,
                    color: active ? "#111827" : "#6b7280",
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0 0 6px 6px",
              border: "1px solid #e5e7eb",
              padding: "14px 16px 18px",
              fontSize: "13px",
              color: "#4b5563",
              lineHeight: 1.7,
              marginBottom: "26px",
            }}
          >
            {current.content}
            <br />
            <br />
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions.
          </div>
        </div>

        {/* Image grid section with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
              gap: "20px", // Increased gap slightly
            }}
          >
            {/* Large left image - Team working on ecommerce marketing */}
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                minWidth: "0", // Added: Prevent overflow
              }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Team working on ecommerce marketing"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Right 3 small images */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: "180px 180px", // Increased height slightly
                gridTemplateColumns: "1fr 1fr",
                gap: "14px", // Increased gap slightly
                minWidth: "0", // Added: Prevent overflow
              }}
            >
              {/* Top wide image - Delivery and logistics */}
              <div
                style={{
                  gridColumn: "1 / 3",
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/5052879/pexels-photo-5052879.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Delivery and logistics"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Bottom left - Shop online concept */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/394372/pexels-photo-394372.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Shop online concept"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Bottom right - Customer working from home */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Customer working from home"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
