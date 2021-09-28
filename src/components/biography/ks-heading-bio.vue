<template>
  <div class="ks-bio__heading">
    <h2 class="ks-bio__heading-title">Биография</h2>
  </div>
  <div class="ks-bio__col">
    <div class="ks-bio__epigraph">
      <p class="ks-bio__epigraph-text">
        И спросит Бог:
        <br />
        — Никем не ставший, зачем ты жил? Что смех твой значит?
        <br />
        — Я утешал рабов уставших — отвечу я. И Бог заплачет.
      </p>
      <p class="ks-bio__epigraph-autor">— Игорь Губерман, поэт</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.ks-bio__heading {
  width: 100%;
  padding: 112px 0;
  height: calc(72vh - 216px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.ks-bio__heading-title {
  font-size: 7rem;
}
.ks-bio__epigraph-autor {
  font-family: var(--montserrat);
  color: var(--color-secondary);
  margin-top: 32px;
  font-size: 2rem;
}
@media screen and (max-width: 800px) {
  .ks-bio__heading-title {
    font-size: 5rem;
  }
  .ks-bio__epigraph {
    width: 80%;
  }
}
</style>
