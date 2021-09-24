<template>
  <div class="ks-bio__frame">
    <div class="ks-bio__background">
      <img class="ks-bio-image" src="@/assets/img/main-2.png" alt="Алексей Владимирович Косоплечев" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* СТИЛИ ФОТОГРАФИИ В КОРОТКОЙ БИОГРАФИИ */
.ks-bio__frame {
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 250px;
  width: 488px;
}
.ks-bio__background {
  background: var(--photo-background);
  border: 3rem solid var(--general-background);
  display: flex;
  justify-content: center;
  border-radius: 250px;
  overflow: hidden;
  padding-top: 32px;
  height: 712px;
  width: 100%;
}
.ks-bio-image {
  background: unset;
  user-select: none;
}
</style>
