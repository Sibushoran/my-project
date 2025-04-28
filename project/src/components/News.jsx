import React, { useState } from "react";
import { FaHeart, FaRegCommentDots, FaRegUser } from "react-icons/fa";
import "./News.css";

const News = () => {
  const postsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      image: "/src/assets/blog.jpg",
      title: "5 Innovative Ways To Increasing Your Home’s Value This Year",
      date: "22 October 2024 in Phone",
      author: "John Doe",
      likes: 0,
      comments: 0,
      description:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et ultrices neque ornare egestas euismod magna…",
    },
    {
      id: 2,
      image: "/src/assets/blog-2.jpg",
      title: "Tech That Takes Yours Outdoor Spaces To The Next-level Gadget",
      date: "22 October 2024 in Phone",
      author: "John Doe",
      likes: 0,
      comments: 0,
      description:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et ultrices neque ornare egestas euismod magna…",
    },
    {
      id: 3,
      image: "/src/assets/blog-3.jpg",
      title: "Help Your Company Shift to a Digital Culture",
      date: "22 October 2024 in Phone",
      author: "John Doe",
      likes: 0,
      comments: 0,
      description:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et ultrices neque ornare egestas euismod magna…",
    },
    {
      id: 4,
      image: "/src/assets/blog-4.jpg",
      title: "Interactive Push Notification in Home Center",
      date: "22 October 2024 in Phone",
      author: "John Doe",
      likes: 0,
      comments: 0,
      description:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et ultrices neque ornare egestas euismod magna…",
    },
    {
      id: 5,
      image: "/src/assets/blog-5.jpg",
      title: "Google Analytics Checklist : Is Your Website Data Accurate?",
      date: "22 October 2024 in Phone",
      author: "John Doe",
      likes: 0,
      comments: 0,
      description:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et ultrices neque ornare egestas euismod magna…",
    },
    {
      id: 6,
      image: "/src/assets/blog-6.jpg",
      title: "Personal Debt or Company Debt? We Explore Your Options",
      date: "22 October 2024 in Phone",
      author: "John Doe",
      likes: 0,
      comments: 0,
      description:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Et ultrices neque ornare egestas euismod magna…",
    },
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="news-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span>
        <span className="separator">/</span>
        <span>Blog</span>
      </div>

      <div className="news-layout">
        {/* Blog Content */}
        <div className="news-box">
          {currentPosts.map((post) => (
            <div className="news-main" key={post.id}>
              <div className="news-image-wrapper">
                <img src={post.image} alt="Blog Post" className="news-image" />
                <div className="news-date">{post.date}</div>
              </div>
              <div className="news-content">
                <h2 className="news-title">{post.title}</h2>
                <div className="news-meta">
                  <span><FaRegUser /> {post.author}</span>
                  <span><FaHeart /> {post.likes} Like Post</span>
                  <span><FaRegCommentDots /> {post.comments} Comment</span>
                </div>
                <p className="news-description">{post.description}</p>
                <div className="news-readmore">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          ))}
          <ul className="pagination">
    {Array.from({ length: totalPages }, (_, i) => (
      <li key={i}>
        <button
          onClick={() => setCurrentPage(i + 1)}
          className={`pagination-button ${currentPage === i + 1 ? "active" : ""}`}
        >
          {i + 1}
        </button>
      </li>
    ))}
  </ul>
        </div>

      

        {/* Sidebar */}
        <aside className="news-sidebar">
          <div className="sidebar-section">
            <h3>Search Posts</h3>
            <div className="sidebar-search">
              <input type="text" placeholder="Search your keyword..." />
              <span className="sidebar-search-icon">🔍</span>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing glelit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="sidebar-section">
            <h3>Blog Categories</h3>
            <ul>
              <li>Accessories (3)</li>
              <li>Lifestyle (3)</li>
              <li>Phone (2)</li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Recent Posts</h3>
            <div className="sidebar-posts">
              {[1, 2, 3].map((_, i) => (
                <div className="sidebar-post-item" key={i}>
                  <div className="posts-img">
                    <img src={`/src/assets/blog-${i + 1}.jpg`} alt="Post" />
                  </div>
                  <div className="posts-content">
                    <p className="post-date">22 October 2024</p>
                    <h4 className="post-title">Sample Post Title</h4>
                    <span className="post-by">by</span>
                    <p className="post-author">John Doe</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sidebar-comments">
            <h3>Recent Comments</h3>
            <div className="sidebar-comment-item">
              <p className="comment-text">"Great insights! Learned a lot."</p>
              <p className="comment-author">– John Doe</p>
            </div>
            <div className="sidebar-comment-item">
              <p className="comment-text">"Thanks for sharing this article!"</p>
              <p className="comment-author">– Jane Smith</p>
            </div>
            <div className="sidebar-comment-item">
              <p className="comment-text">"Very informative post. Keep it up!"</p>
              <p className="comment-author">– Alex Lee</p>
            </div>
          </div>

          <div className="sidebar-section sidebar-tags">
            <h3>Tags</h3>
            <div className="tags-container">
  {["Tech", "Home", "Outdoor", "Gadgets", "Finance", "DIY", "Culture", "Design", "Tips"].map(
    (tag, idx) => (
      <button className="tag-button" key={idx}>
        {tag}
      </button>
    )
  )}
</div>

          </div>
        </aside>
      </div>
    </div>
  );
};

export default News;
