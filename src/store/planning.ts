import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Planning, PlanningLine } from "./interface/Planning";
import type { Dish } from "./interface/Dish";

function createPlanning() {
  const { subscribe, update, set } = writable({
    lines: [
      { day: "monday", dishes: [{ title: "Rougaille saucisse" }] },
      { day: "wednesday", dishes: [{ title: "Rougaille saucisse" }] },
    ],
  });

  return {
    subscribe,
    set,
    update,
    addDishToADay: (day: string, dish: Dish): void =>
      update((thePlanning: Planning) => {
        //check if the dish is already in the day and don't had it
        if (
          thePlanning.lines.find(
            (line: PlanningLine) =>
              line.day === day &&
              line.dishes.find((theDish: Dish) => theDish.title === dish.title)
          )
        ) {
          return thePlanning;
        }

        //if the day has no dish create it and had the dish
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
                dishes: [dish],
              },
            ],
          };
        }

        return {
          ...thePlanning,
          lines: thePlanning.lines.map((line: PlanningLine) =>
            line.day === day
              ? { ...line, dishes: [...line.dishes, dish] }
              : line
          ),
        };
      }),
    removeDishFromADay: (day: string, dish: Dish): void =>
      update((thePlanning: Planning) => ({
        ...thePlanning,
        lines: thePlanning.lines.map((line: PlanningLine) =>
          line.day !== day
            ? line
            : {
                ...line,
                dishes: line.dishes.filter(
                  (theDish: Dish) => theDish.title !== dish.title
                ),
              }
        ),
      })),
  };
}

export const planning = createPlanning();
