<section>
  <slot />
</section>

<style lang="scss">
  section {
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    position: relative;
    display: flex;

    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: clip;
  }
</style>
