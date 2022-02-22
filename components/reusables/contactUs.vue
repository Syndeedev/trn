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
            <validation-observer ref="observer" v-slot="{handleSubmit}"> 
                <v-form class="tw-mt-6" @submit.prevent="handleSubmit(submit)">
                    <validation-provider
                        v-slot="{ errors }"
                        name="name"
                        rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Name</h2>
                                <v-text-field v-model="formData.name" solo ></v-text-field>

                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="company's name"
                          rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Company’s Name</h2>
                                <v-text-field v-model="formData.companyName" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="email"
                          rules="required|email">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Email Address</h2>
                                <v-text-field v-model="formData.email" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="phone number"
                          rules="required|numeric">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Phone Number</h2>
                                <v-text-field v-model="formData.phoneNumber" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="subject"
                          rules="">
                            <div class="d-flex field align-items justify-center">
                                <h2 class="mt-2">Subject </h2>
                                <v-text-field v-model="formData.subject " solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                        <validation-provider
                          v-slot="{ errors }"
                          name="message"
                          rules="">
                            <div class="d-flex flex-column field align-items justify-center">
                                <h2 class="my-3">Message</h2>
                                <v-textarea v-model="formData.message" solo ></v-textarea>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                            <v-btn depressed block class="btn-hover mt-6" type="submit"> Send Message</v-btn>
                </v-form>
            </validation-observer>
                </div>

      </v-card>
       </v-dialog>
        <snackbar :snackbar="openSnackBar" @closeSnackBar="openSnackBar = $event"/>
  </div>
</template>

<script>
import snackbar from './snackbar.vue'
export default {
  components: { snackbar },
data () {
      return {
        openSnackBar: false,
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
             try{
                this.$fire.firestore.collection("contact_us").
                doc(this.formData.email).set(this.formData)
                this.clearForm()
                 this.$refs.observer.reset()
                this.openSnackBar = true 
                this.dialog = false
            }
            catch(err){
                    console.log(err)
            }
        },
        clearForm(){
            this.formData.name = "",
            this.formData.companyName = "",
            this.formData.email = "",
            this.formData.phoneNumber = "",
            this.formData.subject = "",
            this.formData.message = "" 
        },
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