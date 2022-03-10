<script lang="ts">
  import type { Recipe } from "./store/interface/Recipe";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let recipes: Recipe[] = [];

  export let onRemove = (recipe: Recipe) => {
    dispatch("remove", {
      recipe,
    });
  };
</script>

{#each recipes as recipe (recipe.title)}
  <div>
    <p>
      {recipe.title}
    </p>
    <button class="delete" on:click={() => onRemove(recipe)}>&times;</button>
  </div>
{:else}
  <div>
    <em>Pas de plats.</em>
  </div>
{/each}

<style>
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  p {
    margin: 10px 0;
  }
  .delete {
    width: 20px;
    height: 23px;
    padding: 0;
    margin: 0;
    vertical-align: middle;
  }
</style>
