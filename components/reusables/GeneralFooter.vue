<template>
  <section class="hero" >
      <div class="cardWrapper"> 
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <h2 class="text-center">Let’s Get in Touch</h2>
            <div class="d-flex mb-2 mt-8 align-items">
              <img src="~/assets/map-pin.svg">
              <h4 class="ml-5">30 Herbert Macauley way, Sabo bus-stop Yaba Lagos</h4>
            </div>
            <div class="d-flex mb-2 align-items">
              <img src="~/assets/mail.svg">
              <h4 class="ml-5">ilovejesus45@gmail.com</h4>
            </div>
            <div class="d-flex mb-2 align-items">
              <img src="~/assets/phone.svg">
              <h4 class="ml-5">+2348023456712, +2349098876652 </h4>
            </div>
          
          <div class="wrapper">
            <v-btn depressed class="btn-hover mt-8"> Contact Us</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <div class="wrapper colTwo flex-column">
          <h2>Sign up to newsletter</h2>
          <v-text-field class="mt-8" solo placeholder="FIRST NAME"/>
          <v-text-field solo placeholder="EMAIL ADDRESS"/>
          <v-btn depressed class="btn-hover mt-4"> Subscribe</v-btn>
          </div>
        </v-col>
      </v-row>
      </div>
  </section>
</template>

<script>
export default {
name: "Footer",
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
</style>