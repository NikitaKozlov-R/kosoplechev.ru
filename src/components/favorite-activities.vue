<template>
  <ks-block-title title="Любимые занятия" />
  <div class="ks-hobbie" data-aos="fade-up" data-aos-duration="2000">
    <transition name="slide-sides">
      <div v-if="giraffeVisibility" class="ks-hobbie__photo">
        <button class="ks-hobbie__photo-close" @click="hidePicture">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0114 18.0004L5.75586 28.2559L7.74486 30.2449L18.0004 19.9894L28.2559 30.2449L30.2449 28.2559L19.9894 18.0004L30.2449 7.74486L28.2559 5.75586L18.0004 16.0114L7.74486 5.75586L5.75586 7.74486L16.0114 18.0004Z"
            />
          </svg>
        </button>
        <img class="ks-hobbie__photo-img" src="@/assets/img/giraffe.jpg" alt="Жирафы" draggable="false" />
      </div>
    </transition>
    <transition name="slide-sides">
      <div v-if="chessVisibility" class="ks-hobbie__photo">
        <button class="ks-hobbie__photo-close" @click="hidePicture">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0114 18.0004L5.75586 28.2559L7.74486 30.2449L18.0004 19.9894L28.2559 30.2449L30.2449 28.2559L19.9894 18.0004L30.2449 7.74486L28.2559 5.75586L18.0004 16.0114L7.74486 5.75586L5.75586 7.74486L16.0114 18.0004Z"
            />
          </svg>
        </button>
        <img class="ks-hobbie__photo-img" src="@/assets/img/chess.jpg" alt="Шахматы" draggable="false" />
      </div>
    </transition>
    <transition name="slide-sides">
      <div v-if="gamesVisibility" class="ks-hobbie__photo">
        <button class="ks-hobbie__photo-close" @click="hidePicture">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0114 18.0004L5.75586 28.2559L7.74486 30.2449L18.0004 19.9894L28.2559 30.2449L30.2449 28.2559L19.9894 18.0004L30.2449 7.74486L28.2559 5.75586L18.0004 16.0114L7.74486 5.75586L5.75586 7.74486L16.0114 18.0004Z"
            />
          </svg>
        </button>
        <img class="ks-hobbie__photo-img" src="@/assets/img/video-games.jpg" alt="Видео-игры" draggable="false" />
      </div>
    </transition>
    <transition name="slide-sides">
      <div v-if="valleyballVisibility" class="ks-hobbie__photo">
        <button class="ks-hobbie__photo-close" @click="hidePicture">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0114 18.0004L5.75586 28.2559L7.74486 30.2449L18.0004 19.9894L28.2559 30.2449L30.2449 28.2559L19.9894 18.0004L30.2449 7.74486L28.2559 5.75586L18.0004 16.0114L7.74486 5.75586L5.75586 7.74486L16.0114 18.0004Z"
            />
          </svg>
        </button>
        <img class="ks-hobbie__photo-img" src="@/assets/img/valleyball.jpg" alt="Волейбол" draggable="false" />
      </div>
    </transition>
    <transition name="slide-sides">
      <div v-if="guitarVisibility" class="ks-hobbie__photo">
        <button class="ks-hobbie__photo-close" @click="hidePicture">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.0114 18.0004L5.75586 28.2559L7.74486 30.2449L18.0004 19.9894L28.2559 30.2449L30.2449 28.2559L19.9894 18.0004L30.2449 7.74486L28.2559 5.75586L18.0004 16.0114L7.74486 5.75586L5.75586 7.74486L16.0114 18.0004Z"
            />
          </svg>
        </button>
        <img class="ks-hobbie__photo-img" src="@/assets/img/guitar.jpg" alt="Гитара" draggable="false" />
      </div>
    </transition>
    <div class="ks-hobbie__container">
      <div class="ks-hobbie__icons">
        <div class="ks-hobbie__icons-box">
          <ks-giraffe @click="showPicture('giraffe')" />
          <p class="ks-hobbie__title">Жирафы</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-chess @click="showPicture('chess')" />
          <p class="ks-hobbie__title">Шахматы</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-video-games @click="showPicture('games')" />
          <p class="ks-hobbie__title">Видео-игры</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-valleyball @click="showPicture('valleyball')" />
          <p class="ks-hobbie__title">Волейбол</p>
        </div>
        <div class="ks-hobbie__icons-box">
          <ks-guitar @click="showPicture('guitar')" />
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

const dataMapper = {
  giraffe: 'giraffeVisibility',
  chess: 'chessVisibility',
  games: 'gamesVisibility',
  valleyball: 'valleyballVisibility',
  guitar: 'guitarVisibility',
}

export default {
  components: {
    KsBlockTitle,
    KsGiraffe,
    KsChess,
    KsVideoGames,
    KsValleyball,
    KsGuitar,
  },
  data: () => ({
    giraffeVisibility: false,
    chessVisibility: false,
    gamesVisibility: false,
    valleyballVisibility: false,
    guitarVisibility: false,
  }),
  methods: {
    showPicture(item) {
      this.hidePicture()
      this[dataMapper[item]] = true
    },
    hidePicture() {
      Object.entries(dataMapper).forEach(([key, value]) => {
        this[value] = false
      })
    },
  },
}
</script>

<style>
/* СТИЛИ АНИМАЦИИ */
.slide-sides-enter-active {
  transition: all 0.6s ease-out;
}
.slide-sides-leave-active {
  transition: all 0.6s ease-out;
}
.slide-sides-enter-from {
  transform: translate(-112px);
  opacity: 0;
}
.slide-sides-leave-to {
  transform: translate(112px);
  opacity: 0;
}
/* СТИЛИ ДЛЯ КОМПОНЕНТА */
.ks-hobbie {
  width: 100%;
  padding: 40px 0;
  background-color: #eeebe9;
  border-radius: 4px;
  margin-bottom: 64px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
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
.ks-hobbie__photo {
  position: absolute;
  z-index: 10;
  height: 72vh;
  top: -32px;
}
.ks-hobbie__photo-close {
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.4s ease;
  color: #000;
  position: absolute;
  right: 0px;
  top: 0px;
  background-color: unset;
}
.ks-hobbie__photo-close svg {
  background-color: unset;
}
.ks-hobbie__photo-close svg path {
  fill: currentColor;
  background-color: unset;
}
.ks-hobbie__photo-close:hover {
  transform: rotate(90deg);
  color: var(--color-primary);
}
.ks-hobbie__photo-img {
  height: 72vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
  .ks-hobbie__photo {
    height: auto;
    display: none;
  }
  .ks-hobbie__photo-img {
    height: auto;
    width: 90vw;
  }
}
</style>
