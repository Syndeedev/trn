<template>
  <section @mouseover="showForm = true"  class="mainDiv">
    <div class=" hero" >
        <div :style="{backgroundColor: bgColor}" :class="[showForm ? 'showFormLayer' : 'layer']" class="wrapper">
          <div class="inner">
            <h3 class="text-center">{{title}}</h3>
            <div v-if="showForm && componentName === 'ProjectManagement'" class="formCard">
                 <validation-observer ref="observer" v-slot="{handleSubmit}">
                      <v-form class="tw-mt-6 projectManagementForm" @submit.prevent="handleSubmit(projectManagementSubmit)">
                          <validation-provider
                            v-slot="{ errors }"
                            name="name"
                            rules="required">
                                <div class="d-flex field align-items justify-center">
                                    <h2 class="mt-2">Name</h2>
                                    <v-text-field v-model="projectManagement.name" solo ></v-text-field>
                                </div>
                                <span v-show="errors" class="err ">{{ errors[0] }} </span>
                            </validation-provider>

                        <validation-provider
                            v-slot="{ errors }"
                            name="company's name"
                            rules="required">
                                <div class="d-flex field align-items justify-center">
                                    <h2 >Company’s Name</h2>
                                    <v-text-field v-model="projectManagement.companyName"
                                    solo
                                    ></v-text-field>
                                </div>
                                <span v-show="errors" class="err ">{{ errors[0] }} </span>
                            </validation-provider>

                            <validation-provider
                          v-slot="{ errors }"
                          name="position"
                          rules="numeric">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Phone number</h2>
                                <v-text-field v-model="projectManagement.phoneNumber" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                            v-slot="{ errors }"
                            name="industry"
                            rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Industry</h2>
                                <v-select
                                v-model="projectManagement.industry" 
                                solo 
                                :items="industries"></v-select>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                         <validation-provider
                            v-slot="{ errors }"
                            name="project_name"
                            rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Project Name</h2>
                                <v-text-field v-model="projectManagement.projectName" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        
                        <!-- <validation-provider
                            v-slot="{ errors }"
                            name="project start date"
                            rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Project Start Date</h2>
                                <v-text-field type="date" v-model="projectManagement.projectStartDate" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider> -->
                        
                         <!-- <validation-provider
                            v-slot="{ errors }"
                            name="project end date"
                            rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Project End Date</h2>
                                <v-text-field type="date" v-model="projectManagement.projectEndDate" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider> -->


                        <div class="startEndDate d-flex align-items justify-space-between">
                              <validation-provider style="width:100%"
                                  v-slot="{ errors }"
                                  name="start date"
                                  rules="">
                                    <div style="width: 100%;" class="d-flex field align-items justify-center">
                                      <h2 class="">Project Start Date</h2>
                                      <v-text-field type="date" v-model="projectManagement.projectStartDate" solo ></v-text-field>
                                  </div>
                                  <span v-show="errors" class="err ">{{ errors[0] }} </span>
                              </validation-provider>
                              <validation-provider style="width:100%"
                                  v-slot="{ errors }"
                                  name="end date"
                                  rules="">
                                  <div style="width: 100%;" class="d-flex projectenddate ml-2 field align-items justify-center">
                                      <h2 class=""> Project End Date</h2>
                                      <v-text-field type="date" v-model="projectManagement.projectEndDate" solo ></v-text-field>
                                  </div>
                                  <span v-show="errors" class="err ">{{ errors[0] }} </span>
                              </validation-provider>

                            </div>

                        <validation-provider
                            v-slot="{ errors }"
                            name="project_brief"
                            rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Project Brief</h2>
                                <v-textarea v-model="projectManagement.projectBrief" solo ></v-textarea>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        
                        
                        <v-btn depressed block type="submit" class="btn-hover mt-6" > Submit</v-btn>
                      </v-form>
                 </validation-observer>
                
            </div>
            <div v-if="showForm && componentName === 'BusinessConsulting'" class="formCard">
              <validation-observer ref="observer" v-slot="{handleSubmit}">
                 <v-form class="tw-mt-6 businessConsultingForm" @submit.prevent="handleSubmit(businessConsultingSubmit)">
                        <validation-provider
                          v-slot="{ errors }"
                          name="name"
                          rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Name</h2>
                                <v-text-field v-model="businessConsulting.name" solo ></v-text-field>

                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="company's name"
                          rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Company’s Name</h2>
                                <v-text-field v-model="businessConsulting.companyName" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>


                        <validation-provider
                          v-slot="{ errors }"
                          name="position"
                          rules="numeric">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Phone number</h2>
                                <v-text-field v-model="businessConsulting.phoneNumber" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="email"
                          rules="required|email">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Email Address</h2>
                                <v-text-field v-model="businessConsulting.email" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="industry"
                          rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Industry</h2>
                                <v-select
                                v-model="businessConsulting.industry" 
                                solo 
                                :items="industries"></v-select>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <!-- <validation-provider
                          v-slot="{ errors }"
                          name="position"
                          rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Position</h2>
                                <v-text-field v-model="businessConsulting.position" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider> -->

                        <validation-provider
                          v-slot="{ errors }"
                          name="position"
                          rules="">
                            <div class="d-flex flex-column field align-items justify-center">
                                <h2 class="mb-3">Business Improvement Needs</h2>
                                <v-textarea v-model="businessConsulting.bizImprovementNeeds" solo ></v-textarea>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                            
                            <v-btn depressed block class="btn-hover mt-6" type="submit"> Submit</v-btn>
                    </v-form>
                  </validation-observer>
                </div>
            <div v-if="showForm && componentName === 'StaffResourcing'" class="formCard">
              <validation-observer ref="observer" v-slot="{handleSubmit}"> 
                <v-form class="tw-mt-6 businessConsultingForm" @submit.prevent="handleSubmit(staffResourcingSubmit)">
                        <validation-provider
                          v-slot="{ errors }"
                          name="name"
                          rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Name</h2>
                                <v-text-field v-model="staffResourcing.name" solo ></v-text-field>

                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="company's name"
                          rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Company’s Name</h2>
                                <v-text-field v-model="staffResourcing.companyName" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="email"
                          rules="required|email">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Email Address</h2>
                                <v-text-field v-model="staffResourcing.email" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="position"
                          rules="numeric">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Phone number</h2>
                                <v-text-field v-model="staffResourcing.phoneNumber" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="industry"
                          rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Industry</h2>
                                <v-select
                                v-model="staffResourcing.industry" 
                                solo 
                                :items="industries"></v-select>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="location"
                          rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Location</h2>
                                <v-text-field v-model="staffResourcing.location" solo ></v-text-field>
                            </div>
                             <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        <validation-provider
                          v-slot="{ errors }"
                          name="position"
                          rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Position(s) Recruiting</h2>
                                <v-text-field v-model="staffResourcing.position" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                          <validation-provider
                            v-slot="{ errors }"
                            name="no of candidate"
                            rules="numeric">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Number of Candidate</h2>
                                <v-text-field v-model="staffResourcing.noOfCandidates" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>
                        
                            
                            
                            <v-btn depressed block class="btn-hover mt-6" type="submit"> Submit</v-btn>
                    </v-form>
                  </validation-observer>
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
        componentName: String,
        clearField: {
            type: Boolean,
            default: false
        }
    },
    data(){
      return{
        showForm: false,
        projectManagement:{
            name:"",
            companyName:"",
            phoneNumber:"",
            industry:"",
            projectName:"",
            projectBrief:"",
            projectEndDate:"",
            projectStartDate:"",
        },
        businessConsulting:{
           name:"",
          companyName:"",
          email:"",
          industry:"",
          phoneNumber:"",
          bizImprovementNeeds:"",
        },
        staffResourcing:{
          name:"",
          companyName:"",
          email:"",
          phoneNumber:"",
          industry:"",
          location:"",
          position:"",
          noOfCandidates:"",
          staffResourceStartDate:"",
          staffResourceEndDate:""
        },
        industries:[
          'ICT', 'Banking', 'Agriculture', 'Real Estate', 'Consumer Goods', 'Healthcare', 'Oil & Gas', 'Entertainment', 'Hospitality', 'Utilities'
                
            ]
        
      }
    },
    methods:{
      projectManagementSubmit(){
          this.$emit('project', this.projectManagement)
              setTimeout(() => {
                this.clearForm()
                this.$refs.observer.reset()
            },2000)  
      },
      businessConsultingSubmit(){
         this.$emit('business', this.businessConsulting)
              setTimeout(() => {
                this.clearForm()
                this.$refs.observer.reset()
            },2000)
      },
      staffResourcingSubmit(){
         this.$emit('staff', this.staffResourcing)
              setTimeout(() => {
                this.clearForm()
                this.$refs.observer.reset()
            },2000)
      },
      clearForm(){
        this.projectManagement.name ="",
        this.projectManagement.companyName ="",
        this.projectManagement.industry = "",
        this.projectManagement.projectName = "",
        this.projectManagement.phoneNumber = "",
        this.projectManagement.projectBrief = "",
        this.projectManagement.projectEndDate = "",
        this.projectManagement.projectStartDate = "",

        this.businessConsulting.name ="",
        this.businessConsulting.companyName ="",
        this.businessConsulting.phoneNumber ="",
        this.businessConsulting.email = "",
        this.businessConsulting.industry = "",
        this.businessConsulting.position = "",
        this.businessConsulting.bizImprovementNeeds = "",

        this.staffResourcing.name ="",
        this.staffResourcing.companyName ="",
        this.staffResourcing.phoneNumber ="",
        this.staffResourcing.email = "",
        this.staffResourcing.industry = "",
        this.staffResourcing.location = "",
        this.staffResourcing.position = "",
        this.staffResourcing.noOfCandidates = "",
        this.staffResourcing.staffResourceStartDate = "",
        this.staffResourcing.staffResourceEndDate = ""
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
  @media (max-width: 1110px) {
    flex-wrap: wrap;
    width: 100%;
  }
  h2{
    @media (min-width: 1110px) {
    margin-right: 2px !important ;
    margin-top: 7px;
  }
  }
}
.projectenddate{
   @media (max-width: 1110px) {
    margin-left: 0px !important;
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
.err{
    color: red;
    font-size: 13px;
    margin-left: 20%;
    @media (max-width: 650px) {
            margin-left: 0 !important;
            margin-bottom: 10px;
        }
}
.formCard ::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details{
    display: none;
}
</style>
