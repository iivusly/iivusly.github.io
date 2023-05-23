<script lang="ts">
    import type {HTMLAnchorAttributes} from 'svelte/elements'

    interface $$Props extends Partial<HTMLAnchorAttributes> {
        newTab?: boolean
        href?: string
        decoration?: boolean
    }

    export let newTab = false
    export let href = '#'
    export let decoration = true
</script>

<a {...$$restProps} {href} style={decoration ? 'underlined' : 'text-decoration: none;'}
   target={newTab ? '_blank' : undefined}>
    <slot/>
</a>

<style lang="scss">
  a {
    color: #fff;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(75%);
    }
  }
</style>
