<script lang="ts">
  import Hero from './sections/Hero.svelte'
  import TopBar from './sections/TopBar.svelte'
  import WIP from './sections/WIP.svelte'
</script>

<main>
  <Hero />
  <div class="last-section">
    <WIP />
  </div>
</main>

<TopBar />

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    background: black;
    color: white;
  }

  .last-section {
    width: 100%;
    height: calc(100vh - (4vh + 2vh));
  }
</style>
