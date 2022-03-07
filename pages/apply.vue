<template>
      <section class="mainDiv">
        <div class=" wrapper hero" >
            <h3 class="text-center">That Dream Job <br>Now In Your Pocket</h3>
        </div>
         
        <div class="cardWrapper">
             <h2 class="pb-8 text-center">We are Recruiting for Our Clients.</h2>
            <h1 class="mb-n10">We are Recruiting for Our<br> Clients.</h1>
            <div class="formCard">
                <h5 class="mb-6">If you’re up for the challenge, submit your application below.</h5>
              
            <validation-observer ref="observer" v-slot="{handleSubmit}"> 
                <v-form class="tw-mt-6" @submit.prevent="handleSubmit(submit)">
                        <validation-provider
                          v-slot="{ errors }"
                          name="Position"
                          rules="required">
                            <div class="d-flex field align-items justify-center">
                                <h3 class="mt-3">Position</h3>
                               <v-combobox
                                    v-model="position" 
                                    solo 
                                    :items="positions"></v-combobox>
                            </div>
                           
                        <span v-show="errors" class="err ">{{ errors[0] }} </span>
                    </validation-provider>
                    
                    <validation-provider
                          v-slot="{ errors }"
                          name="Candidate name"
                          rules="required">
                        <div class="d-flex field align-items justify-center">
                            <h3 class="mt-3">Candidate Name</h3>
                            <v-text-field
                            :error-messages="errorMessages"
                            @input="errorMessages = ''"
                            required solo v-model="candidate_name" ></v-text-field>
                        </div>
                        <span v-show="errors" class="err ">{{ errors[0] }} </span>
                    </validation-provider>
                    <validation-provider
                          v-slot="{ errors }"
                          name="phone number"
                          rules="required|numeric">
                            <div class="d-flex field align-items justify-center">
                                <h3 class="mt-2">Phone Number</h3>
                                <v-text-field v-model="phoneNumber" solo ></v-text-field>
                            </div>
                            <span v-show="errors" class="err ">{{ errors[0] }} </span>
                        </validation-provider>

                    <validation-provider
                          v-slot="{ errors }"
                          name="Highest degree"
                          rules="">
                        <div class="d-flex field align-items justify-center">
                            <h3 class="mt-3">Highest Degree</h3>
                            <v-select
                            v-model="degree" 
                            solo 
                            :items="highestDegree"></v-select>
                        </div>
                         <span v-show="errors" class="err ">{{ errors[0] }} </span>
                    </validation-provider>

                    <validation-provider
                          v-slot="{ errors }"
                          name="date "
                          rules="">
                        <div class="d-flex field align-items justify-center">
                            <h3 class="mt-3">Available from (Date)</h3>
                            <v-text-field type="date" solo v-model="date" ></v-text-field>
                        </div>
                         <span v-show="errors" class="err ">{{ errors[0] }} </span>
                    </validation-provider>
                    <!-- <div class="d-flex field align-items justify-center">
                        <h3 class="mt-3">Resume Upload</h3>
                        <v-textarea solo ></v-textarea>
                    </div> -->
                    <v-btn depressed block class="btn-hover mt-7" type="submit" > Submit</v-btn>
                </v-form>
            </validation-observer>
               
            </div> 
        </div>
        <snackbar :snackbar="openSnackBar" @closeSnackBar="closeSnackBar($event)"/>
        <!-- <div class="vector">
         <img src="~/assets/vectorThree.svg">
     </div> -->

    
          
  </section>
</template>

<script>
import snackbar from '../components/reusables/snackbar.vue'
export default {
  components: { snackbar },
    data(){
        return{
            openSnackBar: false,
            positions:[
                "Business Developer", 
                "Customer Service Representative", 
                "Accountant, Sales Agent, Marketer", 
                "Frontend Engineer", 
                "Backend Engineer", 
                "Product Designer", 
                "Graphic Designer", 
                "Web Developer", 
                "Data Analyst", 
                "Devops Engineer", 
                "Business Analyst", 
                "Project Manager", 
                "Others"

            ],
            candidate_name:"",
            date:"",
            degree:"",
            position:"",
            phoneNumber:"",
            highestDegree:[
                "High School Cert", "Bachelor's Degree", "Master’s Degree", "Doctorate"
            ],
            errorMessages:"",
            positionErrorMessages:""
            
        }
    },
    methods:{
        closeSnackBar( value){
                this.openSnackBar = value
        },
        clearForm(){
            this.position = "",
            this.candidate_name = "",
            this.degree = "",
            this.date = "",
            this.phoneNumber = ""
        },
        submit(){
            const userData = {
                         position:this.position,
                        candidate_name: this.candidate_name,
                        date: this.date,
                        degree: this.degree,
                        phone_number: this.phoneNumber
                    }
           
            try{
                this.$fire.firestore.collection("apply_for_job").
                doc().set( userData )
                this.clearForm()
                this.$refs.observer.reset()
                this.openSnackBar = true
            }
            catch(err){
                    console.log(err)
            }
        }

        // saveToGoogleSheet () {
        //     const scriptURL = 'https://script.google.com/macros/s/.../exec'
        //     const form = ''
        //     var sendingData = new FormData(form)
        //     sendingData.append('starRating', this.feedbackData.starRating)

        //     fetch(scriptURL, {method: 'POST', body: new FormData(sendingData)})
        //         .then(response => console.log('Success!', response))
        //         .catch(error => console.error('Error!', error.message))
        //     }

    }

}
</script>

<style lang="scss" scoped>
.hero{
    background-image: url("~/assets/apply.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    background-position: center center; 
    margin: 150px auto 80px;
    
     h3{
          font-weight: 800;
        font-size: 44px;
        line-height: 60px;
       @media (max-width: 768px) {
           font-size: 40px;
        line-height: 50px;
        text-align: center;
       }
       @media (max-width: 320px) {
           font-size: 26px;
        line-height: 30px;
        text-align: center; 
       }
     }
}
.mainDiv{
    max-width:1440px;
     margin:auto; 
     width:90%;
     position: relative;
     @media (max-width: 700px) {
        width:95%;
       }
}
.cardWrapper{
    width: 75%;
    margin: auto ;
    @media (max-width: 768px) {
        margin: auto ;
        width: 95%;
       }
    h2{
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 30px;
        color: #3779C7;
        @media (min-width: 850px) {
            display: none;
            
    }
}
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
    padding: 80px;
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
    h3{
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
 h1{
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    color: #3779C7;
    position:relative;
    z-index: 2;
    margin-left: -100px;
    @media (max-width: 849px) {
        display: none;
    }
}
.vector{
    position: absolute;
    bottom: 0;
    left: -20%;
}

.err{
    color: red;
    font-size: 13px;
    margin-left: 20%;
    @media (max-width: 650px) {
            margin-left: 0 !important;
        }
}
.formCard ::v-deep .v-text-field.v-text-field--enclosed .v-text-field__details{
    display: none;
}
</style>