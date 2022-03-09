<script lang="ts">
  import { planning } from "./store/planning";
  import { dishes } from "./store/dishes";
  import type { Dish } from "./store/interface/Dish";
  import type { PlanningLine } from "./store/interface/Planning";
  import DishList from "./DishList.svelte";
  import DishAdd from "./DishAdd.svelte";

  export let key: string;
  export let label: string;

  let dishesOfTheDay: Dish[] = [];
  let isShowAddDishes: boolean = false;

  $: availableDishes = $dishes.filter(
    (dish: Dish) =>
      undefined ===
      dishesOfTheDay.find((dayDish: Dish) => dish.title === dayDish.title)
  );

  $: {
    const day: PlanningLine = $planning.lines.find((line) => key === line.day);
    if (day) {
      dishesOfTheDay = day.dishes;
    }
  }

  const showAddDishes = () => {
    isShowAddDishes = true;
  };

  const hideAddDishes = () => {
    isShowAddDishes = false;
  };

  const addDish = (event) => {
    const selectedDishToAdd = event.detail.dish;
    if (selectedDishToAdd) {
      const newDish = $dishes.find(
        (theDish: Dish) => theDish.title === selectedDishToAdd
      );
      planning.addDishToADay(key, newDish);
    }
  };

  const removeDish = (event) => {
    const dish = event.detail.dish;
    const dishToRemove = $dishes.find(
      (theDish: Dish) => theDish.title === dish.title
    );
    planning.removeDishFromADay(key, dishToRemove);
  };
</script>

<div class="day">
  <p class="label">{label}</p>
  <DishList dishes={dishesOfTheDay} on:remove={removeDish} />
  <div>
    {#if isShowAddDishes}
      <DishAdd
        on:close={hideAddDishes}
        dishes={availableDishes}
        on:add={addDish}
      />
    {/if}
    {#if !isShowAddDishes}
      <button class="add" type="button" on:click={showAddDishes}> + </button>
    {/if}
  </div>
</div>

<style>
  .label {
    font-weight: bold;
    font-size: 1.25em;
  }
  .day {
    border-bottom: 1px solid #eee;
    padding-bottom: 1em;
  }
  button {
    background-color: white;
    border-color: rgb(208, 212, 255);
    color: rgb(99, 111, 245);
    cursor: pointer;
    transition: background-color 0.5s ease-out;
  }
  button:hover {
    background-color: rgb(237, 238, 250);
  }
  .add {
    font-size: 1.5em;
    width: 100%;
    margin: 0.5em 0;
  }
</style>
