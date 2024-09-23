import list from "../../assets/list.svg";
import { useState } from "react";
import "./categories-style.css";

export const CategoriesList = ({
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [dropped, setDropped] = useState(false);

  const handleCategoryClick = (category) => {
    category = category.toLowerCase();
    if (selectedCategories.indexOf(category) > -1) {
      setSelectedCategories(
        selectedCategories.filter((categ) => categ != category),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <>
      <div className="section-header">
        <h2>Categories</h2>
        <button onClick={() => setDropped(!dropped)}>
          <img src={list} alt="Dropdown list button" />
        </button>
      </div>
      <div id="categories" className={dropped ? "droped" : ""}>
        <div className="buttons-wrapper">
          <button
            className={`categ-btn ${selectedCategories.length === 0 ? "selected" : ""}`}
            type="button"
            onClick={() => setSelectedCategories([])}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`categ-btn ${selectedCategories.indexOf(category.toLowerCase()) > -1 ? "selected" : ""}`}
              type="button"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
