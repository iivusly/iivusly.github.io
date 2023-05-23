<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  interface $$Props extends Partial<HTMLAnchorAttributes> {
    newTab?: boolean
  }

  export let newTab = false
</script>

<a {...$$restProps} target={newTab ? '_blank' : undefined}>
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
