<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IngredientAdd from "./IngredientAdd.svelte";
  import { idGenerator } from "./service/id-generator";
  import type { Ingredient } from "./store/interface/Ingredient";

  const dispatch = createEventDispatcher();
  let ingredients: Ingredient[] = [];
  let title: string = "";
  let ingredientToEdit: Ingredient = null;
  const buttonLabel: string = "Créer";

  const submitIngredient = ({ detail }) => {
    const { id, name, quantity, unit } = detail;

    //if there is an id it means it an edit action
    if (id) {
      ingredients = ingredients.map((ingredient) =>
        id === ingredient.id ? { id, name, quantity, unit } : ingredient
      );
    } else {
      ingredients = [
        ...ingredients,
        { id: idGenerator(), name, quantity, unit },
      ];
    }
  };

  const removeIngredients = (id: string) => {
    ingredients = ingredients.filter((ingredient) => ingredient.id !== id);
  };

  const editIngredient = (ingredient: Ingredient) => {
    ingredientToEdit = ingredient;
  };

  const submit = () => {
    dispatch("submit", {
      title,
      ingredients,
    });
  };
</script>

<form on:submit|preventDefault={submit}>
  <label for="recipe_name">Nom</label>
  <input type="text" id="recipe_name" bind:value={title} required />
  <p class="label">Ingrédient :</p>
  {#if ingredients.length}
    <ul>
      {#each ingredients as ingredient (ingredient.id)}
        <li>
          {ingredient.name}
          {ingredient.quantity}
          {ingredient.unit}
          <button on:click={() => removeIngredients(ingredient.id)}
            >&times;</button
          >
          <button on:click={() => editIngredient(ingredient)} type="button"
            >Modifier</button
          >
        </li>
      {/each}
    </ul>
  {/if}

  <IngredientAdd
    on:submit={submitIngredient}
    ingredient={{ ...ingredientToEdit }}
  />
  <div class="actions">
    <button type="submit" on:click={submit} class="button-submit"
      >{buttonLabel}</button
    >
  </div>
</form>

<style>
  form {
    text-align: left;
  }

  .label {
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
  .button-submit {
    margin: 20px 0;
    width: 100%;
  }
  .actions {
    text-align: center;
  }
</style>
