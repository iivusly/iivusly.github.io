<script lang="ts">
    import Hero from './sections/Hero.svelte'
    import TopBar from './sections/TopBar.svelte'
</script>

<main>
    <Hero/>
</main>

<TopBar/>

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
</style>
