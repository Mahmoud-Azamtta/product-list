import "./app.css";
import smartphone from "./assets/products/smartphone.jpg";
import laptop from "./assets/products/laptop.jpg";
import tshirt from "./assets/products/tshirt.jpg";
import blender from "./assets/products/blender.jpg";
import novel from "./assets/products/novel.jpg";
import toy from "./assets/products/toy.jpg";
import football from "./assets/products/football.jpg";
import sofa from "./assets/products/sofa.jpg";
import { useEffect, useState } from "react";
import { CategoriesList } from "./components/categories/CategoriesList";
import { ProductsList } from "./components/products/ProductsList";

const App = () => {
  const categories = [
    "Electronics",
    "Clothing",
    "Home Appliances",
    "Books",
    "Toys",
    "Sports Equipment",
    "Furniture",
  ];
  const products = [
    {
      name: "Smartphone",
      category: "Electronics",
      price: 699,
      img: smartphone,
    },
    {
      name: "Laptop",
      category: "Electronics",
      price: 1200,
      img: laptop,
    },
    {
      name: "T-Shirt",
      category: "Clothing",
      price: 25,
      img: tshirt,
    },
    {
      name: "Blender",
      category: "Home Appliances",
      price: 60,
      img: blender,
    },
    {
      name: "Mystery Novel",
      category: "Books",
      price: 15,
      img: novel,
    },
    {
      name: "Action Figure",
      category: "Toys",
      price: 30,
      img: toy,
    },
    {
      name: "Football",
      category: "Sports Equipment",
      price: 40,
      img: football,
    },
    {
      name: "Sofa",
      category: "Furniture",
      price: 500,
      img: sofa,
    },
  ];
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <>
      <header>
        <h1>
          Moe Shop <span>🛒</span>
        </h1>
      </header>
      <main>
        <div className="container">
          <section>
            <CategoriesList
              categories={categories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </section>
          <section>
            <ProductsList
              allProducts={products}
              selectedCategories={selectedCategories}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
