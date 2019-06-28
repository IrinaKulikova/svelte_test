<script>
import Field from "./components/Field.svelte";
import { startGame } from "./gameCycle/gameCycle";

startGame();
</script>

<style>
	:global(html) {
    height: 100%; 
  }
  :global(body) {
    height: 100%; 
    overscroll-behavior: none; 
    user-select: none; 
    margin: 0; 
    background-color: #e8ffdd; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif; 
  }
</style>

<Field/>