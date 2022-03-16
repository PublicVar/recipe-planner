<script lang="ts">
  import unitList from "./store/unit-list";
  import { createEventDispatcher } from "svelte";
  import type { Ingredient } from "./store/interface/Ingredient";
  export let ingredient: Ingredient = null;
  const dispatch = createEventDispatcher();
  let name: string = "";
  let quantity: number = 0;
  let unit: string = "";
  let id: string = null;

  //We have to make the conditions otherwise the inputs never change
  $: if (null === id) {
    id = ingredient?.id ?? id;
  }
  $: if ("" === name) {
    name = ingredient?.name ?? name;
  }
  $: if (0 === quantity) {
    quantity = ingredient?.quantity ?? quantity;
  }
  $: if ("" === unit) {
    unit = ingredient?.unit ?? unitList[0].notation;
  }

  const submit = () => {
    dispatch("submit", {
      id,
      name,
      quantity,
      unit,
    });
    clearInput();
  };

  const clearInput = () => {
    name = "";
    quantity = 0;
    unit = "";
    id = null;
    ingredient = null;
  };
</script>

<div class="block">
  <form on:submit|preventDefault={submit}>
    <div>
      <label for="ingredient_name">Nom</label>
      <input type="text" id="ingredient_name" bind:value={name} required />
      <label for="ingredient_quantity">Quantité</label>
      <input
        type="number"
        id="ingredient_quantity"
        bind:value={quantity}
        required
      />
      <label for="ingredient_unit">Unité</label>
      <select id="ingredient_unit" bind:value={unit} required>
        {#each unitList as unit (unit.notation)}
          <option value={unit.notation}>{unit.label}</option>
        {/each}
      </select>
    </div>
    <button type="submit" class="button">{id ? "Modifier" : "Ajouter"}</button>
  </form>
</div>

<style>
  .block {
    border-bottom: 1px solid #ddd;
  }
  .button {
    margin-bottom: 20px;
  }
</style>
