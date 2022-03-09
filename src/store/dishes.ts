import { writable } from "svelte/store";
import type { Dish } from "./interface/Dish";

function createDishes() {
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
    add: (dish: Dish): void =>
      update((dishes: Dish[]): Dish[] => {
        if (
          undefined ===
          dishes.find((theDish: Dish) => theDish.title === dish.title)
        ) {
          return [...dishes, dish];
        }
        return dishes;
      }),
  };
}

export const dishes = createDishes();
