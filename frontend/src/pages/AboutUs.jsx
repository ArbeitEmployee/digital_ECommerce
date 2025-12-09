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
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {/* Breadcrumb + title */}
        <div
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "8px",
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
          }}
        >
          About Our Store
        </h1>

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
          below for those interested. Sections 1.10.32 and 1.10.33 from “de
          Finibus Bonorum et Malorum” by Cicero are also reproduced in their
          exact original form, accompanied by English versions.
        </div>

        {/* Image grid section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)",
            gap: "18px",
          }}
        >
          {/* Large left image */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1612198527510-1d76e8704612?auto=format&fit=crop&w=1000&q=80"
              alt="Team working on ecommerce marketing"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "360px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right 3 small images */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
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
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=80"
                alt="Delivery and logistics"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "170px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1596909400050-9f4a5f9a6c9f?auto=format&fit=crop&w=600&q=80"
                alt="Shop online concept"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80"
                alt="Customer working from home"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
