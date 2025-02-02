import { useContext } from "react"
import { Link } from "react-router-dom"
// import { ThemeContext } from "../context/ThemeContext"
// import { CurrencyContext } from "../context/CurrencyContext"
import "../styles/Header.css"

function Header() {
  // const { theme, toggleTheme } = useContext(ThemeContext)
  // const { currency, toggleCurrency } = useContext(CurrencyContext)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <button className="report-button">Report Invalid Option</button>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      <button className="wishlist-button">Wishlist</button>
      <button className="signup-button">Sign Up</button>
      {/* <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode" : "Light Mode"}</button> */}
      {/* <button onClick={toggleCurrency}>{currency === "USD" ? "Switch to EUR" : "Switch to USD"}</button> */}
    </header>
  )
}

export default Header

