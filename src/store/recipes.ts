import { writable } from "svelte/store";
import type { Recipe } from "./interface/Recipe";

function createRecipes() {
  const { update, set, subscribe } = writable([
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
  ]);

  return {
    update,
    set,
    subscribe,
    add: (recipe: Recipe): void =>
      update((recipes: Recipe[]): Recipe[] => {
        if (
          undefined ===
          recipes.find((theRecipe: Recipe) => theRecipe.title === recipe.title)
        ) {
          return [...recipes, recipe];
        }
        return recipes;
      }),
  };
}

export const recipes = createRecipes();
