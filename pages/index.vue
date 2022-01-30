<template>
<div>
  <hero-section/>
  <section-two/>
  <section-three/>
  <section-four/>
  <partners/>
</div>
</template>

<script>
import HeroSection from '~/components/Home/HeroSection.vue'
import SectionFour from '~/components/Home/sectionFour.vue'
import SectionThree from '~/components/Home/sectionThree.vue'
import SectionTwo from '~/components/Home/sectionTwo.vue'
import Partners from '../components/Home/Partners.vue'
export default {
  components: { HeroSection,SectionTwo, SectionThree, SectionFour,Partners },
  name: 'IndexPage'
}
</script>
<style lang="scss" >

</style>
