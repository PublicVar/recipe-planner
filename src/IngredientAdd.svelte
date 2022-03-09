<script lang="ts">
  import unitList from "./store/unit-list";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let name: string = "";
  let quantity: number = 0;
  let unit: string = unitList[0].notation;

  const add = () => {
    dispatch("add", {
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
  };
</script>

<div>
  <form on:submit|preventDefault={add}>
    <p>Ajouter un ingrédient</p>
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
    <button type="submit">Ajouter</button>
  </form>
</div>

<style>
</style>
