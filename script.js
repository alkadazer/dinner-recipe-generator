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

// Функція обирає випадковий рецепт зі списку існуючих
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Функція виводить всі рецепти зі списку існуючих
function displayAllRecipes(recipesList) {
  console.log("\t––––– Список всіх рецептів для вечері –––––");

  for (const recipe of recipesList) {
    console.log(
      `"${recipe.name}": готується ${recipe.timeMinutes} хв (${recipe.vegetarian ? "" : "не "}вегетаріанська)`,
    );
  }
}

// Функція виводить випадковий рецепт зі списку існуючих, дає коротку інформацію про нього
function generateRandomDinner() {
  console.log("\t––––– Результат генерації випадкового рецепту –––––");

  const recipe = pickRandom(recipes);

  console.log(`Сьогодні на вечерю рекомендуємо "${recipe.name}"`);
  console.log(`Страва готується ${recipe.timeMinutes} хв`);
  console.log(`Тип страви: ${recipe.vegetarian ? "" : "не "}вегетаріанська`);
}

displayAllRecipes(recipes);
console.log();
generateRandomDinner();
