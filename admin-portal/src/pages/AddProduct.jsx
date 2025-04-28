import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    brand: "",
    rating: "",
    category: "",
    tag: "",
    colors: "",
    image: "",
    original: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      ...form,
      price: parseFloat(form.price),
      rating: parseInt(form.rating),
      colors: form.colors.split(",").map((c) => c.trim()),
      original: form.original ? parseFloat(form.original) : undefined,
    };

    try {
      await axios.post("http://localhost:5000/api/products", product);
      alert("Product added!");
      setForm({
        title: "",
        price: "",
        brand: "",
        rating: "",
        category: "",
        tag: "",
        colors: "",
        image: "",
        original: "",
      });
    } catch (err) {
      alert("Failed to add product");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {Object.entries(form).map(([key, value]) => (
          <input
            key={key}
            name={key}
            value={value}
            onChange={handleChange}
            placeholder={key}
            required={key !== "original"}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
