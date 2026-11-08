
function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <div className="filter-container">
      <label htmlFor="category">Filter by category:</label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(event) =>
          setSelectedCategory(event.target.value)
        }
      >
        <option value="">All Categories</option>

        {categories.map((category) => (
          <option
            key={category.idCategory}
            value={category.strCategory}
          >
            {category.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
