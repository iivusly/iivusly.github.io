<script lang="ts">
  import Hero from './articles/Hero.svelte'
  import TopBar from './articles/TopBar.svelte'
  import WIP from './articles/WIP.svelte'
  import Tools from './articles/Tools.svelte'
</script>

<main>
  <Hero />
  <Tools />
  <WIP />
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

    & > :global(:last-child) {
      height: calc(100vh - (4vh + 2vh));
    }
  }
</style>
