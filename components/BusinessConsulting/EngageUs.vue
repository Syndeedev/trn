<template>
  <section @mouseover="showForm = true"  class="mainDiv">
    <div class=" hero" >
        <div :style="{backgroundColor: bgColor}" :class="[showForm ? 'showFormLayer' : 'layer']" class="wrapper">
          <div class="inner">
            <h3 class="text-center">{{title}}</h3>
            <div v-if="showForm && componentName === 'ProjectManagement'" class="formCard">
              <form class="projectManagementForm" > 
                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Name</h2>
                            <v-text-field v-model="formData.name" solo ></v-text-field>

                        </div>
                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Company’s Name</h2>
                            <v-text-field v-model="formData.companyName" solo ></v-text-field>
                        </div>

                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Industry</h2>
                            <v-select
                            v-model="formData.industry" 
                            solo 
                            :items="highestDegree"></v-select>
                        </div>
                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Project Name</h2>
                            <v-text-field v-model="formData.projectName" solo ></v-text-field>
                        </div>
                        
                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Project Brief</h2>
                            <v-text-field v-model="formData.projectBrief" solo ></v-text-field>
                        </div>
                        
                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Project Start Date</h2>
                            <v-text-field v-model="formData.projectStartDate" solo ></v-text-field>
                        </div>
                        
                        <div class="d-flex field align-items justify-center">
                            <h2 class="mt-2">Project End Date</h2>
                            <v-text-field v-model="formData.projectEndDate" solo ></v-text-field>
                        </div>
                        
                        <v-btn depressed block class="btn-hover mt-6"> Submit</v-btn>
                    </form>
                
            </div>
            <div v-if="showForm && componentName === 'BusinessConsulting'" class="formCard">
                  <form class="businessConsultingForm" > 
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Name</h2>
                                <v-text-field v-model="formData.name" solo ></v-text-field>

                            </div>
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Company’s Name</h2>
                                <v-text-field v-model="formData.companyName" solo ></v-text-field>
                            </div>
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Email Address</h2>
                                <v-text-field v-model="formData.email" solo ></v-text-field>
                            </div>

                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Industry</h2>
                                <v-select
                                v-model="formData.industry" 
                                solo 
                                :items="highestDegree"></v-select>
                            </div>
                            
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Position</h2>
                                <v-text-field v-model="formData.position" solo ></v-text-field>
                            </div>
                            
                            <div class="d-flex flex-column field align-items justify-center">
                                <h2 class="my-3">Business Improvement Needs</h2>
                                <v-textarea v-model="formData.bizImprovementNeeds" solo ></v-textarea>
                            </div>
                            
                            <v-btn depressed block class="btn-hover mt-6"> Submit</v-btn>
                        </form>
                </div>
            <div v-if="showForm && componentName === 'StaffResourcing'" class="formCard">
                  <form class="businessConsultingForm" > 
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Name</h2>
                                <v-text-field v-model="formData.name" solo ></v-text-field>

                            </div>
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Company’s Name</h2>
                                <v-text-field v-model="formData.companyName" solo ></v-text-field>
                            </div>
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Email Address</h2>
                                <v-text-field v-model="formData.email" solo ></v-text-field>
                            </div>

                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Industry</h2>
                                <v-select
                                v-model="formData.industry" 
                                solo 
                                :items="highestDegree"></v-select>
                            </div>
                            
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Location</h2>
                                <v-text-field v-model="formData.location" solo ></v-text-field>
                            </div>
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Positions Recruiting</h2>
                                <v-text-field v-model="formData.position" solo ></v-text-field>
                            </div>
                            
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Number of Candidate</h2>
                                <v-text-field v-model="formData.noOfCandidates" solo ></v-text-field>
                            </div>
                            <div class="startEndDate d-flex align-items justify-space-between">
                              <div style="width: 100%;" class="d-flex field align-items justify-center">
                                <h2 class="">Start Date</h2>
                                <v-text-field v-model="formData.projectStartDate" solo ></v-text-field>
                            </div>

                            <div style="width: 100%;" class="d-flex ml-2 field align-items justify-center">
                                <h2 class="">End Date</h2>
                                <v-text-field v-model="formData.projectEndDate" solo ></v-text-field>
                            </div>

                            </div>
                            
                            <v-btn depressed block class="btn-hover mt-6" @click="submit()"> Submit</v-btn>
                        </form>
                </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"EngageUs",
    props:{
        title: String,
        bgColor: String,
        componentName: String
    },
    data(){
      return{
        showForm: false,
        formData:{
        name:"",
        companyName:"",
        email:"",
        industry:"",
        projectName:"",
        projectBrief:"",
        projectEndDate:"",
        projectStartDate:"",
        position:"",
        bizImprovementNeeds:"",
        noOfCandidates:"",
        },
        highestDegree:[
                'Secondary School','Bsc', 'Masters', 'College', 'Phd'
            ]
        
      }
    },
    methods:{
      submit(){
        console.log(this.formData)
        this.showForm = false
      }
    }

}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/pexels-morillo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 330px;
    background-position: center center; 
    margin: 150px auto 0;
     h3{
          font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 54px;
        text-align: center;
        max-width: 560px;
        margin: auto;

        // color: #FFFFFF;
    //    @media (max-width: 768px) {
    //        font-size: 40px;
    //     line-height: 50px;
    //     text-align: center;
    //    }
    //    @media (max-width: 320px) {
    //        font-size: 30px;
    //     line-height: 35px;
    //     text-align: center; 
    //    }
     }
}
.startEndDate{
  @media (max-width: 500px) {
    flex-wrap: wrap;
    width: 100%;
  }
}
.mainDiv{
    max-width:1440px;
     margin:auto; 
     width:70%;
     position: relative;
     @media (max-width: 700px) {
        width:95%;
       }
}
.layer {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: auto;
    height: 100%;
}
.showFormLayer{
    flex-direction: column;
    width: 100%;
    padding: 50px 0;
    margin: auto;
    height: 100%;
}
.inner{
width: 100%;
//  margin: auto;
}
.field{
    @media (max-width: 650px) {
        flex-direction: column;
        justify-content: left;
    }
}
.formCard{
    background: #FFFFFF;
    box-shadow: -4px -3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 40px;
    width: 80%;

   margin: 40px auto 10px;
    @media (max-width: 849px) {
            padding: 40px;
            width: 90%;
        }
    @media (max-width: 500px) {
            padding: 40px 20px;
        }
    h5{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.7);
    }
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.8);
        margin-right: 20px;
         @media (max-width: 650px) {
            margin-right: 0;
            margin-bottom: 5px;
        }
    }
}
</style>
