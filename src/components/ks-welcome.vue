<template>
  <div class="ks-welcome">
    <div class="ks-welcom__text">
      <ks-welcome-text-item />
      <ks-welcome-text-item />
      <ks-welcome-text-item />
    </div>
    <div class="ks-welcome__photo">
      <div class="ks-welcome__frame">
        <div class="ks-welcome__waves">
          <img
            class="ks-welcome__waves--img"
            src="@/assets/img/graphics/waves.png"
            alt="Лекала волн"
            draggable="false"
          />
        </div>
        <div class="ks-welcome__frame--background">
          <img
            class="ks-welcome__frame--img"
            src="@/assets/img/main-1.png"
            alt="Косоплечев Алексей Владимирович"
            draggable="false"
          />
        </div>
        <div class="ks-welcome__bubble">
          <img
            class="ks-welcome__bubble--img"
            src="@/assets/img/graphics/bubble.png"
            alt="Лекала волн"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <div class="ks-welcom__numbers">
      <ks-welcome-numbers-item />
      <ks-welcome-numbers-item />
      <ks-welcome-numbers-item />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.ks-welcome {
  display: flex;
  justify-content: center;
  padding: 8rem 0;
}
.ks-welcome__photo {
  display: flex;
  z-index: 1;
}
.ks-welcome__waves {
  background: unset;
  height: fit-content;
  position: absolute;
  top: 264px;
  left: -124px;
  z-index: 4;
}
.ks-welcome__waves--img {
  background: unset;
  user-select: none;
}
.ks-welcome__bubble {
  background: unset;
  height: fit-content;
  position: absolute;
  bottom: 0;
  right: -168px;
  z-index: -1;
}
.ks-welcome__bubble--img {
  background: unset;
  user-select: none;
}
.ks-welcome__frame {
  border: 1px solid #000;
  border-radius: 45rem;
  width: 61rem;
  height: fit-content;
  position: relative;
  z-index: 1;
}
.ks-welcome__frame--background {
  height: 90rem;
  overflow: hidden;
  border-radius: 45rem;
  border: 3rem solid var(--general-background);
  background: var(--photo-background);
  display: flex;
  justify-content: center;
  z-index: 3;
}
.ks-welcome__frame--img {
  height: 124rem;
  background: unset;
  position: relative;
  user-select: none;
}
</style>
