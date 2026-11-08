
import { useEffect, useState } from "react";

import {
  searchMeals,
  getCategories,
  getMealsByCategory,
  getMealsByFirstLetter
} from "../services/mealdb";

import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import RecipeGrid from "../components/RecipeGrid";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const RECIPES_PER_PAGE = 8;

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadRecipes() {
    setLoading(true);
    setError("");

    try {
      let results = [];

      if (selectedCategory) {
        results = await getMealsByCategory(selectedCategory);
      } else if (search.trim()) {
        results = await searchMeals(search.trim());
      } else {
        results = await getMealsByFirstLetter("a");
      }

      if (selectedCategory && search.trim()) {
        results = results.filter((meal) =>
          meal.strMeal
            .toLowerCase()
            .includes(search.trim().toLowerCase())
        );
      }

      setRecipes(results);
    } catch (err) {
      setError(
        "Unable to load recipes. Please check your internet connection."
      );
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error("Unable to load categories:", err);
      }
    }

    loadCategories();
  }, []);

  // Reload recipes when search or category changes
  useEffect(() => {
    setCurrentPage(1);
    loadRecipes();
  }, [search, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(
    recipes.length / RECIPES_PER_PAGE
  );

  const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;

  const currentRecipes = recipes.slice(
    startIndex,
    startIndex + RECIPES_PER_PAGE
  );

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 500,
        behavior: "smooth"
      });
    }
  }

  return (
    <main className="page-container">
      <section className="hero-section">
        <p className="eyebrow">
          DISCOVER SOMETHING DELICIOUS
        </p>

        <h1>Find Your Next Favorite Recipe</h1>

        <p>
          Explore delicious meals and discover
          inspiration for your next cooking adventure.
        </p>
      </section>

      <section className="recipe-section">
        <div className="recipe-controls">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <h2>Explore Recipes</h2>

        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage
            message={error}
            onRetry={loadRecipes}
          />
        ) : recipes.length > 0 ? (
          <>
            <p className="recipe-count">
              Showing {startIndex + 1}–
              {Math.min(startIndex + RECIPES_PER_PAGE, recipes.length)}
              {" "}of {recipes.length} recipes
            </p>

            <RecipeGrid recipes={currentRecipes} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="empty-message">
            <h3>No recipes found</h3>
            <p>
              Try another search or select a different category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
