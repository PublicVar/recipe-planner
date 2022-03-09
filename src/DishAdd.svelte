<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Dish } from "./store/interface/Dish";

  export let dishes: Dish[] = [];
  const dispatch = createEventDispatcher();

  let selectedDishToAdd: string = "";

  const close = () => {
    dispatch("close");
  };

  const add = () => {
    dispatch("add", {
      dish: selectedDishToAdd,
    });
  };
</script>

<button type="button" on:click={close}>-</button>
<select bind:value={selectedDishToAdd}>
  <option value="">Choisissez un plat</option>
  {#each dishes as dish}
    <option value={dish.title}>{dish.title}</option>
  {/each}
</select>
<button type="button" on:click={() => add()}>Ajouter</button>
