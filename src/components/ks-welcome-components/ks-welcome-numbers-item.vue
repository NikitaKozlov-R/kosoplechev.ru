<template>
  <div class="ks-welcome__numbers-item">
    <h3 class="ks-welcome__text-header">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
.ks-welcome__numbers-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 160px;
}
.ks-welcome__text-header {
  font-size: 2rem;
  font-family: var(--montserrat);
  font-weight: var(--montserrat-extra-light);
  color: var(--color-secondary);
}
@media screen and (max-width: 800px) {
  .ks-welcome__numbers-item {
    align-items: flex-start;
    margin-top: 24px;
  }
}
</style>
