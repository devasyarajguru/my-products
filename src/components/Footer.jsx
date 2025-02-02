import "../styles/Footer.css"

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value

    // Use Formspree for email submission
    fetch("https://formspree.io/f/your-formspree-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // The server expects the data in JSON format (string)
    })
      .then((response) => response.json()) //  returning response object parsing it as JSON.
      .then((data) => {
        console.log("Success:", data)
        // Show success message to user
      })
      .catch((error) => {
        console.error("Error:", error)
        // Show error message to user
      })
  }

  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        {/* Add more social media links */}
      </div>
    </footer>
  )
}

export default Footer

