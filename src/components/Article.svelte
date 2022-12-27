<script lang="ts">
  export let block = false
</script>

<article>
  <slot />
</article>

<style lang="scss">
  article {
    display: block;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
</style>
