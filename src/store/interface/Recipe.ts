import type { Ingredient } from "./Ingredient";

export interface Recipe {
  title: string;
  ingredients?: Ingredient[];
  link?: string;
}
