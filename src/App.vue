<template>
  <div class="wrapper">
    <ks-header />
    <ks-heading />
    <ks-welcome />
    <short-biography />
    <positions-and-education />
    <skills-and-tools />
    <favorite-activities />
    <ks-contacts />
    <ks-footer />
  </div>
</template>

<script>
import KsHeader from '@/components/ks-header.vue'
import KsHeading from '@/components/ks-heading.vue'
import KsWelcome from '@/components/ks-welcome.vue'
import ShortBiography from '@/components/short-biography.vue'
import PositionsAndEducation from '@/components/positions-and-education.vue'
import SkillsAndTools from '@/components/skills-and-tools.vue'
import FavoriteActivities from '@/components/favorite-activities.vue'
import KsContacts from '@/components/ks-contacts.vue'
import KsFooter from '@/components/ks-footer.vue'
import AOS from 'aos'

export default {
  name: 'App',
  components: {
    KsHeader,
    KsHeading,
    KsWelcome,
    ShortBiography,
    PositionsAndEducation,
    SkillsAndTools,
    FavoriteActivities,
    KsContacts,
    KsFooter,
  },
  created() {
    AOS.init()
  },
}
</script>

<style>
.wrapper {
  padding: 0 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}
</style>
