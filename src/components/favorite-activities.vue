<template>
  <ks-block-title title="Любимые занятия" />
  <div class="ks-hobbie">
    <div class="ks-hobbie__container">
      <div class="ks-hobbie__icons">
        <img class="ks-hobbie__icons-item" src="@/assets/img/graphics/giraffe.png" alt="Жирафы" />
        <img class="ks-hobbie__icons-item" src="@/assets/img/graphics/chess.png" alt="Шахматы" />
        <img class="ks-hobbie__icons-item" src="@/assets/img/graphics/video-game.png" alt="Видео-игры" />
        <img class="ks-hobbie__icons-item" src="@/assets/img/graphics/volleyball.png" alt="Волейбол" />
        <img class="ks-hobbie__icons-item" src="@/assets/img/graphics/guitar.png" alt="Гитара" />
      </div>
      <div class="ks-hobbie__titles">
        <p class="ks-hobbie__titles-item">Жирафы</p>
        <p class="ks-hobbie__titles-item">Шахматы</p>
        <p class="ks-hobbie__titles-item">Видео-игры</p>
        <p class="ks-hobbie__titles-item">Волейбол</p>
        <p class="ks-hobbie__titles-item">Гиатара</p>
      </div>
    </div>
  </div>
</template>

<script>
import KsBlockTitle from '@/components/helpers-components/ks-block-title.vue'

export default {
  components: {
    KsBlockTitle,
  },
}
</script>

<style>
.ks-hobbie {
  width: 100%;
  padding: 40px 0;
  background-color: #eeebe9;
  border-radius: 4px;
  margin-bottom: 64px;
}
.ks-hobbie__container {
  width: 100%;
  background-color: #eeebe9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 160px;
}
.ks-hobbie__icons {
  width: 100%;
  mix-blend-mode: luminosity;
  background-color: #eeebe9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
}
.ks-hobbie__icons-item {
  background-color: #eeebe9;
}
.ks-hobbie__titles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #eeebe9;
  width: 100%;
}
.ks-hobbie__titles-item {
  background-color: #eeebe9;
  width: 128px;
  text-align: center;
}
</style>
