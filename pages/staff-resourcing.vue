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
    <engage-us component-name="StaffResourcing" 
    title="Engage us for Staff Resourcing" 
    :bg-color="'rgba(0, 0, 0, 0.5)'"
    @staff="submit($event)"
    />
    <snackbar :snackbar="openSnackBar" @closeSnackBar="openSnackBar = $event"/>
  </section>
</template>

<script>
import EngageUs from '../components/BusinessConsulting/EngageUs.vue'
import Snackbar from '../components/reusables/snackbar.vue'
import StaffResourcingSectionTwo from '../components/StaffResourcing/staffResourcingSectionTwo.vue'
export default {
  data(){
    return{
     openSnackBar: false
    }
  },
  components: { EngageUs, StaffResourcingSectionTwo, Snackbar },
  methods:{
      submit(value){
              try{
                  this.$fire.firestore.collection("staff_resourcing").
                  doc(value.email).set(value)
                  this.openSnackBar = true 
              }
              catch(err){
                      console.log(err)
              }
      }
    }
}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/staff.png");
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