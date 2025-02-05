// src/pages/ProductPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import CategorySection from "../components/CategorySection";
import SidebarFilters from "../components/SidebarFilters";
import "../styles/ProductPage.css";
// Testing commits

function ProductPage({ addToWishlist }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { currency, setSelectedCategory, products } = useGlobalContext(); // Get products from context
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details from API
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/?category=${encodeURIComponent(category)}`); 
  };

  return (
    <div className="product-page">
      <CategorySection categories={["Electronics", "Fashion", "Home & Garden"]} onCategorySelect={handleCategorySelect} />
      <SidebarFilters />

      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">{product.price[currency]} {currency}</p>
        <button className="buy-button">Buy on ACBuy</button>
        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      </div>
    </div>
  );
}

export default ProductPage;