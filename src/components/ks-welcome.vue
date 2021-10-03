<template>
  <div class="ks-welcome">
    <div class="ks-welcome__text" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <ks-welcome-text-item title="ЖИЗНЕННАЯ ПОЗИЦИЯ">
        <p class="ks-welcome__text-description">
          Если бы мне дали абсолютную власть,
          <br />
          я бы привнёс в этот мир честности
        </p>
      </ks-welcome-text-item>
      <ks-welcome-text-item title="КОНТАКТЫ">
        <p class="ks-welcome__text-description">
          Москва, Россия
          <br />
          <a class="ks-welcome__text-description--mail" href="mailto:kosoplechev@mail.ru">kosoplechev@mail.ru</a>
          <br />
          +7 (926) 587-42-27
        </p>
      </ks-welcome-text-item>
      <ks-welcome-text-item title="ДОЛЖНОСТЬ">
        <p class="ks-welcome__text-description">Директор Колледжа РГСУ</p>
      </ks-welcome-text-item>
    </div>
    <div class="ks-welcome__photo" data-aos="fade-up" data-aos-duration="2000">
      <div class="ks-welcome__frame">
        <div
          class="ks-welcome__waves"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <img class="ks-welcome__waves--img" src="@/assets/img/graphics/waves.png" alt="Лекала волн" draggable="false" />
        </div>
        <div class="ks-welcome__frame--background">
          <img
            class="ks-welcome__frame--img"
            src="@/assets/img/main-1-1.png"
            alt="Косоплечев Алексей Владимирович"
            draggable="false"
          />
        </div>
        <div class="ks-welcome__bubble">
          <img class="ks-welcome__bubble--img" src="@/assets/img/graphics/bubble.png" alt="Лекала волн" draggable="false" />
        </div>
      </div>
    </div>
    <div class="ks-welcome__numbers" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <ks-welcome-numbers-item title="ОПЫТ РАБОТЫ">
        <p class="ks-welcome__text-number">>15</p>
      </ks-welcome-numbers-item>
      <ks-welcome-numbers-item title="ПРОДУКТИВНОСТЬ">
        <p class="ks-welcome__text-number">100%</p>
      </ks-welcome-numbers-item>
      <ks-welcome-numbers-item title="НАВЫКИ">
        <p class="ks-welcome__text-number">30+</p>
      </ks-welcome-numbers-item>
    </div>
  </div>
</template>

<script>
import KsWelcomeTextItem from '@/components/ks-welcome-components/ks-welcome-text-item'
import KsWelcomeNumbersItem from '@/components/ks-welcome-components/ks-welcome-numbers-item'

export default {
  components: {
    KsWelcomeTextItem,
    KsWelcomeNumbersItem,
  },
  data() {
    return {}
  },
}
</script>

<style>
.ks-welcome {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8rem 0;
}
.ks-welcome__photo {
  display: flex;
  z-index: 1;
}
.ks-welcome__waves {
  background: unset;
  height: fit-content;
  position: absolute;
  top: 264px;
  left: -124px;
  z-index: 4;
}
.ks-welcome__waves--img {
  background: unset;
  user-select: none;
}
.ks-welcome__bubble {
  background: unset;
  height: fit-content;
  position: absolute;
  bottom: 0;
  right: -168px;
  z-index: -1;
  mix-blend-mode: exclusion;
}
.ks-welcome__bubble--img {
  background: unset;
  user-select: none;
}
.ks-welcome__frame {
  border: 1px solid #000;
  border-radius: 45rem;
  width: 61rem;
  height: fit-content;
  position: relative;
  z-index: 1;
}
.ks-welcome__frame--background {
  /* height: 720px; -- Размер для main-1 */
  height: 688px;
  overflow: hidden;
  border-radius: 45rem;
  border: 3rem solid var(--general-background);
  background: var(--photo-background);
  display: flex;
  justify-content: center;
  z-index: 3;
}
.ks-welcome__frame--img {
  /* height: 920px;
  margin-top: 32px; -- Размер для main-1 */
  height: 584px;
  margin-top: 64px;
  background: unset;
  position: relative;
  user-select: none;
}
.ks-welcome__text {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.ks-welcome__text-description {
  font-size: 3rem;
  margin-top: 4rem;
}
.ks-welcome__text-description--mail {
  font-size: 3rem;
  color: black;
  text-decoration: none;
  transition: all 0.6s ease;
}
.ks-welcome__text-description--mail:hover {
  color: var(--color-primary);
}
.ks-welcome__numbers {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.ks-welcome__text-number {
  font-size: 9rem;
  margin-top: 4rem;
}
@media screen and (max-width: 800px) {
  .ks-welcome {
    flex-direction: column;
  }
  .ks-welcome__text {
    width: 90%;
    margin-left: 32px;
  }
  .ks-welcome__frame {
    width: 100%;
  }
  .ks-welcome__frame--background {
    height: 680px;
  }
  .ks-welcome__numbers {
    width: 90%;
    margin-left: 32px;
  }
}
</style>
