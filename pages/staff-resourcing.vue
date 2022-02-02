<template>
  <section>
    <div
      class=" d-flex align-center justify-center flex-column text-center
       hero" >
      <div style="max-width:1440px" class=" px-4 centerItems">
        <h3>Recruiting your Business Heroes</h3>
      </div>
      
    </div>
    <staff-resourcing-section-two/>
    <engage-us title="Engage Us for your Business Needs" :bg-color="'rgba(0, 0, 0, 0.5)'"/>

  </section>
</template>

<script>
import EngageUs from '../components/BusinessConsulting/EngageUs.vue'
import StaffResourcingSectionTwo from '../components/StaffResourcing/staffResourcingSectionTwo.vue'
export default {
  components: { EngageUs, StaffResourcingSectionTwo },

}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/heroImage.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    background-position: center center;  
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
</style>