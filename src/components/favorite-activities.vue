<template>
  <ks-block-title title="Любимые занятия" />
  <div class="ks-hobbie" data-aos="fade-up" data-aos-duration="2000">
    <div class="ks-hobbie__container">
      <div class="ks-hobbie__icons">
        <div class="ks-hobbie__icons-box">
          <ks-giraffe />
          <p class="ks-hobbie__title">Жирафы</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-chess />
          <p class="ks-hobbie__title">Шахматы</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-video-games />
          <p class="ks-hobbie__title">Видео-игры</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-valleyball />
          <p class="ks-hobbie__title">Волейбол</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-guitar />
          <p class="ks-hobbie__title">Гиатара</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KsBlockTitle from '@/components/helpers-components/ks-block-title.vue'
import KsGiraffe from '@/components/svg/giraffe.vue'
import KsChess from '@/components/svg/chess.vue'
import KsVideoGames from '@/components/svg/video-games.vue'
import KsValleyball from '@/components/svg/volleyball.vue'
import KsGuitar from '@/components/svg/guitar.vue'

export default {
  components: {
    KsBlockTitle,
    KsGiraffe,
    KsChess,
    KsVideoGames,
    KsValleyball,
    KsGuitar,
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
  background-color: #eeebe9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
}
.ks-hobbie__icons-box {
  display: flex;
  flex-direction: column;
}
.ks-hobbie__icons-item {
  background-color: #eeebe9;
}
.ks-hobbie__icons-item svg {
  background-color: unset;
  transition: all 0.4s ease;
  cursor: pointer;
}
.ks-hobbie__icons-item svg:hover {
  transform: rotate(8deg) scale(1.4);
}
.ks-hobbie__title {
  background-color: #eeebe9;
  width: 128px;
  text-align: center;
  padding-top: 32px;
}
@media screen and (max-width: 800px) {
  .ks-hobbie {
    background-color: unset;
    padding: 40px 40px;
  }
  .ks-hobbie__container {
    padding: 16px 32px;
    border-radius: 8px;
  }
  .ks-hobbie__icons {
    flex-direction: column;
    align-items: center;
  }
  .ks-hobbie__title {
    width: 100%;
    padding-top: 16px;
  }
  .ks-hobbie__icons-box {
    margin-top: 64px;
  }
}
</style>
