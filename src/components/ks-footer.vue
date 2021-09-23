<template>
  <footer class="ks-footer">
    <div class="ks-footer__rights">
      <p class="ks-footer__rights-text">© {{ year }} Все права защищены</p>
      <p class="ks-footer__rights-text">
        Develop by
        <a class="ks-footer__rights-link" href="#">Nikita Kozlov</a>
      </p>
    </div>
    <div class="ks-footer__logo"></div>
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
  </footer>
</template>

<script>
import TelegramIcon from '@/components/svg/telegram-icon.vue'
import VkIcon from '@/components/svg/vk-icon.vue'
import FacebookIcon from '@/components/svg/facebook-icon.vue'
import WhatsappIcon from '@/components/svg/whatsapp-icon.vue'

export default {
  components: {
    TelegramIcon,
    VkIcon,
    FacebookIcon,
    WhatsappIcon,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style>
.ks-footer {
  height: 27rem;
  width: 100%;
  border-top: 2px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.ks-footer__rights {
}
.ks-footer__logo {
}
</style>
