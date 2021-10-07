<template>
  <ks-block-title title="Навыки и умения" />
  <div class="ks-skills" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
    <div class="ks-small-block">
      <div class="bio-column">
        <h4 class="ks-skills__header">МЕНЕДЖМЕНТ</h4>
        <div class="ks-skills__container">
          <ks-skills-progressive-bar title="Административное управление" percent="76" />
          <ks-skills-progressive-bar title="Публичные выступления" percent="94" />
          <ks-skills-progressive-bar title="Управление командой" percent="83" />
          <ks-skills-progressive-bar title="Управленческие навыки" percent="87" />
        </div>
      </div>
      <div class="bio-column">
        <h4 class="ks-skills__header">ИНСТРУМЕНТЫ</h4>
        <div class="ks-skills__container">
          <ks-skills-progressive-bar title="Ведение переговоров" percent="98" />
          <ks-skills-progressive-bar title="Организация мероприятий" percent="88" />
          <ks-skills-progressive-bar title="Социологические исследования" percent="56" />
          <ks-skills-progressive-bar title="Обучение и развитие" percent="92" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KsBlockTitle from '@/components/helpers-components/ks-block-title.vue'
import KsSkillsProgressiveBar from '@/components/ks-skills-components/ks-skills-progressive-bar.vue'

export default {
  components: {
    KsBlockTitle,
    KsSkillsProgressiveBar,
  },
}
</script>

<style>
.ks-skills {
  width: 100%;
  margin-bottom: 64px;
}
.ks-skills__header {
  font-size: 2rem;
  font-family: var(--montserrat);
  font-weight: var(--montserrat-extra-light);
  color: var(--color-secondary);
  margin-bottom: 3rem;
  width: 100%;
}
.ks-skills__container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
