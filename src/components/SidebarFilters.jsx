// src/components/SidebarFilters.js
import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const SidebarFilters = ({ onFilterChange }) => {
  const { currency, toggleCurrency, filters, setFilters } = useGlobalContext();

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <button onClick={toggleCurrency}>
        {currency === "USD" ? "Switch to EUR" : "Switch to USD"}
      </button>
      <input
        type="number"
        name="price"
        placeholder="Max Price"
        onChange={handleFilterChange}
      />
      <div className="selected-filters">
        {filters.category && (
          <div className="filter-tag">
            {filters.category}
            <button onClick={() => setFilters({ ...filters, category: "" })}>
              ✖
            </button>
          </div>
        )}
        {filters.price && (
          <div className="filter-tag">
            Max: {filters.price}
            <button onClick={() => setFilters({ ...filters, price: "" })}>
              ✖
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFilters;