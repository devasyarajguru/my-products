import { useState, useEffect, useContext } from "react"
import { Link , useLocation} from "react-router-dom"
import { CurrencyContext } from "../context/CurrencyContext"
import "../styles/HomePage.css"
import Category from "../components/Category"

function HomePage({ addToWishlist }) {
  /*
    products: An array to hold the list of products.
    categories: An array to hold product categories.
    filters: An object to hold the current filter values for price, color, brand, and category.
 */
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({
    price: "",
    color: "",
    brand: "",
    category:""
  })
  const { currency , toggleCurrency } = useContext(CurrencyContext) // Containing the currency context conatiner

  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");

  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get("category");

  
  useEffect(() => {
    if (categoryFromURL) {
      setFilters((prevFilters) => ({ ...prevFilters, category: categoryFromURL }));
    }
  }, [categoryFromURL]);


  useEffect(() => {
    // Fetch products and categories from API
    // For now, we'll use placeholder data

    // Initializes the products state 
    setProducts([
      { id: 1, name: "Product 1", price: { USD: 10, EUR: 8 }, category: "Electronics", image: "placeholder.jpg" },
      { id: 2, name: "Product 2", price: { USD: 40, EUR: 16 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 3, name: "Product 3", price: { USD: 22, EUR: 6 }, category: "Home & Garden", image: "placeholder.jpg" },
      { id: 4, name: "Product 4", price: { USD: 50, EUR: 36 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 5, name: "Product 5", price: { USD: 20, EUR: 16 }, category: "Home & Garden", image: "placeholder.jpg" },
      { id: 6, name: "Product 6", price: { USD: 20, EUR: 16 }, category: "Electronics", image: "placeholder.jpg" },
      { id: 7, name: "Product 7", price: { USD: 30, EUR: 46 }, category: "Fashion", image: "placeholder.jpg" },
      { id: 8, name: "Product 8", price: { USD: 10, EUR: 26 }, category: "Electronics", image: "placeholder.jpg" },
      // Add more products...
    ])

    // Initializes the categories state with an array of category names.
    setCategories(["Electronics", "Fashion", "Home & Garden"])
  }, [])


 // Handle category change
 const handleCategorySelect = (category) => {
  setFilters((prevFilters) => ({ ...prevFilters, category }));
};

  // Filtering the categories and price
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  // Filtering the products based on category and price
  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.price || product.price[currency] <= Number.parseFloat(filters.price))
      // Add more filter conditions as needed
    )
  })

  return (
    <div className="home-page">
  <div className="hero-section">
    <h1>Welcome to our Store</h1>
    {/* <Link to="/products" className="cta-button">
      Shop Now
    </Link> */}
  </div>

  <Category categories={categories} setFilters={handleCategorySelect} filters={filters}/>

  {/* New Wrapper for Sidebar + Product Grid */}
  <div className="content">
    {/* Sidebar Filters (Left Side) */}
    <div className="filters">
      <button onClick={toggleCurrency}>
        {currency === "USD" ? "Switch to EUR" : "Switch to USD"}
      </button>
      
      <input type="number" name="price" placeholder="Max Price" onChange={handleFilterChange} />
      {/* Add more filter inputs as needed */}

      <div className="selected-filters">
      {filters.category && (
        <div className="filter-tag">
          {filters.category} 
          <button onClick={() => setFilters({ ...filters, category: "" })}>✖</button>
        </div>
      )}
      
      {filters.price && (
        <div className="filter-tag">
          Max: {filters.price} 
          <button onClick={() => setFilters({ ...filters, price: "" })}>✖</button>
        </div>
      )}
    </div>
    </div>

    {/*Conditionally rendering  Product Grid (Right Side) */}
    {!isProductPage  && (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image || "/placeholder.svg"} alt={product.name} />
          <h3>{product.name}</h3>
          <p>
            {product.price[currency]} {currency}
          </p>
          <Link to={`/product/${product.id}`} className="view-product">
            View Product
          </Link>
          <div className="button-group"> {/* New div to group buttons */}
            <button className="buy-button">Buy on ACBuy</button> {/* New button */}
            <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
          </div>
        </div>
      ))}
    </div>
    )}
  </div>
</div>

  )
}

export default HomePage

