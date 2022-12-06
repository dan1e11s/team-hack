import React, { useEffect } from "react";
import AddProduct from "../../components/products/AddProduct/AddProduct";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProductPage = () => {
  const { getCategories, categories } = useProduct();
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      style={{
        maxWidth: "1150px",
        height: "100vh",
        margin: "70px auto 0",
        textAlign: "center",
        marginTop: "80px",
      }}>
      <h3 style={{ fontSize: "25px", marginBottom: "40px" }}>
        Добавление продукта
      </h3>
      <AddProduct categories={categories} />
    </div>
  );
};

export default AddProductPage;
