<template>
  <header class="ks-header">
    <menu class="ks-menu">
      <a href="/" class="ks-menu__item active">ГЛАВНАЯ</a>
      <a href="#" class="ks-menu__item">БИОГРАФИЯ</a>
      <a href="#" class="ks-menu__item">РЕЗЮМЕ</a>
    </menu>
    <div class="ks-logo">
      <ks-logo />
    </div>
    <div class="ks-socials">
      <div class="ks-socials__icon">
        <telegram-icon />
      </div>
      <div class="ks-socials__icon">
        <vk-icon />
      </div>
      <div class="ks-socials__icon">
        <facebook-icon />
      </div>
      <div class="ks-socials__icon">
        <whatsapp-icon />
      </div>
    </div>
  </header>
</template>

<script>
import KsLogo from '@/components/svg/ks-logo.vue'
import TelegramIcon from '@/components/svg/telegram-icon.vue'
import VkIcon from '@/components/svg/vk-icon.vue'
import FacebookIcon from '@/components/svg/facebook-icon.vue'
import WhatsappIcon from '@/components/svg/whatsapp-icon.vue'

export default {
  components: {
    KsLogo,
    TelegramIcon,
    VkIcon,
    FacebookIcon,
    WhatsappIcon,
  },
  data() {
    return {}
  },
}
</script>

<style>
.ks-header {
  width: 100%;
  height: 27rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ks-menu {
  display: flex;
  align-items: center;
  width: 60rem;
}
.ks-menu__item {
  font-family: var(--montserrat);
  font-weight: var(--montserrat-semi-bold);
  font-size: 2rem;
  text-decoration: none;
  color: #000;
  margin: 0 8rem 0 0;
  transition: all 0.6s ease;
  position: relative;
  display: inline-block;
  outline: none;
}
.ks-menu__item::after {
  content: '';
  position: absolute;
  left: 45%;
  top: 1rem;
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0;
  transition: 0.6s ease;
}
.ks-menu__item:hover::after {
  opacity: 1;
  transform: translateY(3rem);
}
.ks-menu__item.active:hover::after {
  opacity: 1;
  transform: translateY(0);
}
.ks-menu__item.active {
  color: var(--color-primary);
}
.ks-menu__item.active::after {
  content: '';
  position: absolute;
  left: 45%;
  top: 4rem;
  width: 6px;
  height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 1;
}
.ks-menu__item:hover {
  color: var(--color-primary);
}
.ks-socials {
  display: flex;
  align-items: center;
  width: 60rem;
  justify-content: flex-end;
}
.ks-socials__icon {
  margin: 0 0 0 3rem;
}
</style>
