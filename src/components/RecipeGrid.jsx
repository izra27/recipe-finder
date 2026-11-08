
import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes, onFavoriteChange }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onFavoriteChange={onFavoriteChange}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;
