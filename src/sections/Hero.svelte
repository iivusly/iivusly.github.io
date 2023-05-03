<script lang="ts">
  import Section from '../components/Section.svelte'
  import Blob from '../components/Blob.svelte'
  import InView from '../components/InView.svelte'
</script>

<Section>
  <div class="bottom blob">
    <Blob growth="8" />
  </div>

  <div class="top blob">
    <Blob growth="8" />
  </div>

  <InView>
    <h1>Hello I'm <i><b>iivusly</b></i></h1>
    <p>Fullstack developer and Rust enthusiast</p>
  </InView>
</Section>

<style lang="scss">
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .bottom {
    bottom: -50vh;
    left: -50vw;

    color: darken(white, 25%);
  }

  .top {
    top: -50vh;
    right: -50vw;

    color: lighten(black, 25%);
    animation-direction: reverse;
  }

  .blob {
    overflow: hidden;
    position: absolute;

    width: 100vw;
    height: 100vh;

    animation: spin 60s linear infinite;

    :global(svg) {
      width: 100%;
      height: 100%;
    }
  }
</style>
