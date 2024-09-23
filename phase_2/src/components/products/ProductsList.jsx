import { useEffect, useState } from "react";
import { Product } from "./Product";
import "./products-style.css";

export const ProductsList = ({ allProducts, selectedCategories }) => {
  const [products, setProducts] = useState([]);

  const filterProducts = () => {
    if (selectedCategories.length === 0) {
      setProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter(
      (product) =>
        selectedCategories.indexOf(product.category.toLowerCase()) > -1,
    );

    setProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedCategories.length]);

  return (
    <>
      <h2>Products</h2>
      <div id="products">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Product key={product + index} data={product} />
          ))
        ) : (
          <p className="empty">No products found</p>
        )}
      </div>
    </>
  );
};
