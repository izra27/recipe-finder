
const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Reusable function for sending API requests
async function fetchAPI(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("TheMealDB API Error:", error);
    throw error;
  }
}

// Search recipes by meal name
export async function searchMeals(query) {
  const data = await fetchAPI(
    `search.php?s=${encodeURIComponent(query)}`
  );

  return data.meals || [];
}

// Get a recipe using its ID
export async function getMealById(id) {
  const data = await fetchAPI(
    `lookup.php?i=${encodeURIComponent(id)}`
  );

  return data.meals?.[0] || null;
}

// Get all available recipe categories
export async function getCategories() {
  const data = await fetchAPI("categories.php");

  return data.categories || [];
}

// Filter recipes by category
export async function getMealsByCategory(category) {
  const data = await fetchAPI(
    `filter.php?c=${encodeURIComponent(category)}`
  );

  return data.meals || [];
}

// Get a random recipe
export async function getRandomMeal() {
  const data = await fetchAPI("random.php");

  return data.meals?.[0] || null;
}


// Get recipes by their first letter
export async function getMealsByFirstLetter(letter = "a") {
  const data = await fetchAPI(
    `search.php?f=${encodeURIComponent(letter)}`
  );

  return data.meals || [];
}

