<template>
  <div class="ks-block__title" data-aos="zoom-in" data-aos-duration="1000">
    <h1 class="ks-block__title-text">{{ title }}</h1>
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
.ks-block__title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 0;
}
.ks-block__title-text {
  font-size: 7rem;
  text-align: center;
}
</style>
