import React from "react";

const testimonials = [
  {
    id: 1,
    text: "There are many variations of passages of the available majority have suffered don’t look even slightly believable.",
    name: "Michel Richard",
    role: "Web Designer",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    text: "However, since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Augusta Wind",
    role: "Web Developer",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    text: "Lorem dummy passages recently with desktop publishing software including versions galley of type and more.",
    name: "Jacob Geockno",
    role: "Manager",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
];

const ClientSay = () => {
  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        padding: "60px 0 80px 0",
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
        {/* Heading */}
        <h2
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "30px",
          }}
        >
          What Our Clients Say
        </h2>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "28px 28px 24px",
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                minHeight: "190px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#4b5563",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                }}
              >
                {t.text}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "999px",
                    objectFit: "cover",
                    marginRight: "14px",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* small dots indicator */}
        <div
          style={{
            marginTop: "26px",
            display: "flex",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "18px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: "#2563eb",
            }}
          />
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: "#d1d5db",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
