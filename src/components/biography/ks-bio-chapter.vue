<template>
  <div class="ks-bio__bblock">
    <div
      class="ks-bio__bblock-left"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div class="ks-bio__bblock-title">
        <h4 class="ks-bio__bblock-title-text">{{ title }}</h4>
        <p class="ks-bio__bblock-title-time">{{ timeline }}</p>
      </div>
      <div class="ks-bio__bblock-vdriver">
        <div class="ks-bio__bblock-rect"></div>
        <div class="ks-bio__bblock-line"></div>
      </div>
    </div>
    <div class="ks-bio__bblock-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    timeline: {
      required: true,
      type: String,
    },
  },
}
</script>

<style>
.ks-bio__bblock {
  display: flex;
  flex-direction: row;
  gap: 4rem;
  width: 100%;
}
@media screen and (max-width: 800px) {
  .ks-bio__bblock {
    gap: 2rem;
    flex-direction: column;
  }
}
.ks-bio__bblock-left {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media screen and (max-width: 800px) {
  .ks-bio__bblock-left {
    width: 100%;
  }
}
.ks-bio__bblock-title {
  display: flex;
  flex-direction: column;
}
.ks-bio__bblock-title-text {
  font-size: 3rem;
}
.ks-bio__bblock-title-time {
  font-family: var(--montserrat);
  font-size: 2rem;
  color: var(--color-secondary);
  margin-top: 16px;
}
.ks-bio__bblock-right {
  width: 70%;
  margin-top: -24px;
}
@media screen and (max-width: 800px) {
  .ks-bio__bblock-right {
    width: 100%;
  }
}
.ks-bio__bblock-text,
.ks-bio__bblock-text span {
  font-size: 2rem;
  margin-top: 24px;
  line-height: 160%;
}
.ks-bio__bblock-vdriver {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 800px) {
  .ks-bio__bblock-vdriver {
    display: none;
  }
}
.ks-bio__bblock-rect {
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-primary);
  border-radius: 16px;
}
.ks-bio__bblock-line {
  width: 2px;
  height: 100%;
  background-color: var(--color-primary);
}
</style>
