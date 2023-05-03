<div class="badge">
  {#each Array(10) as _, i}
    <div class="bar" />
  {/each}
  <h1>WIP</h1>
</div>

<style lang="scss">
  h1 {
    position: absolute;
    padding: 0;
    margin: 0;
    color: olive;
  }

  .badge {
    position: absolute;

    rotate: 45deg;

    background: darken(yellow, 5%);
    width: 125px;
    height: 25px;

    top: 20px;
    right: -30px;

    overflow: hidden;

    display: flex;
    justify-content: space-evenly;
  }

  .bar {
    background: darken(yellow, 10%);
    width: 5px;
  }
</style>
