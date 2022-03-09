<script lang="ts">
  import CreateRecipe from "./RecipeCreate.svelte";
  import Day from "./Day.svelte";
  import type { Weekday } from "./store/interface/Weekday";
  import Modal from "./ui/Modal.svelte";
  import { dishes } from "./store/dishes";

  let isShowCreateRecipe = false;

  let days: Weekday[] = [
    { key: "monday", label: "Lundi" },
    { key: "tuesday", label: "Mardi" },
    { key: "wednesday", label: "Mercredi" },
    { key: "thursday", label: "Jeudi" },
    { key: "friday", label: "Vendredi" },
    { key: "saturday", label: "Samedi" },
    { key: "sunday", label: "Dimanche" },
  ];

  const addRecipe = ({ detail }) => {
    dishes.add(detail);
    isShowCreateRecipe = false;
  };
</script>

<main>
  <h1>Plats de la semaine</h1>
  <button type="button" on:click={() => (isShowCreateRecipe = true)}
    >Ajouter une recette</button
  >
  <Modal isShow={isShowCreateRecipe} title="Ajouter une recette">
    <CreateRecipe on:create={addRecipe} />
  </Modal>
  {#each days as day (day.key)}
    <Day {...day} />
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 640px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
