<script>
  import Square from "./Square.svelte";
  import Triangle from "./Triangle.svelte";
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
    {#if figure.type =="square"}
      <Square {figure} />
    {:else}
      <Triangle {figure}/>
    {/if}
    {/each}
  </svg>
</div>