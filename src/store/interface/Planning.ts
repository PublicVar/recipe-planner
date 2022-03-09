import type { Dish } from "./Dish";

export interface Planning {
  lines: PlanningLine[];
}

export interface PlanningLine {
  day: string;
  dishes: Dish[];
}

export interface PlanningOperation extends Planning {
  addDishToADay: (day: string, dish: Dish) => void;
  removeDishFromADay: (day: string, dish: Dish) => void;
}
