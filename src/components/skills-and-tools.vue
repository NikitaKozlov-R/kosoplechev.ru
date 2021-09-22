<template>
  <ks-block-title title="Навыки и умения" />
  <div class="ks-skills">
    <div class="ks-small-block">
      <div class="bio-column">
        <h4 class="ks-skills__header">МЕНЕДЖМЕНТ</h4>
        <div class="ks-skills__container">
          <ks-skills-progressive-bar title="Управление персоналом" percent="82" />
          <ks-skills-progressive-bar title="Работа с кадрами" percent="73" />
          <ks-skills-progressive-bar title="Публичные выступления" percent="96" />
          <ks-skills-progressive-bar title="Тайм-менеджмент" percent="57" />
        </div>
      </div>
      <div class="bio-column">
        <h4 class="ks-skills__header">ИНСТРУМЕНТЫ</h4>
        <div class="ks-skills__container">
          <ks-skills-progressive-bar title="Microsoft Outlook" percent="40" />
          <ks-skills-progressive-bar title="Английский язык С1" percent="63" />
          <ks-skills-progressive-bar title="Microsoft PowerPoint" percent="78" />
          <ks-skills-progressive-bar title="Trello, Slack" percent="27" />
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
  margin-bottom: 5rem;
  width: 100%;
}
.ks-skills__container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
