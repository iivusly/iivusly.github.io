<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface $$Props extends HTMLAnchorAttributes {}
</script>

<a {...$$restProps}>
  <slot />
</a>

<style lang="scss">
  a {
    color: #fff;
    text-decoration: none;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(75%);
    }
  }
</style>
