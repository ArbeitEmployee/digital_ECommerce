import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "Global search engine optimization",
    answer:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unknown printer took a galley of type and scrambled it to make a type specimen book, it has survived not only five centuries but also the leap into electronic typesetting.",
  },
  {
    id: 2,
    question: "Complete Social Media Integration",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut velit tellus. Suspendisse efficitur, odio a congue malesuada, metus risus viverra mi, sed hendrerit nulla elit non nisi.",
  },
  {
    id: 3,
    question: "End‑to‑end encryption for messages",
    answer:
      "Curabitur non magna eget urna malesuada faucibus. Nulla facilisi. Cras pellentesque, odio ac ullamcorper vehicula, quam elit lacinia orci, non aliquam lectus lectus vel ligula.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(faqItems[0].id);

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

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
        {/* Breadcrumb - with right padding for asymmetric effect */}
        <div
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "18px",
            paddingRight: "30px", // Added for asymmetric effect
          }}
        >
          Home / FAQs
        </div>

        {/* Top section - with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px", marginBottom: "26px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1.1fr)",
              gap: "40px", // Increased gap
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "10px",
                }}
              >
                Frequently Asked Question
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                  padding: "18px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
                  alt="FAQ illustration"
                  style={{
                    width: "100%",
                    height: "240px", // Increased height
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>

            {/* Right short FAQs */}
            <div
              style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.7 }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#111827",
                  marginTop: 0,
                }}
              >
                How can you help?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#111827",
                  marginTop: "10px",
                }}
              >
                What is a return policy?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>

              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#111827",
                  marginTop: "10px",
                }}
              >
                What payment methods do you accept?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>

              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#111827",
                  marginTop: "10px",
                }}
              >
                Do you sell gift cards?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
        </div>

        {/* Middle cards - with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px", marginBottom: "32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "20px", // Increased gap
            }}
          >
            {[
              { title: "Submit a task", icon: "☑" },
              { title: "Send message", icon: "💬" },
              { title: "Trusted experience", icon: "👤" },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 10px 24px rgba(15,23,42,0.05)",
                  padding: "22px 18px",
                  textAlign: "center",
                  fontSize: "13px",
                  color: "#4b5563",
                  minWidth: "0", // Added: Prevent overflow
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    marginBottom: "10px",
                  }}
                >
                  {card.icon}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "6px",
                  }}
                >
                  {card.title}
                </div>
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion title - with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px" }}>
          <div
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "#9ca3af",
              marginBottom: "6px",
            }}
          >
            Pick one of 3 FAQ styles
          </div>
          <h2
            style={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Display FAQ accordions
          </h2>
        </div>

        {/* Accordion - with right padding for asymmetric effect */}
        <div style={{ paddingRight: "30px" }}>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              overflow: "hidden",
            }}
          >
            {faqItems.map((item, index) => {
              const isOpen = item.id === openId;
              return (
                <div
                  key={item.id}
                  style={{
                    borderTop: index === 0 ? "none" : "1px solid #e5e7eb",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "12px 16px",
                      border: "none",
                      backgroundColor: isOpen ? "#eef2ff" : "#ffffff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#6b7280",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.15s ease",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "12px 16px 14px",
                        fontSize: "13px",
                        color: "#4b5563",
                        lineHeight: 1.7,
                        backgroundColor: "#f9fafb",
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
