import { useState, useEffect, useContext } from "react"
import { useParams , useNavigate } from "react-router-dom"
import { CurrencyContext } from "../context/CurrencyContext"
import "../styles/ProductPage.css"
import Category from "../components/Category"


function ProductPage({ addToWishlist }) {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const { currency } = useContext(CurrencyContext)
  const [categories, setCategories] = useState(["Electronics", "Fashion", "Home & Garden"]);
  const [filters, setFilters] = useState({
    price: "",
    color: "",
    brand: "",
    category: "",
  })

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product details from API
    // For now, we'll use placeholder data
    setProduct({
      id: id,
      name: `Product ${id}`,
      description: "This is a product description.",
      price: { USD: 10, EUR: 8 },
      rating: 4.5,
      image: "placeholder.jpg",
    })

  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleCategorySelect = (category) =>
  {
    navigate(`/?category=${encodeURIComponent(category)}`);
  }

  return (
    <div className="product-page">
  <Category categories={categories} setFilters={handleCategorySelect} filters={filters}/>

      <div className="product-image">
        <img src={product.image || "/placeholder.svg"} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className="price">
          {product.price[currency]} {currency}
        </p>
        <p className="rating">Rating: {product.rating}/5</p>
        <button className="add-to-cart">Add to Cart</button>
        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      </div>
    </div>
  )
}

export default ProductPage

