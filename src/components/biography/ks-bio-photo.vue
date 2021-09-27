<template>
  <div class="ks-bio__bphoto">
    <img class="ks-bio__bphoto-img" :src="url" :alt="alt" :title="alt" draggable="false" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      required: true,
      type: String,
    },
    alt: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      url: require('@/assets/img/' + this.imgUrl),
    }
  },
}
</script>

<style>
.ks-bio__bphoto {
  width: 100%;
  margin-top: 56px;
}
.ks-bio__bphoto-img {
  width: 100%;
  border-radius: 4px;
}
</style>
