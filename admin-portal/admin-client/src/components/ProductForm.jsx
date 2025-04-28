import { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    originalPrice: "",
    tag: "",
    colors: "",
    rating: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("brand", formData.brand);
    data.append("category", formData.category);
    data.append("price", parseFloat(formData.price) || 0);
    data.append("originalPrice", parseFloat(formData.originalPrice) || 0);
    data.append("tag", formData.tag);
    data.append("rating", parseFloat(formData.rating) || 0);
    data.append("colors", formData.colors);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      await axios.post("http://localhost:5000/api/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("✅ Product added!");
    } catch (err) {
      console.error("❌ Failed to add product:", err);
      alert("Failed to add product. Check console for errors.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,rgb(53, 52, 53),rgb(57, 57, 57))",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "3rem",
          width: "100%",
          maxWidth: "800px", // wide form but not too wide
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#6a1b9a",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}
        >
          Add New Product
        </h2>

        {[
          { name: "name", placeholder: "Product Name" },
          { name: "brand", placeholder: "Brand" },
          { name: "category", placeholder: "Category" },
          { name: "price", placeholder: "Price" },
          { name: "originalPrice", placeholder: "Original Price" },
          { name: "tag", placeholder: "Tag" },
          { name: "colors", placeholder: "Colors (comma-separated)" },
          { name: "rating", placeholder: "Rating" },
        ].map(({ name, placeholder }) => (
          <input
            key={name}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            style={{
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
              backgroundColor: "#f9f9f9",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6a1b9a")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        ))}

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        />

        {preview && (
          <div
            style={{
              marginTop: "1rem",
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #ddd",
            }}
          >
            <img
              src={preview}
              alt="Preview"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "1rem",
            backgroundColor: "#6a1b9a",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#007bff")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#6a1b9a")}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
