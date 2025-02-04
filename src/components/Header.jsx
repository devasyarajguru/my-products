// import { useContext } from "react"
import { Link } from "react-router-dom"
// import { ThemeContext } from "../context/ThemeContext"
// import { CurrencyContext } from "../context/CurrencyContext"
import "../styles/Header.css"
import Logo from "../assets/logo.png"
import SearchBar from "./SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; // Hollow heart icon
import { faExclamation } from '@fortawesome/free-solid-svg-icons'; // Exclamation mark icon
import { motion } from 'framer-motion';



function Header() {
  // const { theme, toggleTheme } = useContext(ThemeContext)
  // const { currency, toggleCurrency } = useContext(CurrencyContext)

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (

    <motion.header 
      initial="hidden" 
      animate="visible" 
      variants={headerVariants} 
      className="header"
    >
      <motion.div variants={childVariants} className="header-content">
        
        {/* Logo Animation */}
        <motion.div variants={childVariants} className="logo">
          <Link to="/" className="logo-link">
            <motion.img 
               src={Logo} 
               alt="Logo" 
               className="logo-image"
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               whileHover={{ scale: 1.1, opacity: 0.9 }} // Hover effect using Framer Motion
            />
          </Link>
        </motion.div>

        {/* Search Bar */}
        <motion.div variants={childVariants}>
          <SearchBar />
        </motion.div>

        {/* Header Buttons */}
        <motion.div variants={childVariants} className="header-buttons">
          
          {/* Report Button */}
          <motion.button 
            className="report-button" 
            aria-label="Report Invalid Option"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Report Invalid Link 
            <FontAwesomeIcon icon={faExclamation} style={{ color: "#FF6347", fontSize: "20px" }} />
          </motion.button>
          
          {/* Wishlist Icon */}
          <motion.div 
            whileHover={{ scale: 1.1}} 
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon 
              icon={faHeart} 
              style={{ color: "#63E6BE", fontSize: "50px" }} 
              className="wishlist-icon"
            />
          </motion.div>

        </motion.div>

      </motion.div>
    </motion.header>

  )
}

export default Header

