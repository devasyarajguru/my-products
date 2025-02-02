function Category({categories , setFilters , filters})
{
    return(
        <div className="category-section">
            <h2>Categories</h2>
          <div className="category-list">
            {categories.map((category) => (
            <button key={category} onClick={() => setFilters({ ...filters, category })}>
                {category}
            </button>
      ))}
    </div>
  </div>
    )
}

export default Category;