<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Recipe } from "./store/interface/Recipe";

  export let recipes: Recipe[] = [];
  const dispatch = createEventDispatcher();

  let selectedRecipeToAdd: string = "";

  const close = () => {
    dispatch("close");
  };

  const add = () => {
    dispatch("add", {
      recipe: selectedRecipeToAdd,
    });
  };
</script>

<button type="button" on:click={close}>-</button>
<select bind:value={selectedRecipeToAdd}>
  <option value="">Choisissez un plat</option>
  {#each recipes as recipe}
    <option value={recipe.title}>{recipe.title}</option>
  {/each}
</select>
<button type="button" on:click={() => add()}>Ajouter</button>
