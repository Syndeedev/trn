<template>
  <div>
       <v-dialog
      v-model="dialog"
      width="600"
    >
      <template v-slot:activator="{ on, attrs }">
       
          <v-btn v-bind="attrs" v-on="on" depressed class="btn-hover"> Contact Us</v-btn>
       
      </template>
      <v-card>
          <div class="formCard">
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
                                <h2 class="mt-2">Phone Number</h2>
                                <v-text-field v-model="formData.phoneNumber" solo ></v-text-field>
                            </div>
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Subject </h2>
                                <v-text-field v-model="formData.subject " solo ></v-text-field>
                            </div>
                            
                            <div class="d-flex flex-column field align-items justify-center">
                                <h2 class="my-3">Message</h2>
                                <v-textarea v-model="formData.message" solo ></v-textarea>
                            </div>

                            
                            
                            <v-btn depressed block class="btn-hover mt-6" @click="submit()"> Send Message</v-btn>
                        </form>
                </div>

      </v-card>
       </v-dialog>
  </div>
</template>

<script>
export default {
data () {
      return {
        dialog: false,
        formData:{
        name:"",
        companyName:"",
        email:"",
        phoneNumber:"",
        subject:"",
        message:""
        },
      }
    },
    methods:{
        submit(){
            console.log(this.formData)
        }
    }
}
</script>

<style lang="scss" scoped>
.field{
    @media (max-width: 650px) {
        flex-direction: column;
        justify-content: left;
    }
}
.formCard{
   
    padding: 40px;

    @media (max-width: 849px) {
            padding: 40px;
            
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