<template>
  <div class="ks-skills__item">
    <p class="ks-skills__item-title">{{ title }}</p>
    <div class="ks-skills__item-bar">
      <p class="ks-skills__item-bar-percent">{{ percentWidth }}</p>
      <div class="ks-skills__item-bar-line">
        <hr class="baseline" />
        <hr class="progressline" :style="{ width: percentWidth }" />
      </div>
    </div>
  </div>
</template>
<!-- <h1 :style="{ fontSize: percentWidth }">{{ percent }}</h1> -->

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    percent: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      percentWidth: this.percent + '%',
    }
  },
}
</script>

<style>
.ks-skills__item {
  height: 64px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.ks-skills__item-title {
  height: 24px;
  display: flex;
  align-items: flex-end;
  margin-bottom: -8px;
}
.ks-skills__item-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 240px;
  align-items: flex-end;
}
.ks-skills__item-bar-percent {
  margin-bottom: 4px;
}
.ks-skills__item-bar-line {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ks-skills__item-bar-line .baseline {
  height: 4px;
  width: 100%;
  background-color: var(--color-secondary);
  border: none;
  outline: none;
}
.ks-skills__item-bar-line .progressline {
  background-color: var(--color-primary);
  height: 4px;
  margin-top: -4px;
  border: none;
  outline: none;
}
</style>
