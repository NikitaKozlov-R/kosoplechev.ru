<template>
  <div class="wrapper">
    <ks-header />
    <ks-heading-bio />
    <div class="ks-bio__col">
      <ks-bio-chapter title="Детство" timeline="1983 - 1995 гг.">
        <p class="ks-bio__bblock-text">
          Я родился и вырос в Восточном округе Москвы. Мои дедушка с бабушкой приехали в столицу в военный период:
          бабушка как боец ополчения, дедушка в качестве разнорабочего. Позже у них родилась моя мама.
          <br />
          <br />
          Семья, в которой я рос, была среднестатистической семьёй пролетариев. Отца я никогда не видел, только
          разговаривал с ним один раз по телефону, в возрасте пяти лет.  Мама часто была на работе, поэтому я рос с
          бабушкой, женщиной строгих правил. Благодаря её воспитанию 90-ые для меня прошли относительно спокойно.
          <br />
          <br />
          В школе я не был популярным. Мне было сложно общаться с остальными ребятами, тяжело находить с ними общий
          язык.
        </p>
      </ks-bio-chapter>
    </div>
  </div>
</template>

<script>
import KsHeader from '@/components/ks-header.vue'
import KsHeadingBio from '@/components/biography/ks-heading-bio.vue'
import KsBioChapter from '@/components/biography/ks-bio-chapter.vue'

export default {
  components: {
    KsHeader,
    KsHeadingBio,
    KsBioChapter,
  },
}
</script>

<style>
.ks-bio__col {
  width: 100%;
  padding: 0 160px;
  margin-bottom: 16rem;
}
</style>
