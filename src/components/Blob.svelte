<script lang="ts">
  import blobshape from 'blobshape'

  interface $$Props extends Partial<SVGElement> {
    size: number
    edges: number
    growth: number
  }

  export let size = 100
  export let edges = 6
  export let growth = 6

  let { path } = blobshape({ size, edges, growth })
</script>

<svg {...$$restProps} preserveAspectRatio="none" viewBox="0 0 {size} {size}">
  <path d={path} />
</svg>

<style lang="scss">
  svg {
    color: inherit;

    width: 100%;
    height: 100%;

    path {
      fill: currentColor;

      width: 100%;
      height: 100%;
    }
  }
</style>
