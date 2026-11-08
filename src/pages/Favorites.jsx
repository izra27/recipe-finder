
import { useEffect, useState } from "react";
import RecipeGrid from "../components/RecipeGrid";
import { getFavorites } from "../utils/storage";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  function handleFavoriteChange(updatedFavorites) {
    setFavorites(updatedFavorites);
  }

  return (
    <main className="page-container">
      <section className="favorites-section">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>

        <h1>My Favorite Recipes</h1>

        <p className="favorites-description">
          All your saved recipes in one place.
        </p>

        {favorites.length > 0 ? (
          <RecipeGrid
            recipes={favorites}
            onFavoriteChange={handleFavoriteChange}
          />
        ) : (
          <div className="empty-message">
            <h2>No favorite recipes yet</h2>
            <p>
              Explore recipes and click the heart
              button to save your favorites.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Favorites;
