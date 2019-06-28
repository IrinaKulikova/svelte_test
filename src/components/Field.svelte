<script>
  import Figure from "./Figure.svelte";
  import {figures} from "../stores/figures";
</script>

<style>
  .container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 100%;
  }
</style>

<div class="container">
  <svg viewBox="0 0 480 800">
  {#each $figures as figure (figure.id)}
      <Figure {figure} />
    {/each}
  </svg>
</div>