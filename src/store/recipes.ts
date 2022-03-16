import { writable } from "svelte/store";
import type { Recipe } from "./interface/Recipe";
import defaultRecipes from "../data/recipes";

function createRecipes() {
  const persistedRecipes: Recipe[] =
    JSON.parse(localStorage.getItem("recipes")) ?? [];
  /*   const defaultRecipes: Recipe[] = [
    {
      title: "Rougaille saucisse",
      ingredients: [
        {
          name: "saucisse",
          quantity: 500,
          unit: "g",
        },
      ],
    },
    {
      title: "Carry poulet",
      ingredients: [
        {
          name: "poulet",
          quantity: 750,
          unit: "g",
        },
      ],
    },
  ]; */

  const { update, set, subscribe } = writable([
    ...defaultRecipes,
    ...persistedRecipes,
  ]);

  return {
    update,
    set,
    subscribe,
    add: (recipe: Recipe): void =>
      update((recipes: Recipe[]) => {
        if (
          undefined ===
          recipes.find((theRecipe: Recipe) => theRecipe.title === recipe.title)
        ) {
          return [...recipes, recipe];
        }

        localStorage.setItem("recipes", JSON.stringify(recipes));
        return recipes;
      }),
  };
}

export const recipes = createRecipes();
