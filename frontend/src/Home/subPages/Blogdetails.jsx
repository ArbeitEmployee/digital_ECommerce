// subPages/Blogdetails.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

const recentPosts = [
  {
    id: 1,
    slug: "content-marketing-trends",
    title: "9 Content Marketing Trends and Ideas to Increase Traffic",
    date: "November 22, 2025",
  },
  {
    id: 2,
    slug: "write-blog-post-people-love",
    title: "How to Write a Blog Post People Will Love in 5 Steps",
    date: "December 1, 2025",
  },
];

const categories = [
  "Marketing",
  "Promotions",
  "eCommerce",
  "UX & Design",
  "Tech News",
];

const BlogDetails = () => {
  const { slug } = useParams();

  const current = recentPosts.find((p) => p.slug === slug) || recentPosts[0];

  return (
    <section
      style={{
        backgroundColor: "#f5f7fb",
        padding: "24px 0 40px",
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
            textAlign: "center",
            marginBottom: "18px",
            fontSize: "12px",
            color: "#6b7280",
          }}
        >
          <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }}>
            Home
          </Link>{" "}
          /{" "}
          <Link to="/blog" style={{ color: "#6b7280", textDecoration: "none" }}>
            Promotions
          </Link>{" "}
          / {current.title}
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginTop: "6px",
            }}
          >
            {current.title}
          </h1>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 0.9fr)",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          {/* Main content */}
          <article
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              padding: "18px 18px 24px",
            }}
          >
            <div style={{ marginBottom: "14px" }}>
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1000&q=80"
                alt="Blog cover"
                style={{
                  width: "100%",
                  maxHeight: "420px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
            </div>

            {/* The rest is your original dummy content */}
            <p
              style={{
                fontSize: "13px",
                color: "#4b5563",
                lineHeight: 1.8,
                marginBottom: "12px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec lorem at ipsum imperdiet sollicitudin. Aliquam erat volutpat.
              Sed sit amet augue at arcu posuere volutpat sit amet vel nibh.
            </p>

            <ul
              style={{
                paddingLeft: "20px",
                fontSize: "13px",
                color: "#4b5563",
                marginBottom: "16px",
              }}
            >
              <li>Unbelievable dollar general application</li>
              <li>The science article world</li>
              <li>What everyone is saying about</li>
              <li>An expert interview series</li>
              <li>Cool tech gadgets by the numbers</li>
            </ul>

            <h2
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Why do people think wholesale accessories are a good idea?
            </h2>
            <ol
              style={{
                paddingLeft: "20px",
                fontSize: "13px",
                color: "#4b5563",
                marginBottom: "14px",
              }}
            >
              <li>Why science fiction ideas are afraid</li>
              <li>Why our world would end</li>
            </ol>

            <p
              style={{
                fontSize: "13px",
                color: "#4b5563",
                lineHeight: 1.8,
                marginBottom: "14px",
              }}
            >
              How cool tech gadgets can help predict the future. The 10 best
              passport application twitter feeds to follow. 9 ideas for business
              adventures. The unconventional guide to wholesale accessories.
            </p>

            <p
              style={{
                fontSize: "13px",
                color: "#4b5563",
                lineHeight: 1.8,
                marginBottom: "18px",
              }}
            >
              Aperiam omnis amet excepturi ullam labore. Voluptatem hic natus
              maxime dolorem vel totam ex numquam odio laborum quasi.
            </p>

            <h2
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Id ab assumenda at nisi. Sit ut eaque at cumque quidem fuga et.
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              Id ab earum voluptate vel aliquid. Et ea consequatur minima aut
              beatae minus velit alias cupiditate aliquid quidem deleniti.
            </p>
          </article>

          {/* Sidebar (recent posts + categories, same design) */}
          <aside>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                padding: "14px 14px 16px",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "10px",
                }}
              >
                Recent Posts
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "12px",
                  color: "#4b5563",
                }}
              >
                {recentPosts.map((post) => (
                  <li
                    key={post.id}
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                      paddingBottom: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      style={{
                        cursor: "pointer",
                        color: "#111827",
                        fontWeight: 500,
                        marginBottom: "2px",
                        textDecoration: "none",
                      }}
                    >
                      {post.title}
                    </Link>
                    <div style={{ color: "#9ca3af" }}>{post.date}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 10px 24px rgba(15,23,42,0.06)",
                padding: "14px 14px 16px",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: "10px",
                }}
              >
                Categories
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: "12px",
                  color: "#4b5563",
                }}
              >
                {categories.map((cat) => (
                  <li
                    key={cat}
                    style={{
                      padding: "4px 0",
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
