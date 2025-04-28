import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "./Shop.css";

const Shop = () => {
  const { addToCart, addToWishlist } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [statusFilters, setStatusFilters] = useState(["All"]);
  const [priceRange, setPriceRange] = useState([40, 1500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [promoBanners, setPromoBanners] = useState([]);
  const [promo50Off, setPromo50Off] = useState({});
  const [categories, setCategories] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [allBrands, setAllBrands] = useState([]);
  const [allRatings, setAllRatings] = useState([]);
  const [allColors, setAllColors] = useState([]); // Assuming you fetch this data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/products");
        const data = res.data;
        const allProducts = data.products || [];

        setProducts(allProducts);
        setFilteredProducts(allProducts);
        setPromoBanners(data.promoBanners || []);
        setPromo50Off(data.promo50Off || {});
        setCategories(data.categories || []);
        setTrendingProducts(data.trendingProducts || []);
        setAllBrands(data.brands || []);
        setAllRatings(data.ratings || [5, 4, 3, 2, 1]);
        setAllColors(data.colors || []); // Assuming colors are fetched here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Pagination
  const productsPerPage = 8;
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter Handlers
  const handleStatusChange = (e, status) => {
    const isChecked = e.target.checked;
    if (status === "All") {
      setStatusFilters(["All"]);
    } else {
      let updated = isChecked
        ? [...statusFilters.filter((s) => s !== "All"), status]
        : statusFilters.filter((s) => s !== status);
      if (updated.length === 0) updated = ["All"];
      setStatusFilters(updated);
    }
  };

  const handleBrandChange = (e, brand) => {
    const isChecked = e.target.checked;
    setSelectedBrands((prev) =>
      isChecked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const handleRatingChange = (e, rating) => {
    const isChecked = e.target.checked;
    setSelectedRatings((prev) =>
      isChecked ? [...prev, rating] : prev.filter((r) => r !== rating)
    );
  };

  const handleColorChange = (e, color) => {
    const isChecked = e.target.checked;
    setSelectedColors((prev) =>
      isChecked ? [...prev, color] : prev.filter((c) => c !== color)
    );
  };

  const applyFilters = () => {
    let filtered = [...products];

    // Price Filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Status Filter
    if (!statusFilters.includes("All")) {
      filtered = filtered.filter((p) => statusFilters.includes(p.tag));
    }

    // Brand Filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand));
    }

    // Rating Filter
    if (selectedRatings.length > 0) {
      filtered = filtered.filter((p) => selectedRatings.includes(p.rating));
    }

    // Color Filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) => selectedColors.includes(p.color));
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to page 1 when filters are applied
  };

  return (
    <div className="shop-page">
      {/* Banner */}
      <div className="shop-banner">
        <img
          src="/src/assets/contact-1.jpeg"
          alt="Shop Banner"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>Shop</h1>
          <p>Home &gt; Shop</p>
        </div>
      </div>

      <div className="shop-content container">
        {/* Filter Panel */}
        <aside className="filter-panel">
          <h3>Product Status</h3>
          {["All", "Featured", "On Sale"].map((status, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                checked={statusFilters.includes(status)}
                onChange={(e) => handleStatusChange(e, status)}
              />{" "}
              {status}
            </label>
          ))}

          <hr />

          <h3>Filter by Price</h3>
          <input
            type="range"
            min="40"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([40, Number(e.target.value)])}
          />
          <p>Price: ${priceRange[0]} — ${priceRange[1]}</p>
          <button className="filter-btn" onClick={applyFilters}>
            Apply Filters
          </button>

          <hr />

          <h3>Product Brands</h3>
          {allBrands.map((brand, i) => (
            <label key={i}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => handleBrandChange(e, brand)}
              />{" "}
              {brand}
            </label>
          ))}

          <hr />

          <h3>Filter by Rating</h3>
          {allRatings.map((rating) => (
            <label key={rating} className="rating-option">
              <input
                type="checkbox"
                checked={selectedRatings.includes(rating)}
                onChange={(e) => handleRatingChange(e, rating)}
              />
              <span className="star-icon">★</span> {rating}
            </label>
          ))}

          <hr />

          <h3>Filter by Color</h3>
          {allColors.map((color, idx) => (
            <label key={idx}>
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={(e) => handleColorChange(e, color)}
              />{" "}
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: color,
                  borderRadius: "50%",
                }}
              />
            </label>
          ))}
        </aside>

        {/* Main Shop Area */}
        <main className="shop-main">
          <div className="shop-toolbar">
            <div className="sort-dropdown">
              <label>Sort By:</label>
              <select>
                <option>Default sorting</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <section className="product-grid">
            {currentProducts.length === 0 ? (
              <p>No products found matching your filters.</p>
            ) : (
              currentProducts.map((product) => (
                <div key={product._id} className="product-card">
                  {product.tag && (
                    <span
                      className={`product-tag ${product.tag.toLowerCase()}`}
                    >
                      {product.tag}
                    </span>
                  )}
                  <img
                    src={product.img ? `../admin-client/server/${product.img}` : product.image}
                    alt={product.title || product.name}
                  />
                  <p className="category">{product.category}</p>
                  <h4>{product.title || product.name}</h4>
                  <div className="price-section">
                    <p className="price">${product.price}</p>
                    {product.original && (
                      <span className="old-price">${product.original}</span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="card-actions">
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <button onClick={() => addToWishlist(product)}>♥</button>
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => changePage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
