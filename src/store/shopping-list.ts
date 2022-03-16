import type { Ingredient } from "./interface/Ingredient";
import type { Recipe } from "./interface/Recipe";
import { planning } from "./planning";
import { derived } from "svelte/store";

export const shoppingList = derived(planning, ($planning) => {
  let recipesInPlanning = $planning.lines.map((line) => line.recipes);

  //unpack
  recipesInPlanning = recipesInPlanning.map((recipe) => recipe[0]);
  const recipes = {};
  recipesInPlanning.map((recipe) => {
    if (recipe) {
      recipes[recipe.id] = recipe;
    }
  });

  const ingredientsInRecipes: Ingredient[][] = Object.values(recipes).map(
    (recipe: Recipe) => [...recipe.ingredients]
  );

  return ingredientsInRecipes.map((ingredient) => ingredient[0]);
});

export const shoppingListNameAsc = derived(shoppingList, ($shoppingList) => {
  return $shoppingList.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
});
