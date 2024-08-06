// console.log("Script loaded");

let preparationTime = document.querySelector(".preparation");
let preparationList = preparationTime.querySelector("#preparationTime");

let ingredientsSection = document.querySelector(".ingredients");
let ingredientsList = ingredientsSection.querySelector("ul");
console.log("preparationTime element:", ingredientsList);

let instructionSection = document.querySelector(".instructions");
let instructionList = instructionSection.querySelector("ol");

let nutritionSection = document.querySelector(".nutrions");
let nutritionList = nutritionSection.querySelector("table");

// let students = ["Abby", "Junha", "Sastra", "De Oka", "Yastu", "Zerina"];
// let studentList = document.querySelector("ul");
// studentList.innerHTML = students
//   .map((student) => {
//     return `<li>${student}</li>`;
//   })
//   .join(""); // Join the array elements into a single string
// console.log(studentList);
const preparation = [
  {
    name: "Total",
    value: "Approximately 10 minutes",
  },
  {
    name: "Preparation",
    value: "5 minutes",
  },
  {
    name: "Cooking",
    value: "5 minutes",
  },
];

preparationList.innerHTML = preparation
  .map((prep) => {
    return `<li><span class="bold">${prep.name}</span>: ${prep.value}</li>`;
  })
  .join("");

let Ingredients = [
  "2-3 eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "fillings cheese, diced vegetables, cooked meats, herbs",
];

ingredientsList.innerHTML = Ingredients.map((Ingredients) => {
  return `<li>${Ingredients}</li>`;
}).join("");

let Instructions = [
  {
    instruction: "Beat the eggs",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    instruction: "Heat the pan",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    instruction: "Cook the omelette",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    instruction: "Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    instruction: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    instruction: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

instructionList.innerHTML = Instructions.map((instruction) => {
  return ` <li>
            <span class="bold">${instruction.instruction}</span> ${instruction.description}
          </li>`;
}).join("");

let Nutrition = [
  {
    name: "Calories",
    value: "277kcal",
  },
  {
    name: "Carbs",
    value: "0g",
  },
  {
    name: "Protein",
    value: "20g",
  },
  {
    name: "Fat",
    value: "22g",
  },
];

nutritionList.innerHTML = Nutrition.map((nutrition) => {
  return `<tr>
              <td>${nutrition.name}</td>
              <td><b>${nutrition.value}</b></td>
            </tr>`;
}).join("");
