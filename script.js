console.log("script.js підключено");

const recipes = [
  { name: "Різото з грибами", timeMinutes: 35, vegetarian: true },
  { name: "Паста з томатами та базиліком", timeMinutes: 20, vegetarian: true },
  {
    name: "Куряче філе з рисом та овочами",
    timeMinutes: 40,
    vegetarian: false,
  },
  { name: "Запечений лосось із броколі", timeMinutes: 25, vegetarian: false },
  { name: "Грецький салат з тофу", timeMinutes: 15, vegetarian: true },
  { name: "Стейк з яловичини з пюре", timeMinutes: 45, vegetarian: false },
];

let generatedCount = 0;

// Функція обирає випадковий рецепт зі списку існуючих
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const resultContainer = document.querySelector("#recipe-result");
const historyCountElement = document.querySelector("#history-count");
const generateBtn = document.querySelector(".accent-button");

// Функція видаляє наявний згенерований рецепт
function removeCurrentRecipe() {
  const currentRecipe = document.querySelector(".current-recipe");

  if (currentRecipe) {
    currentRecipe.remove();
  }
}

// Функція замінює згенерований рецепт на новий після нажимання користувача на кнопку "Згенерувати рецепт"
function renderRandomRecipe() {
  removeCurrentRecipe();

  const recipe = pickRandom(recipes);

  const card = document.createElement("article");
  card.classList.add("current-recipe");

  card.dataset.time = recipe.timeMinutes;
  if (recipe.vegetarian) {
    card.classList.add("vegetarian");
  }

  const title = document.createElement("h3");
  title.classList.add("current-recipe__title");
  title.textContent = recipe.name;

  const description = document.createElement("p");
  description.textContent = `Час приготування: ${recipe.timeMinutes} хв. Смачна та збалансована страва для вашої вечері.`;

  card.append(title, description);
  resultContainer.append(card);

  generatedCount++;
  historyCountElement.textContent = `Згенеровано рецептів за сеанс: ${generatedCount}`;
}

generateBtn.addEventListener("click", renderRandomRecipe);

renderRandomRecipe();
