import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import axios from "axios";

const Layout = () => {
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/products", {
      image: image,
      name: productName,
      price: productPrice,
    });
    setImage("");
    setProductName("");
    setProductPrice("");
  };

  return (
    <>
      <Outlet />
      <div className="container">
        <form onSubmit={handleFormSubmit} className="product-form">
          <label className="form-label">
            Изображение товара:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="form-input"
            />
          </label>
          <label>
            Название товара:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="form-input"
            />
          </label>
          <label>
            Цена товара:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button">
            Добавить товар
          </button>
        </form>
      </div>
      <footer>Это футер</footer>
    </>
  );
};

export default Layout;
