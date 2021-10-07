<template>
  <ks-block-title title="Образование и опыт" />
  <div class="ks-experience">
    <div class="ks-experience__col" data-aos="fade-up-right" data-aos-duration="2000">
      <p class="ks-experience__col-timeline">ОПЫТ РАБОТЫ: 2005 - 2010</p>
      <div class="ks-experience__col-item">
        <h4 class="ks-experience__col-header">ВЗАО "АСЭН"</h4>
        <p class="ks-experience__col-position">Начальник информационно-аналитического отдела</p>
      </div>
    </div>
    <div class="ks-experience__col" data-aos="fade-up" data-aos-duration="2000">
      <p class="ks-experience__col-timeline">2010 - 2016</p>
      <div class="ks-experience__col-item">
        <h4 class="ks-experience__col-header">Российский государственный социальный университет</h4>
        <p class="ks-experience__col-position">
          Заместитель декана факультета по работе со студентами, персоналом и организации практики
        </p>
      </div>
    </div>
    <div class="ks-experience__col" data-aos="fade-up-left" data-aos-duration="2000">
      <p class="ks-experience__col-timeline">2016 - ПО НАСТОЯЩЕЕ ВРЕМЯ</p>
      <div class="ks-experience__col-item">
        <h4 class="ks-experience__col-header">Российский государственный социальный университет</h4>
        <p class="ks-experience__col-position">Директор Колледжа РГСУ</p>
        <p class="ks-experience__col-position">Директор Чемпионата РГСУ по стандартам Ворлдскиллс Россия</p>
        <p class="ks-experience__col-position">
          Региональный эксперт, союз «Молодые профессионалы (Ворлдскиллс Россия)», компетенция «Администрирование отеля»
        </p>
        <p class="ks-experience__col-position">Преподаватель</p>
      </div>
    </div>
  </div>
  <div class="ks-experience">
    <div class="ks-experience__col" data-aos="fade-up-right" data-aos-duration="2000">
      <div class="ks-experience__col-item">
        <h4 class="ks-experience__col-header">Московский государственный университет экономики, статистики и информатики</h4>
        <p class="ks-experience__col-position">Управление персоналом/Развитие человеческих ресурсов (2005)</p>
      </div>
    </div>
    <div class="ks-experience__col" data-aos="fade-up" data-aos-duration="2000">
      <div class="ks-experience__col-item">
        <h4 class="ks-experience__col-header">Российский государственный социальный университет</h4>
        <p class="ks-experience__col-position">Социального управления и социологии, Туризм/Магистр (2014)</p>
        <p class="ks-experience__col-position">
          Лауреат общегородского конкурса «Молодой преподаватель ВУЗа» Московской городской организации Профсоюза работников
          народного образования и науки РФ в номинации «Лучшее эссе» в 2016 г.
        </p>
      </div>
    </div>
    <div class="ks-experience__col" data-aos="fade-up-left" data-aos-duration="2000">
      <div class="ks-experience__col-item">
        <h4 class="ks-experience__col-header">Российский университет кооперации</h4>
        <p class="ks-experience__col-position">Аспирант 08.00.05 Экономика и управление народным хозяйством (с 2021)</p>
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
.ks-experience {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 56px;
  grid-template-areas: '. . .';
  margin-bottom: 64px;
}
.ks-experience__col-timeline {
  font-size: 2rem;
  font-family: var(--montserrat);
  font-weight: var(--montserrat-extra-light);
  color: var(--color-secondary);
  margin-bottom: 5rem;
}
.ks-experience__col-item {
  margin-bottom: 5rem;
}
.ks-experience__col-header {
  font-size: 3rem;
  margin-bottom: 2rem;
}
.ks-experience__col-position {
  margin-bottom: 2rem;
  font-family: var(--montserrat);
  font-weight: var(--montserrat-extra-regular);
  color: #000;
  line-height: 140%;
}
@media screen and (max-width: 800px) {
  .ks-experience {
    display: flex;
    flex-direction: column;
  }
}
</style>
