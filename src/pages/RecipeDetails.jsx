
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealById } from "../services/mealdb";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function RecipeDetails() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadRecipe() {
    setLoading(true);
    setError("");

    try {
      const data = await getMealById(id);

      if (!data) {
        throw new Error("Recipe not found.");
      }

      setRecipe(data);
    } catch (err) {
      setError(err.message || "Unable to load this recipe.");
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRecipe();
  }, [id]);

  // Extract ingredients and their measurements
  const ingredients = recipe
    ? Array.from({ length: 20 }, (_, index) => {
        const ingredient = recipe[`strIngredient${index + 1}`];
        const measure = recipe[`strMeasure${index + 1}`];

        return {
          ingredient: ingredient?.trim(),
          measure: measure?.trim()
        };
      }).filter((item) => item.ingredient)
    : [];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <main className="page-container">
        <ErrorMessage message={error} onRetry={loadRecipe} />
        <Link to="/">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="page-container details-page">
      <Link to="/" className="back-link">
        ← Back to Recipes
      </Link>

      <div className="details-header">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />

        <div className="details-info">
          <p className="eyebrow">RECIPE DETAILS</p>

          <h1>{recipe.strMeal}</h1>

          <p>
            Category: {recipe.strCategory || "Not specified"}
          </p>

          <p>
            Area: {recipe.strArea || "Not specified"}
          </p>

          {recipe.strTags && (
            <p>Tags: {recipe.strTags}</p>
          )}
        </div>
      </div>

      <section className="ingredients-section">
        <h2>Ingredients</h2>

        <ul className="ingredients-list">
          {ingredients.map((item, index) => (
            <li key={index}>
              <span>{item.ingredient}</span>
              <span>{item.measure}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="instructions-section">
        <h2>Cooking Instructions</h2>

        <p>{recipe.strInstructions}</p>
      </section>

      {recipe.strYoutube && (
        <a
          href={recipe.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-link"
        >
          Watch Cooking Video
        </a>
      )}
    </main>
  );
}

export default RecipeDetails;
