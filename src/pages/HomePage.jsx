// src/pages/HomePage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import CategorySection from "../components/CategorySection";
import SidebarFilters from "../components/SidebarFilters";
import "../styles/HomePage.css";
import HeroSection from "../components/HeroSection";

function HomePage({ addToWishlist }) {
  // const [products, setProducts] = useState([]);
  const { currency, selectedCategory, setSelectedCategory ,filters, products } = useGlobalContext();
  // const location = useLocation();

 
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!filters.price || product.price[currency] <= Number.parseFloat(filters.price))
    );
  });

  return (
    <>
    <HeroSection/>

    <div className="home-page">
      {/* <div className="hero-section">
        <h1>Welcome to our Store</h1>
      </div> */}
      <CategorySection categories={["Tracksuit" , "Shoes"]} onCategorySelect={handleCategorySelect} />

      <div className="content">
        <SidebarFilters />
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price[currency]} {currency}</p>
              <Link to={`/product/${product.id}`} className="view-product">View Product</Link>
              <div className="button-group">
                <button className="buy-button">Buy on ACBuy</button>
                <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;