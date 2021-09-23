<template>
  <div class="ks-contacts">
    <div class="ks-contacts__wrap">
      <div class="ks-contacts__waves">
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
      <div class="ks-contacts__bubble">
        <img
          class="ks-contacts__bubble-img"
          src="@/assets/img/graphics/bubble.png"
          alt="Лекала волн"
          draggable="false"
        />
      </div>
    </div>
    <div v-if="modalVisibility" class="ks-contacts__modal">
      <button class="ks-contacts__modal-close" @click="modalVisibility = false">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.0114 18.0004L5.75586 28.2559L7.74486 30.2449L18.0004 19.9894L28.2559 30.2449L30.2449 28.2559L19.9894 18.0004L30.2449 7.74486L28.2559 5.75586L18.0004 16.0114L7.74486 5.75586L5.75586 7.74486L16.0114 18.0004Z"
          />
        </svg>
      </button>
      <h1 class="ks-contacts__modal-header">Контактные данные</h1>
      <p class="ks-contacts__modal-place">Москва, Россиия</p>
      <hr class="ks-contacts__modal-driver" />
      <div class="ks-contacts__modal-info">
        <div class="ks-contacts__modal-col">
          <p class="ks-contacts__modal-col-title">СОЦИАЛЬНЫЕ СЕТИ</p>
          <a class="ks-contacts__modal-col-link" href="#">Telegram</a>
          <a class="ks-contacts__modal-col-link" href="#">ВКонтакте</a>
          <a class="ks-contacts__modal-col-link" href="#">Facebook</a>
          <a class="ks-contacts__modal-col-link" href="#">WhatsApp</a>
        </div>
        <div class="ks-contacts__modal-col">
          <p class="ks-contacts__modal-col-title">СПОСОБЫ СВЯЗИ</p>
          <p class="ks-contacts__modal-col-text">+7 (926) 587-42-27</p>
          <a class="ks-contacts__modal-col-link" href="mailto:kosoplechev@mail.ru">kosoplechev@mail.ru</a>
        </div>
      </div>
    </div>
    <!-- <div v-if="modalVisibility" class="ks-modal-background"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalVisibility: false,
    }
  },
}
</script>

<style>
/* СТИЛИ ФОНА МОДАЛЬНОГО ОКНА */
/* .ks-modal-background {
  background-color: #000;
  opacity: 0.5;
  width: calc(100vw - 8px);
  min-height: 100vh;
  position: absolute;
  z-index: 5;
} */
/* СТИЛИ МОДАЛЬНОГО ОКНА */
.ks-contacts__modal {
  width: 100%;
  height: 536px;
  padding: 36px 112px;
  position: absolute;
  z-index: 6;
  border-radius: 4px;
  background-color: #eeebe9;
}
.ks-contacts__modal-close {
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease;
  color: #000;
  position: absolute;
  right: 124px;
  background-color: #eeebe9;
}
.ks-contacts__modal-close svg {
  background-color: #eeebe9;
}
.ks-contacts__modal-close svg path {
  fill: currentColor;
  background-color: #eeebe9;
}
.ks-contacts__modal-close:hover {
  transform: rotate(90deg);
  color: var(--color-primary);
}
.ks-contacts__modal-header {
  width: 100%;
  font-size: 7rem;
  text-align: center;
  padding: 36px 0;
  background-color: unset;
}
.ks-contacts__modal-place {
  width: 100%;
  text-align: center;
  background-color: unset;
  margin-top: -16px;
  margin-bottom: 36px;
}
.ks-contacts__modal-driver {
  width: 100%;
  border-top: 2px solid #000;
}
.ks-contacts__modal-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  justify-content: flex-start;
  background-color: unset;
}
.ks-contacts__modal-col {
  display: flex;
  width: 50%;
  padding: 16px 36px;
  flex-direction: column;
  align-items: flex-start;
  background-color: unset;
}
.ks-contacts__modal-col-title {
  font-family: var(--montserrat);
  color: var(--color-secondary);
  background-color: unset;
  margin-bottom: 24px;
}
.ks-contacts__modal-col-link {
  color: #000;
  font-size: 3rem;
  margin-bottom: 16px;
  text-decoration: none;
  transition: all 0.4s ease;
  position: relative;
}
.ks-contacts__modal-col-link::after {
  background: none repeat scroll 0 0 transparent;
  bottom: -4px;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: var(--color-primary);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.ks-contacts__modal-col-link:hover {
  color: var(--color-primary);
}
.ks-contacts__modal-col-link:hover::after {
  width: 100%;
  left: 0;
}
.ks-contacts__modal-col-text {
  color: #000;
  font-size: 3rem;
  margin-bottom: 16px;
  background-color: unset;
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
  left: -64px;
  bottom: 64px;
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
  -webkit-background-clip: text;
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
