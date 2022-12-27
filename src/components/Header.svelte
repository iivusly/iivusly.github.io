<script lang="ts">
    import type {HTMLBaseAttributes} from 'svelte/elements'

    interface $$Props extends HTMLBaseAttributes {
    }
</script>

<nav {...$$restProps}>
    <slot/>
</nav>

<style lang="scss">

  nav {
    top: 0;
    padding: 1vh;
    height: 4vh;
    width: calc(100vw - 2vh);
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;

    color: white;

    background-color: rgba(29, 29, 29, 0.9);
    backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }
</style>
