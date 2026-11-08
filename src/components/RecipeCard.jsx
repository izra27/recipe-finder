
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  isFavorite,
  toggleFavorite
} from "../utils/storage";

function RecipeCard({ recipe, onFavoriteChange }) {
  const [favorite, setFavorite] = useState(
    isFavorite(recipe.idMeal)
  );

  function handleFavorite() {
    const updatedFavorites = toggleFavorite(recipe);

    setFavorite(
      updatedFavorites.some(
        (item) => item.idMeal === recipe.idMeal
      )
    );

    if (onFavoriteChange) {
      onFavoriteChange(updatedFavorites);
    }
  }

  return (
    <article className="recipe-card">
      <button
        className={`favorite-button ${favorite ? "active" : ""}`}
        onClick={handleFavorite}
        aria-label={favorite ? "Remove favorite" : "Add favorite"}
        title={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "♥" : "♡"}
      </button>

      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          loading="lazy"
        />

        <div className="recipe-card-content">
          <h3>{recipe.strMeal}</h3>
          <span>View Recipe →</span>
        </div>
      </Link>
    </article>
  );
}

export default RecipeCard;
