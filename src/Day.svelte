<script lang="ts">
  import { planning } from "./store/planning";
  import { recipes } from "./store/recipes";
  import type { Recipe } from "./store/interface/Recipe";
  import type { PlanningLine } from "./store/interface/Planning";
  import RecipeList from "./RecipeList.svelte";
  import RecipeAdd from "./RecipeAdd.svelte";

  export let key: string;
  export let label: string;

  let recipesOfTheDay: Recipe[] = [];
  let isShowAddrecipes: boolean = false;

  $: availableRecipes = $recipes.filter(
    (recipe: Recipe) =>
      undefined ===
      recipesOfTheDay.find(
        (dayRecipe: Recipe) => recipe.title === dayRecipe.title
      )
  );

  $: {
    const day: PlanningLine = $planning.lines.find((line) => key === line.day);
    if (day) {
      recipesOfTheDay = day.recipes;
    }
  }

  const showAddrecipes = () => {
    isShowAddrecipes = true;
  };

  const hideAddrecipes = () => {
    isShowAddrecipes = false;
  };

  const addRecipe = (event) => {
    const selectedRecipeToAdd = event.detail.recipe;
    if (selectedRecipeToAdd) {
      const newRecipe = $recipes.find(
        (theRecipe: Recipe) => theRecipe.title === selectedRecipeToAdd
      );
      planning.addRecipeToADay(key, newRecipe);
    }
  };

  const removeRecipe = (event) => {
    const recipe = event.detail.recipe;
    const recipeToRemove = $recipes.find(
      (theRecipe: Recipe) => theRecipe.title === recipe.title
    );
    planning.removeRecipeFromADay(key, recipeToRemove);
  };
</script>

<div class="day">
  <p class="label">{label}</p>
  <RecipeList recipes={recipesOfTheDay} on:remove={removeRecipe} />
  <div>
    {#if isShowAddrecipes && availableRecipes.length > 0}
      <RecipeAdd
        on:close={hideAddrecipes}
        recipes={availableRecipes}
        on:add={addRecipe}
      />
    {/if}
    {#if !isShowAddrecipes}
      <button class="add" type="button" on:click={showAddrecipes}> + </button>
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
