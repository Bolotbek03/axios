import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [products, setProducts] = useState([]);
  const API = "http://localhost:8000/products";

  useEffect(() => {
    axios.get(API).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);

    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1>Products Page</h1>
      {products.map((elem) => (
        <div key={elem.id} className="product">
          <Link to={`/products/${elem.id}`}>
            <span>{elem.productName}</span>
          </Link>
          <button onClick={() => handleDelete(elem.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
