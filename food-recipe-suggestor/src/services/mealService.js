const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMealByName = async (name) => {
    const response = await fetch(`${API_BASE_URL}/search.php?s=${name}`);
    return response.json();
};

export const listMealsByFirstLetter = async (letter) => {
    const response = await fetch(`${API_BASE_URL}/search.php?f=${letter}`);
    return response.json();
};

export const lookupMealById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
    return response.json();
};

export const getRandomMeal = async () => {
    const response = await fetch(`${API_BASE_URL}/random.php`);
    return response.json();
};

export const listMealCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/categories.php`);
    return response.json();
};

export const filterMealsByIngredient = async (ingredient) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    return response.json();
};

export const filterMealsByCategory = async (category) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?c=${category}`);
    return response.json();
};

export const filterMealsByArea = async (area) => {
    const response = await fetch(`${API_BASE_URL}/filter.php?a=${area}`);
    return response.json();
};