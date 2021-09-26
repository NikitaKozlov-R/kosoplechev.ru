<template>
  <div class="ks-contacts__modal">
    <button class="ks-contacts__modal-close" @click="$emit('modalHandler')">
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
</template>

<script>
export default {}
</script>

<style>
/* СТИЛИ МОДАЛЬНОГО ОКНА */
.ks-contacts__modal {
  width: 100%;
  height: 536px;
  padding: 36px 112px;
  position: absolute;
  z-index: 6;
  border-radius: 4px;
  background-color: #eeebe9;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
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
  text-decoration: underline;
  transition: all 0.4s ease;
  position: relative;
}
.ks-contacts__modal-col-link::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 2px;
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
@media screen and (max-width: 800px) {
  .ks-contacts__modal {
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: auto;
  }
  .ks-contacts__modal-close {
    right: 16px;
    top: 8px;
  }
  .ks-contacts__modal-header {
    font-size: 5rem;
  }
  .ks-contacts__modal-driver {
    width: 90%;
  }
  .ks-contacts__modal-info {
    flex-direction: column;
  }
  .ks-contacts__modal-col {
    width: 90%;
  }
}
</style>
