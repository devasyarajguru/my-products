import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
// import { ThemeProvider } from "./context/ThemeContext" // Dark mode
import { CurrencyProvider } from "./context/CurrencyContext" // manages currency selection
import "./App.css"
// import { CategoryProvider } from "./context/CategoryContext"

function App() {
  const [wishlist, setWishlist] = useState([]) // store the llist of favorite products

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist") // retrieves wishlist data(String format) from localstorage

    // if wishlist exists
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist)) // updating the state with stored items (JSON.parse converts string into Javascript array to use it with React's state)
    }
  }, [])

  // Adding to wishlist
  const addToWishlist = (product) => {
    const updatedWishlist = [...wishlist, product] // Keeping the existing product and adding new product
    setWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)) // Storing the data in localstorage 
  }

  return (
    <Router>
      {/* <ThemeProvider> */}
        <CurrencyProvider>
          {/* <CategoryProvider> */}
          <div className="app">
            <Header />
            <Routes>
            <Route path="/" element={<HomePage addToWishlist={addToWishlist} />} /> 
            <Route path="/product/:id" element={<ProductPage addToWishlist={addToWishlist} />} /> 
            </Routes>
            <Footer />
          </div>
          {/* </CategoryProvider> */}
        </CurrencyProvider>
      {/* </ThemeProvider> */}
    </Router>
  )
}

export default App

