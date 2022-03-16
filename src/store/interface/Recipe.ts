import type { Ingredient } from "./Ingredient";

export interface Recipe {
  id?: string;
  title: string;
  ingredients?: Ingredient[];
  link?: string;
}
