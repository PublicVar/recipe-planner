<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IngredientAdd from "./IngredientAdd.svelte";
  import type { Ingredient } from "./store/interface/Ingredient";

  const dispatch = createEventDispatcher();
  let ingredients: Ingredient[] = [];
  let title: string = "";

  const addIngredient = ({ detail }) => {
    const { name, quantity, unit } = detail;

    ingredients = [...ingredients, { name, quantity, unit }];
  };

  const removeIngredients = (name: string) => {
    ingredients = ingredients.filter((ingredient) => ingredient.name !== name);
  };

  const create = () => {
    dispatch("create", {
      title,
      ingredients,
    });
  };
</script>

<form on:submit|preventDefault={create}>
  <label for="recipe_name">Nom</label>
  <input type="text" id="recipe_name" bind:value={title} required />

  {#if ingredients.length}
    <ul>
      {#each ingredients as ingredient}
        <li>
          {ingredient.name}
          {ingredient.quantity}
          {ingredient.unit}
          <button on:click={() => removeIngredients(ingredient.name)}
            >&times;</button
          >
        </li>
      {/each}
    </ul>
  {/if}

  <IngredientAdd on:add={addIngredient} />

  <button type="submit" on:click={create}>Créer</button>
</form>
