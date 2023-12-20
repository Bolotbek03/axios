import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    productImage: "",
    productName: "",
    productPrice: 0,
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
      setProduct(res.data);
      setEditedProduct(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/products/${id}`, editedProduct);

    setProduct(editedProduct);
  };

  return (
    <div>
      {product ? (
        <>
          <img src={product.productImage} alt="" />
          <h2>{product.productName}</h2>
          <h3>{product.productPrice}</h3>

          <form onSubmit={handleFormSubmit}>
            <label>
              Изображение товара:
              <input
                type="text"
                name="productImage"
                value={editedProduct.productImage}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Название товара:
              <input
                type="text"
                name="productName"
                value={editedProduct.productName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Цена товара:
              <input
                type="number"
                name="productPrice"
                value={editedProduct.productPrice}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Сохранить изменения</button>
          </form>
        </>
      ) : null}
    </div>
  );
};

export default UserDetails;
