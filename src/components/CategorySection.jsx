// src/components/CategorySection.js
import React from "react";

const CategorySection = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-section">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <button key={category} onClick={() => onCategorySelect(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;