import type { Recipe } from "./Recipe";

export interface Planning {
  lines: PlanningLine[];
}

export interface PlanningLine {
  day: string;
  recipes: Recipe[];
}

export interface PlanningOperation extends Planning {
  addRecipeToADay: (day: string, recipe: Recipe) => void;
  removeRecipeFromADay: (day: string, recipe: Recipe) => void;
}
