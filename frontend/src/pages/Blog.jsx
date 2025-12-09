import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const posts = [
  {
    id: 1,
    title: "How to Write a Blog Post Your Audience Loves",
    date: "February 25, 2024",
    author: "by Editor",
    excerpt:
      "Why the world would end without travel coupons and how to create magnetic headlines.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", // laptop + coffee desk
    linkText: "READ MORE",
  },
  {
    id: 2,
    title: "9 Content Marketing Trends and Ideas for 2024",
    date: "February 24, 2024",
    author: "by Editor",
    excerpt:
      "Why do people think wholesale accessories are a good idea and how to stand out.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80", // clothing rack
    linkText: "READ MORE",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Marketing for Startups",
    date: "February 23, 2024",
    author: "by Editor",
    excerpt:
      "Many things about electronic devices your kids don’t want you to know in digital campaigns.",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80", // team meeting
    linkText: "READ MORE",
  },
  {
    id: 4,
    title: "50 Best Sales Questions to Ask Your Customers",
    date: "February 22, 2024",
    author: "by Editor",
    excerpt:
      "The unconventional guide to software sales applications and discovery calls.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80", // kids classroom
    linkText: "READ MORE",
  },
  {
    id: 5,
    title: "How to Write a Blog Post Your Audience Loves",
    date: "February 25, 2024",
    author: "by Editor",
    excerpt:
      "Why the world would end without travel coupons and how to create magnetic headlines.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", // laptop + coffee desk
    linkText: "READ MORE",
  },
];

const logos = [
  "https://dummyimage.com/140x70/ffffff/cccccc&text=Organic",
  "https://dummyimage.com/140x70/ffffff/cccccc&text=Hashtag",
  "https://dummyimage.com/140x70/ffffff/cccccc&text=Natural",
  "https://dummyimage.com/140x70/ffffff/cccccc&text=Vector",
  "https://dummyimage.com/140x70/ffffff/cccccc&text=Organic",
];

const Blog = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCards < posts.length;

  const handlePrev = () => {
    if (canPrev) setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setStartIndex((prev) => prev + 1);
  };

  const visiblePosts = posts.slice(startIndex, startIndex + visibleCards);

  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        padding: "50px 0 70px 0",
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
        {/* Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            From The Blog
          </h2>
        </div>

        {/* Blog slider wrapper */}
        <div style={{ position: "relative", marginBottom: "50px" }}>
          {/* Left arrow */}
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            style={{
              position: "absolute",
              left: "-22px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "34px",
              height: "34px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: canPrev ? "#2563eb" : "#e5e7eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canPrev ? "pointer" : "default",
              zIndex: 2,
            }}
          >
            <FaChevronLeft size={13} />
          </button>

          {/* Right arrow */}
          <button
            onClick={handleNext}
            disabled={!canNext}
            style={{
              position: "absolute",
              right: "-22px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "34px",
              height: "34px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: canNext ? "#2563eb" : "#e5e7eb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canNext ? "pointer" : "default",
              zIndex: 2,
            }}
          >
            <FaChevronRight size={13} />
          </button>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))`,
              gap: "18px",
            }}
          >
            {visiblePosts.map((post) => (
              <article
                key={post.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 12px 28px rgba(15,23,42,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "320px",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "170px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "16px 18px 18px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    {post.date} • {post.author}
                  </div>

                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#111827",
                      lineHeight: 1.4,
                      marginBottom: "8px",
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      lineHeight: 1.6,
                      marginBottom: "14px",
                      flexGrow: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <button
                    style={{
                      padding: 0,
                      border: "none",
                      background: "none",
                      color: "#2563eb",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      cursor: "pointer",
                    }}
                  >
                    {post.linkText}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Logo strip */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "24px 30px",
            boxShadow: "0 10px 24px rgba(15,23,42,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
            }}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  height: "60px",
                  objectFit: "contain",
                  opacity: 0.9,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
