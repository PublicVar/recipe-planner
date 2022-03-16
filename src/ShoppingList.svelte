<script lang="ts">
  import { shoppingList, shoppingListNameAsc } from "./store/shopping-list";
</script>

<h2>Liste de course</h2>
<ul>
  {#each $shoppingListNameAsc as ingredient}
    <li>{ingredient.name} {ingredient.quantity} {ingredient.unit}</li>
  {/each}
</ul>
