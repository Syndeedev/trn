<template>
  <section>
    <div
      class=" d-flex align-center justify-center flex-column text-center
       hero" >
      <div style="max-width:1440px" class=" px-4 centerItems">
        <h3>Delivering Beyond Expectation</h3>
      </div>
    </div>
    <PMSectionTwo/>
    <engage-us component-name="ProjectManagement" 
    title="Engage Us for your Projects" 
    :bg-color="'rgba(50, 210, 50, 0.5)'"
    @project="submit($event)" />

     <snackbar :snackbar="openSnackBar" @closeSnackBar="openSnackBar = $event"/>

  </section>
</template>

<script>
import EngageUs from '~/components/BusinessConsulting/EngageUs.vue'
import PMSectionTwo from '~/components/ProjectManagement/PMSectionTwo.vue'
import Snackbar from '../components/reusables/snackbar.vue'
export default {
  components: { EngageUs, PMSectionTwo, Snackbar },
  data(){
    return{
     openSnackBar: false
    }
  },
  methods:{
    submit(value){
            try{
                this.$fire.firestore.collection("project_management").
                doc().set(value)
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
    background-image: url("~/assets/project.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    background-position: center center;  
    // margin-bottom: 100px;
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