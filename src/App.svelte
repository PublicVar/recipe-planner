<script lang="ts">
  import RecipeForm from "./RecipeForm.svelte";
  import Day from "./Day.svelte";
  import type { Weekday } from "./store/interface/Weekday";
  import Modal from "./ui/Modal.svelte";
  import { recipes } from "./store/recipes";
  import { planning } from "./store/planning";
  import ShoppingList from "./ShoppingList.svelte";

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
    recipes.add(detail);
    isShowCreateRecipe = false;
  };

  const persistPlanning = () => planning.persist();

  const showShoppingList = () => {};
</script>

<main>
  <div class="banner">
    <div class="inner-banner">
      <h1>Plats de la semaine</h1>
      <div class="top-actions">
        <button
          type="button"
          on:click={() => (isShowCreateRecipe = true)}
          class="btn-icon"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            ><path
              d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"
            /></svg
          >
          Ajouter une recette
        </button>
        <button class="btn-icon" on:click={persistPlanning}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            ><path
              d="M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"
            /></svg
          >
          Sauvegarder le planning
        </button>
        <button class="btn-icon" on:click={showShoppingList}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            ><path
              d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"
            /></svg
          >
          Liste de course
        </button>
      </div>
    </div>
  </div>
  <div class="main">
    <Modal bind:isShow={isShowCreateRecipe} title="Ajouter une recette">
      <RecipeForm on:submit={addRecipe} />
    </Modal>
    {#each days as day (day.key)}
      <Day {...day} />
    {/each}
    <ShoppingList />
  </div>
</main>

<style>
  .main {
    text-align: center;
    padding: 1em;
    max-width: 640px;
    margin: 0 auto;
  }
  .btn-icon {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
  }

  .btn-icon svg {
    fill: var(--main-color) !important;
    background-color: var(--secondary-color);
  }
  .btn-icon:hover > svg {
    fill: #fff !important;
  }

  .top-actions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }

  .banner {
    background-color: var(--secondary-color);
    margin: 0;
    padding: 0;
    color: #fff;
  }
  .banner h1 {
    margin: 0;
    padding: 0;
    font-weight: 100;
  }
  .inner-banner {
    display: flex;
    max-width: 640px;
    margin: 0 auto;
    padding: 5px 0;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
