<script lang="ts">
  import type Dish from "./store/interface/Dish";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let dishes: Dish[] = [];

  export let onRemove = (dish: Dish) => {
    dispatch("remove", {
      dish,
    });
  };
</script>

{#each dishes as dish (dish.title)}
  <div>
    <p>
      {dish.title}
    </p>
    <button class="delete" on:click={() => onRemove(dish)}>&times;</button>
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
