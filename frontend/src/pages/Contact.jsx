import React from "react";

const Contact = () => {
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
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        {/* Page title + breadcrumb */}
        <div
          style={{
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
            color: "#6b7280",
          }}
        >
          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
              margin: 0,
            }}
          >
            Contact Us
          </h1>
        </div>

        {/* Map + form */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            padding: "18px 18px 22px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
            gap: "22px",
            marginBottom: "26px",
          }}
        >
          {/* Map */}
          <div>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.17831013979!2d-0.13386617611423742!3d51.5032972422259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce8f41748b%3A0xdeb6a3d14de3cd59!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1701953070000!5m2!1sen!2suk"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form */}
          <div>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Get In Touch With Us
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#6b7280",
                marginBottom: "16px",
              }}
            >
              If you wish to directly reach us, please fill out the form below.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ fontSize: "13px", color: "#4b5563" }}
            >
              <label style={{ display: "block", marginBottom: "6px" }}>
                Your name
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "38px",
                  padding: "0 10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  marginBottom: "12px",
                  fontSize: "13px",
                }}
              />

              <label style={{ display: "block", marginBottom: "6px" }}>
                Your email
              </label>
              <input
                type="email"
                style={{
                  width: "100%",
                  height: "38px",
                  padding: "0 10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  marginBottom: "12px",
                  fontSize: "13px",
                }}
              />

              <label style={{ display: "block", marginBottom: "6px" }}>
                Your message (optional)
              </label>
              <textarea
                rows={5}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  marginBottom: "14px",
                  fontSize: "13px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "8px 28px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom contact info cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                border: "1px solid #2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563eb",
                fontSize: "18px",
              }}
            >
              📍
            </div>
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                Address
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                60 29th San Francisco, 507-Union Trade Center
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                border: "1px solid #2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563eb",
                fontSize: "18px",
              }}
            >
              📞
            </div>
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                Call us
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                (+01) 987-654-3210
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "999px",
                border: "1px solid #2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563eb",
                fontSize: "18px",
              }}
            >
              ⏰
            </div>
            <div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                Open time
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                10:00AM – 6:00PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
