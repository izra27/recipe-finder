
const FAVORITES_KEY = "recipeFinderFavorites";

// Get all saved favorites
export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
}

// Check whether a recipe is already a favorite
export function isFavorite(id) {
  return getFavorites().some(
    (recipe) => recipe.idMeal === id
  );
}

// Add or remove a favorite
export function toggleFavorite(recipe) {
  const favorites = getFavorites();

  const exists = favorites.some(
    (item) => item.idMeal === recipe.idMeal
  );

  const updatedFavorites = exists
    ? favorites.filter(
        (item) => item.idMeal !== recipe.idMeal
      )
    : [...favorites, recipe];

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );

  return updatedFavorites;
}
