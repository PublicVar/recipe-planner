import { writable } from "svelte/store";
import type { Planning, PlanningLine } from "./interface/Planning";
import type { Recipe } from "./interface/Recipe";

function createPlanning() {
  const persistedPlanning: Planning = JSON.parse(
    localStorage.getItem("planning")
  );
  const defaultPlanning = { lines: [] };

  const { subscribe, update, set } = writable(
    persistedPlanning ?? defaultPlanning
  );

  return {
    subscribe,
    set,
    update,
    addRecipeToADay: (day: string, recipe: Recipe): void =>
      update((thePlanning: Planning) => {
        //check if the recipe is already in the day and don't had it
        if (
          thePlanning.lines.find(
            (line: PlanningLine) =>
              line.day === day &&
              line.recipes.find(
                (theRecipe: Recipe) => theRecipe.title === recipe.title
              )
          )
        ) {
          return thePlanning;
        }

        //if the day has no recipe create it and had the recipe
        if (
          undefined ===
          thePlanning.lines.find((line: PlanningLine) => line.day === day)
        ) {
          return {
            ...thePlanning,
            lines: [
              ...thePlanning.lines,
              {
                day,
                recipes: [recipe],
              },
            ],
          };
        }

        return {
          ...thePlanning,
          lines: thePlanning.lines.map((line: PlanningLine) =>
            line.day === day
              ? { ...line, recipes: [...line.recipes, recipe] }
              : line
          ),
        };
      }),
    removeRecipeFromADay: (day: string, recipe: Recipe): void =>
      update((thePlanning: Planning) => ({
        ...thePlanning,
        lines: thePlanning.lines.map((line: PlanningLine) =>
          line.day !== day
            ? line
            : {
                ...line,
                recipes: line.recipes.filter(
                  (therecipe: Recipe) => therecipe.title !== recipe.title
                ),
              }
        ),
      })),
    persist: (): void =>
      update((thePlanning: Planning) => {
        localStorage.setItem("planning", JSON.stringify(thePlanning));
        return thePlanning;
      }),
  };
}

export const planning = createPlanning();
