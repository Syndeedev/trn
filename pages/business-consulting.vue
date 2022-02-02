<template>
  <div>
     <section class="section">
    <div
      class=" d-flex align-center justify-center flex-column text-center
       hero" >
      <div style="max-width:1440px" class=" px-4 centerItems">
        <h3>Exceeding Your Business Expectation</h3>
      </div>
      
    </div>
    <section-two/>
    <engage-us title="Engage Us for your Business Needs" :bg-color="'rgba(0, 0, 255, 0.30)'"/>

    <div class="vector">
         <img src="~/assets/vectorThree.svg">
     </div>
  </section>
  </div>
</template>

<script>
import EngageUs from '../components/BusinessConsulting/EngageUs.vue'
import sectionTwo from '../components/BusinessConsulting/sectionTwo.vue'
export default {
  components: { sectionTwo, EngageUs },

}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/business.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    background-position: center left;  
    margin-bottom: 100px;
     h3{
          font-weight: 800;
          max-width: 700px;
        font-size: 44px;
        line-height: 60px;
       @media (max-width: 768px) {
           font-size: 40px;
        line-height: 50px;
       }
       @media (max-width: 320px) {
           font-size: 30px;
        line-height: 35px;
       }
     }
}
.centerItems{
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
}
.section{
  position: relative;
}
.vector{
    position: absolute;
    bottom: 20%;
    // left: -18%;
}
</style>