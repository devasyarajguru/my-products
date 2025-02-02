import { createContext, useState } from "react" // Helps create a global data store that any component in app can access

export const CurrencyContext = createContext() // Creates global storage Container for storing currency data 

// This will wrap the entire app and provide currency data
export const CurrencyProvider = ({ children }) => { // children will wrap other components inside it
  const [currency, setCurrency] = useState("USD")

  const toggleCurrency = () => {
    setCurrency(currency === "USD" ? "EUR" : "USD")
  }

  // Provider to access the data to all the child components
  return <CurrencyContext.Provider value={{ currency, toggleCurrency }}>{children}</CurrencyContext.Provider>
}

