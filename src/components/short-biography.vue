<template>
  <ks-block-title title="История становления" />
  <div class="ks-small-block">
    <ks-short-biography-text />
  </div>
  <div class="ks-small-block">
    <div class="bio-column">
      <div class="ks-bio__quotation-mark">
        <p class="ks-bio__quotation-mark-text">“</p>
      </div>
      <div class="ks-bio__quote">
        <p class="ks-bio__quote-text">
          Работа крупного менеджера в том, чтобы поддерживать механизм изнутри. Моя задача – обеспечить людям всё для
          продуктивной и комфортной работы.
        </p>
        <hr class="ks-bio__quote-driver" />
        <img
          class="ks-bio__quote-signature"
          src="@/assets/img/graphics/signature.png"
          alt="Подпись Косоплечева Алексея Владимировича"
          draggable="false"
        />
      </div>
    </div>
    <div class="bio-column">
      <ks-short-biography-photo />
    </div>
  </div>
</template>

<script>
import KsBlockTitle from '@/components/helpers-components/ks-block-title.vue'
import KsShortBiographyText from '@/components/ks-short-biography-components/ks-short-biography-text.vue'
import KsShortBiographyPhoto from './ks-short-biography-components/ks-short-biography-photo.vue'

export default {
  components: {
    KsBlockTitle,
    KsShortBiographyText,
    KsShortBiographyPhoto,
  },
}
</script>

<style>
/* СТИЛИ БЛОКА ОГРАНИЧИВАЮЩЕГО ШИРИНУ */

.ks-small-block {
  width: 100%;
  padding: 0 160px;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
}

/* СТИЛИ БЛОКА ПОДПИСИ И ФОТОГРАФИИ */

/* Стили для кавычки */
.ks-bio__quotation-mark {
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: -72px;
  top: -24px;
  background: unset;
}
.ks-bio__quotation-mark-text {
  font-size: 18rem;
  background: unset;
}

/* Стили для цитаты и подписи */
.ks-bio__quote {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ks-bio__quote-text {
  font-size: 3rem;
  line-height: 4rem;
}
.ks-bio__quote-driver {
  width: 50%;
  border-top: 2px solid #000;
  margin: 5rem 0;
}
.ks-bio__quote-signature {
  width: 100%;
}
</style>
