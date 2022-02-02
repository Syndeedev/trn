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
                <form>
                    <div class="d-flex field align-items justify-center">
                        <h3 class="mt-3">Position</h3>
                        <v-select
                        v-model="degree" 
                        solo 
                        :items="highestDegree"></v-select>
                    </div>
                    <div class="d-flex field align-items justify-center">
                        <h3 class="mt-3">Candidate Name</h3>
                        <v-text-field solo ></v-text-field>
                    </div>

                    <div class="d-flex field align-items justify-center">
                        <h3 class="mt-3">Highest Degree</h3>
                        <v-select
                        v-model="degree" 
                        solo 
                        :items="highestDegree"></v-select>
                    </div>
                    <div class="d-flex field align-items justify-center">
                        <h3 class="mt-3">Available from (Date)</h3>
                        <v-text-field solo ></v-text-field>
                    </div>
                    <div class="d-flex field align-items justify-center">
                        <h3 class="mt-3">Resume Upload</h3>
                        <v-textarea solo ></v-textarea>
                    </div>
                    <v-btn depressed block class="btn-hover"> Submit</v-btn>
                </form>
            </div> 
        </div>

        <!-- <div class="vector">
         <img src="~/assets/vectorThree.svg">
     </div> -->
  </section>
</template>

<script>
export default {
    created(){
        console.log(this.$route.name)
    },
    data(){
        return{
            degree:"",
            highestDegree:[
                'Secondary School','Bsc', 'Masters', 'College', 'Phd'
            ]
        }
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
</style>