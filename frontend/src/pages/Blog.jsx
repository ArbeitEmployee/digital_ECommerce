// pages/Blog.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    slug: "content-marketing-trends",
    title: "9 Content Marketing Trends and Ideas to Increase Traffic",
    date: "November 22, 2025",
    image:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    slug: "write-blog-post-people-love",
    title: "How to Write a Blog Post People Will Love in 5 Steps",
    date: "December 1, 2025",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
];

const Blog = () => {
  const navigate = useNavigate();

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
        <div
          style={{
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "10px",
          }}
        >
          Home / Blog
        </div>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          Latest Articles
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: "100%",
                    height: "170px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ padding: "12px 14px 16px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#9ca3af",
                    marginBottom: "4px",
                  }}
                >
                  {post.date}
                </div>
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "8px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  {post.title}
                </h2>
                <button
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  style={{
                    marginTop: "8px",
                    border: "none",
                    background: "none",
                    padding: 0,
                    fontSize: "12px",
                    color: "#2563eb",
                    cursor: "pointer",
                  }}
                >
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
