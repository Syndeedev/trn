<template>
  <section class="hero" >
      <div class="cardWrapper"> 
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <h2 class="text-center">Let’s Get in Touch</h2>
            <div class="d-flex mb-2 mt-8 align-items">
              <img src="~/assets/map-pin.svg">
              <h4 class="ml-5"> 99, Obafemi Awolowo Way, Ikeja, Lagos, Nigeria</h4>
            </div>
            <div class="d-flex mb-2 align-items">
              <img src="~/assets/mail.svg">
              <h4 class="ml-5">hello@trnconsulting.com</h4>
            </div>
            <div class="d-flex mb-2 align-items">
              <img src="~/assets/phone.svg">
              <h4 class="ml-5">+234 812 756 4770</h4>
            </div>
          
          <div class="wrapper">
            <!-- <v-btn depressed class="btn-hover mt-8"> Contact Us</v-btn> -->
            <contact-us class="mt-4"/>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" class="formCard">
          <div class=" colTwo flex-column">
          <h2 class="text-center">Sign up to newsletter</h2>
          <validation-observer ref="observer" v-slot="{handleSubmit}"> 
                <v-form class="tw-mt-6 " @submit.prevent="handleSubmit(submit)">
                    <validation-provider
                      v-slot="{ errors }"
                      name="First name"
                      rules="required">
                        <v-text-field class="mt-8" solo placeholder="FIRST NAME" v-model="firstName"/>
                        <span v-show="errors" class="err ">{{ errors[0] }} </span>
                    </validation-provider>

                    <validation-provider
                      v-slot="{ errors }"
                      name="email"
                      rules="required|email">
                        <v-text-field class="mt-3" solo placeholder="EMAIL ADDRESS" v-model="email"/>
                       <span v-show="errors" class="err ">{{ errors[0] }} </span>
                    </validation-provider>

                      <div class="wrapper b mt-7">
                        <v-btn type="submit" depressed class="btn-hover"> Subscribe</v-btn>
                      </div>
                </v-form>
          </validation-observer>
          
          </div>
        </v-col>
      </v-row>
        <div class="wrapper mt-16">
          <a href=""><img class="mx-4" src="~/assets/socialIcons/facebook.svg" alt="facebook"></a>
          <a href=" https://twitter.com/trnconsulting"><img class="mx-4" src="~/assets/socialIcons/twitter.svg" alt="twitter"></a>
          <a href="https://www.linkedin.com/company/trnconsultingservices/"><img class="mx-4" width="37" height="38" src="~/assets/socialIcons/linkedin.png" alt="linkedin"></a>
          <a href="https://www.instagram.com/trn.consulting/"><img class="mx-4" width="37" height="38" src="~/assets/socialIcons/instagram.png" alt="instagram"></a>
        </div>
      </div>

       <snackbar :snackbar="openSnackBar" @closeSnackBar="openSnackBar = $event"/>
  </section>
</template>

<script>
import contactUs from './contactUs.vue'
import Snackbar from './snackbar.vue'
export default {
  name: "Footer",
  components: { contactUs, Snackbar },
  data(){
    return{
      openSnackBar:false,
      firstName:"",
      email:""

    }
  },
  methods:{
    submit(){
      console.log(this.firstName, this.email)
            try{
                this.$fire.firestore.collection("subscribe_list").
                doc(this.email).set(
                  {
                    firstName: this.firstName,
                    email: this.email
                  }
                )
                this.firstName = "", 
                this.email =""
                this.$refs.observer.reset()
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
    background-image: url("~/assets/footer.png");
    background-repeat: no-repeat;
    background-size: cover;
    // height: 300px;
    padding: 76px 0;
    background-position: center center;  
    margin-top: 100px;
}
.cardWrapper{
    width: 80%;
    max-width:1440px;
    margin: auto;
    @media (max-width: 768px) {
        width: 95%;
       }
}
.colTwo{
  width: 100%;
}
.theme--light.v-input{
  width: 100%;
}
h4{
  font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
}
.err{
    color: red;
    font-size: 13px;
}
.formCard ::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details{
    display: none;
}
</style>