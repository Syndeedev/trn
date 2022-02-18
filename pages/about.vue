<template>
<section>
    <hero-section/>
    <core-values/>
</section>
  
</template>

<script>
import CoreValues from '../components/About/CoreValues.vue'
import HeroSection from '../components/About/HeroSection.vue'
export default {
  components: { HeroSection, CoreValues },

}
</script>

<style lang="scss" scoped>

</style>