// src/context/GlobalContext.js
import React, { createContext, useState, useContext , useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filters, setFilters] = useState({
    price: "",
    color: "",
    brand: "",
  });

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "EUR" : "USD"));
  };

  const [products, setProducts] = useState([]); // Initialize products state

  const fetchProducts = () => {
    const fetchedProducts = [
      { id: 1, name: "Product 1", price: { USD: 10, EUR: 8 }, category: "Electronics", image: "placeholder.jpg" },
      { id: 2, name: "Product 2", price: { USD: 20, EUR: 16 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 3, name: "Product 3", price: { USD: 30, EUR: 25 }, category: "Electronics", image: "placeholder.jpg" },
      { id: 4, name: "Product 4", price: { USD: 40, EUR: 36 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 5, name: "Product 5", price: { USD: 50, EUR: 46 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 6, name: "Product 6", price: { USD: 60, EUR: 56 }, category: "Electronics", image: "placeholder.jpg" },
      { id: 7, name: "Product 7", price: { USD: 70, EUR: 66 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 8, name: "Product 8", price: { USD: 80, EUR: 76 }, category: "Home & Garden", image: "placeholder.jpg" },
    ];
    setProducts(fetchedProducts); // Set products in context
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the context is initialized
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currency,
        toggleCurrency,
        selectedCategory,
        setSelectedCategory,
        filters,
        setFilters,
        products,
        fetchProducts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};