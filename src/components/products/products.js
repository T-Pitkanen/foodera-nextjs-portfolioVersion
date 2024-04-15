"use client";

import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Product from "./product/product";

const Products = ({ recommend }) => {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommeded] = useState(recommend);

  const showAllProducts = () => {
    return products.length !== 0
      ? products.map((product, index) => (
          <div key={index} className={styles.product}>
            <Product key={index} product={product}></Product>
          </div>
        ))
      : null;
  };

  const showRecommendedProducts = () => {
    return products.length !== 0
      ? products
          .filter((p) => p.recommended)
          .map((product, index) => (
            <div key={index} className={styles.product}>
              <Product product={product}></Product>
            </div>
          ))
      : null;
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("api/products");
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className={styles.products} id="selected">
      <div className={styles.explore}>
        <h2>Explore Our Foods</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Far far away, behind the wovrd mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </div>
      <div className={styles.list}>
        {recommended ? showRecommendedProducts() : showAllProducts()}
      </div>
    </div>
  );
};

export default Products;
