<template>
  <div class="ks-contacts" data-aos="zoom-in" data-aos-duration="2000">
    <div class="ks-contacts__wrap">
      <div
        class="ks-contacts__waves"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <img class="ks-contacts__waves-img" src="@/assets/img/graphics/waves.png" alt="Лекала волн" draggable="false" />
      </div>
      <div class="ks-contacts__frame">
        <button class="ks-contacts__frame-btn" @click="modalVisibility = true">
          <p class="ks-contacts__frame-text">КОСОПЛЕЧЕВ АЛЕКСЕЙ ВЛАДИМИРОВИЧ —</p>
          <p class="ks-contacts__frame-text">МЕНЕДЖЕР & ОРГАНИЗАТОР</p>
          <h4 class="ks-contacts__frame-title">Связаться со мной</h4>
          <svg
            class="ks-contacts__frame-svg"
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M35 21L35 28L79.065 28L21 86.065L25.935 91L84 32.935L84 77L91 77L91 21L35 21Z" />
          </svg>
        </button>
      </div>
      <div
        class="ks-contacts__bubble"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <img class="ks-contacts__bubble-img" src="@/assets/img/graphics/bubble.png" alt="Лекала волн" draggable="false" />
      </div>
    </div>
    <transition name="slide-fade">
      <ks-contacts-modal v-if="modalVisibility" @modal-handler="modalVisibility = false" />
    </transition>
  </div>
</template>

<script>
import KsContactsModal from '@/components/ks-contacts-components/ks-contacts-modal.vue'

export default {
  components: {
    KsContactsModal,
  },
  data() {
    return {
      modalVisibility: false,
    }
  },
}
</script>

<style>
/* СТИЛИ АНИМАЦИИ */
.slide-fade-enter-active {
  transition: all 0.6s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.6s ease-out;
}
.slide-fade-enter-from {
  transform: scale(0.9);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: scale(1.1);
  opacity: 0;
}
/* СТИЛИ ОБЩЕЙ РАЗМЕТКИ БЛОКОВ */
.ks-contacts {
  padding: 64px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
.ks-contacts__wrap {
  z-index: 1;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
.ks-contacts__waves {
  position: absolute;
  z-index: 2;
  height: fit-content;
  width: fit-content;
  left: 0px;
  bottom: 24%;
}
.ks-contacts__bubble {
  position: absolute;
  z-index: 2;
  height: fit-content;
  width: fit-content;
  right: -112px;
  top: 8px;
  transform: rotate(-45deg);
}
.ks-contacts__frame {
  z-index: 3;
  position: relative;
  background-color: unset;
}
/* СТИЛИ ДЛЯ КНОПКИ */
.ks-contacts__frame-btn {
  border-radius: 100%;
  width: 536px;
  height: 536px;
  border: 2px dashed #000;
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  outline: none;
}
.ks-contacts__frame-text {
  font-size: 2rem;
  font-family: var(--montserrat);
  font-weight: var(--montserrat-extra-regular);
  color: var(--color-secondary);
  margin-bottom: 2rem;
  text-align: left;
}
.ks-contacts__frame-title {
  font-size: 7rem;
  text-align: left;
  margin: 2rem 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary) 50%, #000 50%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 600ms ease;
  text-decoration: none;
}
.ks-contacts__frame-title:hover {
  background-position: 0 100%;
}
.ks-contacts__frame-svg {
  fill: currentColor;
  color: #000;
  transition: all 0.4s ease;
}
.ks-contacts__frame-svg:hover {
  transform: rotate(-16deg);
  color: var(--color-primary);
}
</style>
